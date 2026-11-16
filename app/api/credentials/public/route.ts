import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const ADMIN_API_BASE = (
  process.env.CREDENTIALS_API_BASE ||
  process.env.NEXT_PUBLIC_CREDENTIALS_API_BASE ||
  (process.env.NODE_ENV === 'production'
    ? 'https://admin.pecengg.com'
    : 'http://localhost:3000')
).replace(/\/$/, '');

const FIRESTORE_BASE =
  'https://firestore.googleapis.com/v1/projects/pecenggindia/databases/(default)/documents';

function decodeFirestoreValue(val: any): any {
  if (!val || typeof val !== 'object') return null;
  if ('stringValue' in val) return val.stringValue;
  if ('integerValue' in val) return Number(val.integerValue);
  if ('doubleValue' in val) return Number(val.doubleValue);
  if ('booleanValue' in val) return Boolean(val.booleanValue);
  if ('timestampValue' in val) return val.timestampValue;
  if ('nullValue' in val) return null;
  if ('arrayValue' in val) {
    return (val.arrayValue.values || []).map(decodeFirestoreValue);
  }
  if ('mapValue' in val) {
    const out: Record<string, any> = {};
    for (const [k, v] of Object.entries(val.mapValue.fields || {})) {
      out[k] = decodeFirestoreValue(v);
    }
    return out;
  }
  return null;
}

async function fetchFirestoreCollection(name: string): Promise<any[]> {
  const res = await fetch(`${FIRESTORE_BASE}/${name}?pageSize=300`, {
    cache: 'no-store',
  });
  if (!res.ok) return [];
  const json = await res.json();
  return (json.documents || []).map((doc: any) => {
    const id = String(doc.name || '').split('/').pop() || '';
    const out: Record<string, any> = { id };
    for (const [k, v] of Object.entries(doc.fields || {})) {
      out[k] = decodeFirestoreValue(v);
    }
    return out;
  });
}

async function fetchFromFirestoreRest() {
  const [
    rawCompanies,
    rawLocations,
    rawCategories,
    rawProjects,
    rawWorkOrders,
    rawCerts,
    rawSettings,
  ] = await Promise.all([
    fetchFirestoreCollection('clientCompanies'),
    fetchFirestoreCollection('projectLocations'),
    fetchFirestoreCollection('workCategories'),
    fetchFirestoreCollection('projects'),
    fetchFirestoreCollection('workOrders'),
    fetchFirestoreCollection('completionCertificates'),
    fetchFirestoreCollection('credentialsSettings'),
  ]);

  const globalSetting =
    rawSettings.find((s) => s.id === 'global') || ({} as any);
  const showOverallValue = globalSetting.showOverallValue !== false;
  const introText =
    globalSetting.introText ||
    'Petrochem Engineering Construction delivers turnkey industrial piping, storage tank fabrication & erection, heavy structural works, and multidisciplinary EPC execution for India’s leading energy, refining, and petrochemical enterprises.';

  const companies = rawCompanies
    .filter((c) => c.isActive && c.isPublic)
    .sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0));
  const companyMap = new Map(companies.map((c) => [c.id, c]));

  const locations = rawLocations
    .filter((l) => l.isActive && companyMap.has(l.companyId))
    .sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0));
  const locationMap = new Map(locations.map((l) => [l.id, l]));

  const categories = rawCategories
    .filter((c) => c.isActive)
    .sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0));

  const projects = rawProjects
    .filter(
      (p) =>
        p.isPublished &&
        companyMap.has(p.companyId) &&
        locationMap.has(p.locationId)
    )
    .map((p) => ({
      id: p.id,
      companyId: p.companyId,
      locationId: p.locationId,
      title: p.title,
      description: p.description || '',
      scopeOfWork: p.scopeOfWork || '',
      categoryIds: Array.isArray(p.categoryIds) ? p.categoryIds : [],
      startDate: p.startDate || null,
      completionDate: p.completionDate || null,
      status: p.status || 'completed',
      showFinancialValue: p.showFinancialValue !== false,
    }));
  const projectMap = new Map(projects.map((p) => [p.id, p]));

  const companiesWithProjects = new Set(projects.map((p) => p.companyId));
  const locationsWithProjects = new Set(projects.map((p) => p.locationId));

  const visibleCompanies = companies
    .filter((c) => companiesWithProjects.has(c.id))
    .map((c) => {
      const localBrand = c.logoFallbackUrl
        ? String(c.logoFallbackUrl).replace('/Projects/brands/', '/brands/')
        : null;
      return {
        id: c.id,
        name: c.name,
        description: c.description || '',
        hasLogo: Boolean(localBrand || c.logoStoragePath),
        logoUrl:
          localBrand ||
          (c.logoStoragePath
            ? `/api/credentials/document?type=logo&id=${encodeURIComponent(c.id)}`
            : null),
        showFinancialValue: c.showFinancialValue !== false,
        displayOrder: c.displayOrder ?? 0,
      };
    });

  const visibleLocations = locations
    .filter((l) => locationsWithProjects.has(l.id))
    .map((l) => ({
      id: l.id,
      companyId: l.companyId,
      locationName: l.locationName,
      city: l.city || '',
      state: l.state || '',
      description: l.description || '',
      showFinancialValue: l.showFinancialValue !== false,
      displayOrder: l.displayOrder ?? 0,
    }));

  const publishedWOs = rawWorkOrders.filter(
    (w) =>
      w.isPublished &&
      projectMap.has(w.projectId) &&
      w.status !== 'superseded' &&
      w.status !== 'cancelled'
  );
  const supersededIds = new Set(
    publishedWOs.map((w) => w.supersedesWorkOrderId).filter(Boolean)
  );
  const eligibleWOs = publishedWOs.filter((w) => !supersededIds.has(w.id));

  const canShowFinancial = (projectId: string) => {
    if (!showOverallValue) return false;
    const p = projectMap.get(projectId);
    if (!p || !p.showFinancialValue) return false;
    const l = locationMap.get(p.locationId);
    if (!l || l.showFinancialValue === false) return false;
    const c = companyMap.get(p.companyId);
    if (!c || c.showFinancialValue === false) return false;
    return true;
  };

  const workOrders = eligibleWOs.map((w) => ({
    id: w.id,
    projectId: w.projectId,
    title: w.title,
    referenceNumber: w.showReferenceNumber === false ? '' : w.referenceNumber || '',
    issueDate: w.showDate === false ? null : w.issueDate || null,
    value: canShowFinancial(w.projectId) ? Number(w.value) || 0 : null,
    currency: w.currency || 'INR',
    remarks: w.remarks || '',
    status: w.status || 'active',
    isAmendment: Boolean(w.isAmendment),
    allowDownload: w.allowDownload !== false,
    hasDocument: Boolean(w.documentStoragePath),
    documentUrl: w.documentStoragePath
      ? `/api/credentials/document?type=workOrder&id=${encodeURIComponent(w.id)}`
      : null,
  }));

  const completionCertificates = rawCerts
    .filter((cc) => cc.isPublished && projectMap.has(cc.projectId))
    .map((cc) => ({
      id: cc.id,
      projectId: cc.projectId,
      workOrderId: cc.workOrderId || '',
      title: cc.title,
      referenceNumber: cc.showReferenceNumber === false ? '' : cc.referenceNumber || '',
      issueDate: cc.showDate === false ? null : cc.issueDate || null,
      remarks: cc.remarks || '',
      allowDownload: cc.allowDownload !== false,
      hasDocument: Boolean(cc.documentStoragePath),
      documentUrl: cc.documentStoragePath
        ? `/api/credentials/document?type=completionCertificate&id=${encodeURIComponent(cc.id)}`
        : null,
    }));

  let overallTotalValue = 0;
  const projectTotals: Record<string, number | null> = {};
  const locationTotals: Record<string, number | null> = {};
  const companyTotals: Record<string, number | null> = {};

  for (const p of projects) {
    if (!canShowFinancial(p.id)) {
      projectTotals[p.id] = null;
      continue;
    }
    const pSum = eligibleWOs
      .filter((w) => w.projectId === p.id)
      .reduce((s, w) => s + (Number(w.value) || 0), 0);
    projectTotals[p.id] = pSum;
    overallTotalValue += pSum;
  }

  for (const l of visibleLocations) {
    const c = companyMap.get(l.companyId);
    if (!showOverallValue || !c || c.showFinancialValue === false || !l.showFinancialValue) {
      locationTotals[l.id] = null;
      continue;
    }
    locationTotals[l.id] = projects
      .filter((p) => p.locationId === l.id)
      .reduce((s, p) => s + (projectTotals[p.id] || 0), 0);
  }

  for (const c of visibleCompanies) {
    if (!showOverallValue || !c.showFinancialValue) {
      companyTotals[c.id] = null;
      continue;
    }
    companyTotals[c.id] = visibleLocations
      .filter((l) => l.companyId === c.id)
      .reduce((s, l) => s + (locationTotals[l.id] || 0), 0);
  }

  return {
    settings: { showOverallValue, introText },
    summary: {
      totalCompanies: visibleCompanies.length,
      totalLocations: visibleLocations.length,
      totalProjects: projects.length,
      totalWorkOrders: workOrders.length,
      totalCompletionCertificates: completionCertificates.length,
      overallTotalValue: showOverallValue ? overallTotalValue : null,
    },
    companies: visibleCompanies,
    locations: visibleLocations,
    categories,
    projects,
    workOrders,
    completionCertificates,
    totals: {
      projects: projectTotals,
      locations: locationTotals,
      companies: companyTotals,
    },
  };
}

export async function GET() {
  try {
    try {
      const res = await fetch(`${ADMIN_API_BASE}/api/credentials/public`, {
        cache: 'no-store',
      });
      if (res.ok) {
        const data = await res.json();
        return NextResponse.json(data);
      }
    } catch {
      // Fall back to Firestore REST API if admin backend isn't reachable
    }

    const fallbackData = await fetchFromFirestoreRest();
    return NextResponse.json(fallbackData);
  } catch (error) {
    console.error('Error in /api/credentials/public:', error);
    return NextResponse.json(
      { error: 'Credentials service unavailable' },
      { status: 502 }
    );
  }
}
