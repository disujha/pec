'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Award,
  Briefcase,
  Building2,
  Calendar,
  Download,
  ExternalLink,
  FileCheck,
  FileText,
  Filter,
  IndianRupee,
  MapPin,
  RefreshCw,
  Search,
  X,
} from 'lucide-react';
import { PdfCanvasViewer } from './PdfCanvasViewer';

interface PublicCompany {
  id: string;
  name: string;
  description: string;
  hasLogo: boolean;
  logoUrl: string | null;
  showFinancialValue: boolean;
  displayOrder: number;
}

interface PublicLocation {
  id: string;
  companyId: string;
  locationName: string;
  city: string;
  state: string;
  description: string;
  showFinancialValue: boolean;
  displayOrder: number;
}

interface PublicCategory {
  id: string;
  name: string;
  description?: string;
}

interface PublicProject {
  id: string;
  companyId: string;
  locationId: string;
  title: string;
  description: string;
  scopeOfWork: string;
  categoryIds: string[];
  startDate: string | null;
  completionDate: string | null;
  status: string;
  showFinancialValue: boolean;
}

interface PublicWorkOrder {
  id: string;
  projectId: string;
  title: string;
  referenceNumber: string;
  issueDate: string | null;
  value: number | null;
  currency: string;
  remarks: string;
  status: string;
  isAmendment: boolean;
  allowDownload: boolean;
  hasDocument: boolean;
  documentUrl: string | null;
}

interface PublicCompletionCertificate {
  id: string;
  projectId: string;
  workOrderId: string;
  title: string;
  referenceNumber: string;
  issueDate: string | null;
  remarks: string;
  allowDownload: boolean;
  hasDocument: boolean;
  documentUrl: string | null;
}

interface PublicCredentialsPayload {
  settings: {
    showOverallValue: boolean;
    introText: string;
  };
  summary: {
    totalCompanies: number;
    totalLocations: number;
    totalProjects: number;
    totalWorkOrders: number;
    totalCompletionCertificates: number;
    overallTotalValue: number | null;
  };
  companies: PublicCompany[];
  locations: PublicLocation[];
  categories: PublicCategory[];
  projects: PublicProject[];
  workOrders: PublicWorkOrder[];
  completionCertificates: PublicCompletionCertificate[];
  totals: {
    projects: Record<string, number | null>;
    locations: Record<string, number | null>;
    companies: Record<string, number | null>;
  };
}

function formatINR(amount: number, compact = false): string {
  const value = Number(amount) || 0;
  if (compact) {
    if (value >= 1_00_00_000) return `₹${(value / 1_00_00_000).toFixed(2)} Cr`;
    if (value >= 1_00_000) return `₹${(value / 1_00_000).toFixed(2)} L`;
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDate(iso: string | null): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

const STATUS_BADGE: Record<string, { label: string; className: string }> = {
  completed: {
    label: 'Completed',
    className: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  },
  ongoing: {
    label: 'Ongoing',
    className: 'bg-blue-50 text-blue-800 border-blue-200',
  },
  awarded: {
    label: 'Awarded',
    className: 'bg-amber-50 text-amber-800 border-amber-200',
  },
  on_hold: {
    label: 'On Hold',
    className: 'bg-gray-100 text-gray-700 border-gray-200',
  },
};

export function CredentialsPortfolio() {
  const [data, setData] = useState<PublicCredentialsPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [selectedCompanyId, setSelectedCompanyId] = useState('');
  const [selectedLocationId, setSelectedLocationId] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const [pdfModal, setPdfModal] = useState<{
    isOpen: boolean;
    title: string;
    subtitle: string;
    pdfUrl: string;
    downloadUrl: string;
    allowDownload: boolean;
  }>({
    isOpen: false,
    title: '',
    subtitle: '',
    pdfUrl: '',
    downloadUrl: '',
    allowDownload: true,
  });

  const detailsRef = useRef<HTMLDivElement>(null);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const res = await fetch('/api/credentials/public', { cache: 'no-store' });
      if (!res.ok) throw new Error('Unable to load project credentials.');
      const payload: PublicCredentialsPayload = await res.json();
      setData(payload);
    } catch (err: any) {
      setError(err?.message || 'Failed to load credentials.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    if (!pdfModal.isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPdfModal((p) => ({ ...p, isOpen: false, pdfUrl: '' }));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [pdfModal.isOpen]);

  const categoryMap = useMemo(
    () => new Map((data?.categories || []).map((c) => [c.id, c])),
    [data?.categories]
  );

  const filteredProjects = useMemo(() => {
    if (!data) return [];
    const q = searchQuery.trim().toLowerCase();
    return data.projects.filter((p) => {
      if (selectedCompanyId && p.companyId !== selectedCompanyId) return false;
      if (selectedLocationId && p.locationId !== selectedLocationId) return false;
      if (selectedCategoryId && !p.categoryIds.includes(selectedCategoryId))
        return false;
      if (q) {
        const compName =
          data.companies.find((c) => c.id === p.companyId)?.name.toLowerCase() ||
          '';
        const locName =
          data.locations
            .find((l) => l.id === p.locationId)
            ?.locationName.toLowerCase() || '';
        const catNames = p.categoryIds
          .map((cid) => categoryMap.get(cid)?.name.toLowerCase() || '')
          .join(' ');
        const matches =
          p.title.toLowerCase().includes(q) ||
          p.scopeOfWork.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          compName.includes(q) ||
          locName.includes(q) ||
          catNames.includes(q);
        if (!matches) return false;
      }
      return true;
    });
  }, [
    data,
    selectedCompanyId,
    selectedLocationId,
    selectedCategoryId,
    searchQuery,
    categoryMap,
  ]);

  const groupedByCompany = useMemo(() => {
    if (!data) return [];
    const visibleIds = new Set(filteredProjects.map((p) => p.id));
    return data.companies
      .filter((comp) => filteredProjects.some((p) => p.companyId === comp.id))
      .map((comp) => ({
        company: comp,
        locations: data.locations
          .filter(
            (loc) =>
              loc.companyId === comp.id &&
              filteredProjects.some(
                (p) => p.locationId === loc.id && visibleIds.has(p.id)
              )
          )
          .map((loc) => ({
            location: loc,
            projects: filteredProjects.filter((p) => p.locationId === loc.id),
          })),
      }));
  }, [data, filteredProjects]);

  const handleSelectCompany = (companyId: string) => {
    setSelectedCompanyId((prev) => (prev === companyId ? '' : companyId));
    setSelectedLocationId('');
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  const clearFilters = () => {
    setSelectedCompanyId('');
    setSelectedLocationId('');
    setSelectedCategoryId('');
    setSearchQuery('');
  };

  const hasFilters = Boolean(
    selectedCompanyId || selectedLocationId || selectedCategoryId || searchQuery
  );

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* SECTION 1: PEC HEADER */}
      <section className="bg-pec-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grid-pattern" />
        <div className="relative container mx-auto px-6 py-14 sm:py-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="h-16 w-16 rounded-xl bg-white p-2 shadow-md shrink-0 flex items-center justify-center">
                <img
                  src="/pec-new.png"
                  alt="Petrochem Engineering Construction"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  Petrochem Engineering Construction
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-1">
                  Our Project Credentials
                </h1>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-medium bg-white/10 border border-white/15 px-4 py-2.5 rounded-lg self-start md:self-auto">
              <Award className="h-4 w-4 text-amber-400 shrink-0" />
              <span>Verified EPC Track Record &amp; Work Orders</span>
            </div>
          </div>

          <p className="mt-6 text-sm sm:text-base text-gray-300 max-w-4xl leading-relaxed">
            {data?.settings.introText ||
              'Petrochem Engineering Construction delivers turnkey industrial piping, storage tank fabrication & erection, heavy structural works, and multidisciplinary EPC execution for India’s leading energy, refining, and petrochemical enterprises.'}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-10 space-y-10">
        {loading && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-28 rounded-xl bg-white border border-gray-200 animate-pulse"
                />
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-32 rounded-xl bg-white border border-gray-200 animate-pulse"
                />
              ))}
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="bg-white rounded-xl border border-red-200 p-8 text-center space-y-3">
            <p className="text-sm font-medium text-red-700">{error}</p>
            <button
              type="button"
              onClick={loadData}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Retry
            </button>
          </div>
        )}

        {!loading && !error && data && (
          <>
            {/* SECTION 2: EXPERIENCE SUMMARY */}
            <section
              aria-label="Experience Summary"
              className={`grid grid-cols-2 ${
                data.summary.overallTotalValue !== null
                  ? 'lg:grid-cols-4'
                  : 'lg:grid-cols-3'
              } gap-4`}
            >
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-500">
                  <span>Client Companies</span>
                  <Building2 className="h-4 w-4 text-primary" />
                </div>
                <p className="mt-2 text-3xl font-bold text-pec-navy">
                  {data.summary.totalCompanies}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Refining, petrochemical &amp; EPC clients
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-500">
                  <span>Project Locations</span>
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <p className="mt-2 text-3xl font-bold text-pec-navy">
                  {data.summary.totalLocations}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Sites across India
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-500">
                  <span>Executed Projects</span>
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>
                <p className="mt-2 text-3xl font-bold text-pec-navy">
                  {data.summary.totalProjects}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {data.summary.totalWorkOrders} WOs ·{' '}
                  {data.summary.totalCompletionCertificates} CCs
                </p>
              </div>

              {data.summary.overallTotalValue !== null && (
                <div className="bg-primary text-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white/80">
                    <span>Published WO Value</span>
                    <IndianRupee className="h-4 w-4 text-white" />
                  </div>
                  <p className="mt-2 text-2xl sm:text-3xl font-bold">
                    {formatINR(data.summary.overallTotalValue, true)}
                  </p>
                  <p className="mt-1 text-xs text-white/80">
                    {formatINR(data.summary.overallTotalValue)}
                  </p>
                </div>
              )}
            </section>

            {/* SECTION 3: CLIENT COMPANIES */}
            <section aria-label="Client Companies" className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-pec-navy">
                    Client Portfolio
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Click any client logo to view its project locations, scope,
                    work orders &amp; completion certificates.
                  </p>
                </div>
                {selectedCompanyId && (
                  <button
                    type="button"
                    onClick={() => setSelectedCompanyId('')}
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    Show All Clients
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {data.companies.map((comp) => {
                  const isSelected = selectedCompanyId === comp.id;
                  const compTotal = data.totals.companies[comp.id];
                  const projCount = data.projects.filter(
                    (p) => p.companyId === comp.id
                  ).length;

                  return (
                    <button
                      key={comp.id}
                      type="button"
                      onClick={() => handleSelectCompany(comp.id)}
                      className={`group bg-white rounded-xl p-4 border text-center transition-all flex flex-col items-center justify-between gap-3 ${
                        isSelected
                          ? 'border-primary ring-2 ring-primary/20 shadow-md'
                          : 'border-gray-200 hover:border-primary/50 hover:shadow-sm'
                      }`}
                    >
                      <div className="h-16 w-full flex items-center justify-center bg-gray-50 rounded-lg p-2">
                        {comp.logoUrl ? (
                          <img
                            src={comp.logoUrl}
                            alt={comp.name}
                            className="max-h-12 max-w-full object-contain"
                          />
                        ) : (
                          <Building2 className="h-8 w-8 text-gray-300" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-pec-navy group-hover:text-primary transition-colors">
                          {comp.name}
                        </p>
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          {projCount}{' '}
                          {projCount === 1 ? 'Project' : 'Projects'}
                          {compTotal !== null && compTotal > 0
                            ? ` · ${formatINR(compTotal, true)}`
                            : ''}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* SEARCH & FILTERING */}
            <section
              ref={detailsRef}
              aria-label="Filter Credentials"
              className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold text-pec-navy">
                  <Filter className="h-4 w-4 text-primary" />
                  <span>Search &amp; Filter Projects</span>
                </div>
                {hasFilters && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    <X className="h-3.5 w-3.5" />
                    Reset Filters
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="relative">
                  <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search scope, project, site..."
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>

                <select
                  value={selectedCompanyId}
                  onChange={(e) => {
                    setSelectedCompanyId(e.target.value);
                    setSelectedLocationId('');
                  }}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
                >
                  <option value="">All Client Companies</option>
                  {data.companies.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedLocationId}
                  onChange={(e) => setSelectedLocationId(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
                >
                  <option value="">All Project Locations</option>
                  {data.locations
                    .filter(
                      (l) =>
                        !selectedCompanyId || l.companyId === selectedCompanyId
                    )
                    .map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.locationName}
                      </option>
                    ))}
                </select>

                <select
                  value={selectedCategoryId}
                  onChange={(e) => setSelectedCategoryId(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
                >
                  <option value="">All Work Categories</option>
                  {data.categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
            </section>

            {/* SECTION 4 & 5: CLIENT PROJECT DETAILS & DOCUMENTS */}
            <section aria-label="Client Project Details" className="space-y-8">
              {groupedByCompany.length === 0 ? (
                <div className="bg-white rounded-xl border border-gray-200 p-12 text-center space-y-2">
                  <Briefcase className="h-8 w-8 text-gray-300 mx-auto" />
                  <p className="text-sm font-semibold text-gray-800">
                    No matching project credentials found
                  </p>
                  <p className="text-xs text-gray-500">
                    Adjust or reset your filters to view all published projects.
                  </p>
                </div>
              ) : (
                groupedByCompany.map(({ company, locations }) => {
                  const companyTotal = data.totals.companies[company.id];
                  return (
                    <div
                      key={company.id}
                      className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden"
                    >
                      <div className="bg-gray-50 border-b border-gray-200 px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          {company.logoUrl && (
                            <div className="h-14 w-20 rounded-lg bg-white border border-gray-200 p-1.5 flex items-center justify-center shrink-0">
                              <img
                                src={company.logoUrl}
                                alt={company.name}
                                className="max-h-full max-w-full object-contain"
                              />
                            </div>
                          )}
                          <div>
                            <h3 className="text-xl font-bold text-pec-navy">
                              {company.name}
                            </h3>
                            {company.description && (
                              <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                                {company.description}
                              </p>
                            )}
                          </div>
                        </div>

                        {companyTotal !== null && companyTotal > 0 && (
                          <div className="bg-white border border-primary/20 rounded-xl px-4 py-2.5 shrink-0">
                            <p className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">
                              Total Work Order Value
                            </p>
                            <p className="text-lg font-bold text-primary">
                              {formatINR(companyTotal)}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="divide-y divide-gray-200">
                        {locations.map(({ location, projects: locProjects }) => {
                          const locTotal = data.totals.locations[location.id];
                          const locWOs = locProjects.reduce(
                            (s, p) =>
                              s +
                              data.workOrders.filter(
                                (w) => w.projectId === p.id
                              ).length,
                            0
                          );
                          const locCCs = locProjects.reduce(
                            (s, p) =>
                              s +
                              data.completionCertificates.filter(
                                (c) => c.projectId === p.id
                              ).length,
                            0
                          );

                          return (
                            <div key={location.id} className="p-6 space-y-5">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-100">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                                    <h4 className="text-lg font-bold text-pec-navy">
                                      {location.locationName}
                                    </h4>
                                    {(location.city || location.state) && (
                                      <span className="text-xs text-gray-500">
                                        (
                                        {[location.city, location.state]
                                          .filter(Boolean)
                                          .join(', ')}
                                        )
                                      </span>
                                    )}
                                  </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600">
                                  <span className="px-2.5 py-1 rounded bg-gray-100 font-medium">
                                    {locWOs} Work {locWOs === 1 ? 'Order' : 'Orders'}
                                  </span>
                                  <span className="px-2.5 py-1 rounded bg-gray-100 font-medium">
                                    {locCCs} Completion{' '}
                                    {locCCs === 1 ? 'Certificate' : 'Certificates'}
                                  </span>
                                  {locTotal !== null && locTotal > 0 && (
                                    <span className="px-2.5 py-1 rounded bg-primary/10 text-primary font-bold">
                                      {formatINR(locTotal)}
                                    </span>
                                  )}
                                </div>
                              </div>

                              <div className="space-y-4">
                                {locProjects.map((proj) => {
                                  const projWOs = data.workOrders.filter(
                                    (w) => w.projectId === proj.id
                                  );
                                  const projCCs =
                                    data.completionCertificates.filter(
                                      (c) => c.projectId === proj.id
                                    );
                                  const projTotal =
                                    data.totals.projects[proj.id];
                                  const badge =
                                    STATUS_BADGE[proj.status] ||
                                    STATUS_BADGE.completed;

                                  return (
                                    <div
                                      key={proj.id}
                                      className="rounded-xl border border-gray-200 bg-gray-50/50 p-5 space-y-4"
                                    >
                                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3">
                                        <div className="space-y-2">
                                          <div className="flex flex-wrap items-center gap-2">
                                            <span
                                              className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${badge.className}`}
                                            >
                                              {badge.label}
                                            </span>
                                            {proj.categoryIds.map((cid) => (
                                              <span
                                                key={cid}
                                                className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white border border-gray-200 text-gray-700"
                                              >
                                                {categoryMap.get(cid)?.name ||
                                                  'Work Category'}
                                              </span>
                                            ))}
                                          </div>
                                          <h5 className="text-base font-bold text-pec-navy">
                                            {proj.title}
                                          </h5>
                                          {proj.scopeOfWork && (
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                              {proj.scopeOfWork}
                                            </p>
                                          )}
                                          {(proj.startDate ||
                                            proj.completionDate) && (
                                            <p className="text-xs text-gray-500 flex items-center gap-1.5">
                                              <Calendar className="h-3.5 w-3.5 text-gray-400" />
                                              <span>
                                                {proj.startDate
                                                  ? formatDate(proj.startDate)
                                                  : 'Start N/A'}{' '}
                                                —{' '}
                                                {proj.completionDate
                                                  ? formatDate(
                                                      proj.completionDate
                                                    )
                                                  : 'Ongoing'}
                                              </span>
                                            </p>
                                          )}
                                        </div>

                                        {projTotal !== null && projTotal > 0 && (
                                          <div className="bg-white rounded-lg border border-gray-200 px-3.5 py-2 shrink-0 self-start">
                                            <p className="text-[10px] uppercase tracking-wider font-semibold text-gray-500">
                                              Project Value
                                            </p>
                                            <p className="text-base font-bold text-primary">
                                              {formatINR(projTotal)}
                                            </p>
                                          </div>
                                        )}
                                      </div>

                                      {(projWOs.length > 0 ||
                                        projCCs.length > 0) && (
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-3 border-t border-gray-200">
                                          {projWOs.length > 0 && (
                                            <div className="space-y-2">
                                              <h6 className="text-xs font-bold uppercase tracking-wider text-gray-700 flex items-center gap-1.5">
                                                <FileText className="h-3.5 w-3.5 text-primary" />
                                                Work Orders ({projWOs.length})
                                              </h6>
                                              <div className="space-y-2">
                                                {projWOs.map((wo) => (
                                                  <div
                                                    key={wo.id}
                                                    className="bg-white rounded-lg border border-gray-200 p-3 flex items-center justify-between gap-3"
                                                  >
                                                    <div className="min-w-0">
                                                      <p className="text-xs sm:text-sm font-semibold text-gray-900 truncate">
                                                        {wo.title}
                                                      </p>
                                                      <div className="flex flex-wrap items-center gap-x-2 text-[11px] text-gray-500 mt-0.5">
                                                        {wo.referenceNumber && (
                                                          <span>
                                                            Ref:{' '}
                                                            {wo.referenceNumber}
                                                          </span>
                                                        )}
                                                        {wo.issueDate && (
                                                          <span>
                                                            •{' '}
                                                            {formatDate(
                                                              wo.issueDate
                                                            )}
                                                          </span>
                                                        )}
                                                        {wo.value !== null &&
                                                          wo.value > 0 && (
                                                            <span className="font-semibold text-gray-700">
                                                              •{' '}
                                                              {formatINR(
                                                                wo.value
                                                              )}
                                                            </span>
                                                          )}
                                                      </div>
                                                    </div>

                                                    {wo.hasDocument &&
                                                      wo.documentUrl && (
                                                        <button
                                                          type="button"
                                                          onClick={() =>
                                                            setPdfModal({
                                                              isOpen: true,
                                                              title: wo.title,
                                                              subtitle: [
                                                                wo.referenceNumber,
                                                                formatDate(
                                                                  wo.issueDate
                                                                ),
                                                              ]
                                                                .filter(Boolean)
                                                                .join(' · '),
                                                              pdfUrl:
                                                                wo.documentUrl!,
                                                              downloadUrl: `${wo.documentUrl!}&download=1`,
                                                              allowDownload:
                                                                wo.allowDownload,
                                                            })
                                                          }
                                                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-primary rounded-lg hover:bg-primary-dark shrink-0"
                                                        >
                                                          <ExternalLink className="h-3.5 w-3.5" />
                                                          View PDF
                                                        </button>
                                                      )}
                                                  </div>
                                                ))}
                                              </div>
                                            </div>
                                          )}

                                          {projCCs.length > 0 && (
                                            <div className="space-y-2">
                                              <h6 className="text-xs font-bold uppercase tracking-wider text-gray-700 flex items-center gap-1.5">
                                                <FileCheck className="h-3.5 w-3.5 text-emerald-600" />
                                                Completion Certificates (
                                                {projCCs.length})
                                              </h6>
                                              <div className="space-y-2">
                                                {projCCs.map((cc) => (
                                                  <div
                                                    key={cc.id}
                                                    className="bg-white rounded-lg border border-gray-200 p-3 flex items-center justify-between gap-3"
                                                  >
                                                    <div className="min-w-0">
                                                      <p className="text-xs sm:text-sm font-semibold text-gray-900 truncate">
                                                        {cc.title}
                                                      </p>
                                                      <div className="flex flex-wrap items-center gap-x-2 text-[11px] text-gray-500 mt-0.5">
                                                        {cc.referenceNumber && (
                                                          <span>
                                                            Ref:{' '}
                                                            {cc.referenceNumber}
                                                          </span>
                                                        )}
                                                        {cc.issueDate && (
                                                          <span>
                                                            •{' '}
                                                            {formatDate(
                                                              cc.issueDate
                                                            )}
                                                          </span>
                                                        )}
                                                      </div>
                                                    </div>

                                                    {cc.hasDocument &&
                                                      cc.documentUrl && (
                                                        <button
                                                          type="button"
                                                          onClick={() =>
                                                            setPdfModal({
                                                              isOpen: true,
                                                              title: cc.title,
                                                              subtitle: [
                                                                cc.referenceNumber,
                                                                formatDate(
                                                                  cc.issueDate
                                                                ),
                                                              ]
                                                                .filter(Boolean)
                                                                .join(' · '),
                                                              pdfUrl:
                                                                cc.documentUrl!,
                                                              downloadUrl: `${cc.documentUrl!}&download=1`,
                                                              allowDownload:
                                                                cc.allowDownload,
                                                            })
                                                          }
                                                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg hover:bg-emerald-100 shrink-0"
                                                        >
                                                          <ExternalLink className="h-3.5 w-3.5" />
                                                          View PDF
                                                        </button>
                                                      )}
                                                  </div>
                                                ))}
                                              </div>
                                            </div>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              )}
            </section>
          </>
        )}
      </div>

      {/* Embedded PDF Viewer Modal */}
      {pdfModal.isOpen && pdfModal.pdfUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-6"
          onClick={() =>
            setPdfModal((p) => ({ ...p, isOpen: false, pdfUrl: '' }))
          }
        >
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[88vh] flex flex-col overflow-hidden border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 truncate">
                    {pdfModal.title}
                  </h3>
                  {pdfModal.subtitle && (
                    <p className="text-xs text-gray-500 truncate">
                      {pdfModal.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={pdfModal.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Open in Tab</span>
                </a>
                {pdfModal.allowDownload && (
                  <a
                    href={pdfModal.downloadUrl}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-primary rounded-lg hover:bg-primary-dark"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() =>
                    setPdfModal((p) => ({ ...p, isOpen: false, pdfUrl: '' }))
                  }
                  className="p-1.5 rounded-lg text-gray-500 hover:text-gray-800 hover:bg-gray-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-hidden">
              <PdfCanvasViewer pdfUrl={pdfModal.pdfUrl} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
