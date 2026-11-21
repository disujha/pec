'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Wrench,
  ArrowUpRight,
  HardHat,
  CheckCircle2,
} from 'lucide-react';

const workDisciplines = [
  {
    code: '01',
    tag: 'PIPING',
    title: 'Industrial Piping Systems',
    image: '/projects/pipingmitsubishi.jpg',
    alt: 'PEC Industrial Process Piping Fabrication and Welding',
    description:
      'Process and utility piping fabrication, erection, automated welding, NDT inspection, and hydrotesting for refineries and petrochemical plants.',
    specs: ['Process & Utility Piping', 'IBR & Alloy Steel', 'Hydrotesting & Hook-Up'],
  },
  {
    code: '02',
    tag: 'STORAGE TANKS',
    title: 'Storage Tank Construction',
    image: '/projects/hsfotank.jpg',
    alt: 'PEC Large-Scale Industrial Storage Tank Construction',
    description:
      'Engineering and construction of large-capacity HSFO, crude, chemical, and DM water storage tanks built to stringent API and safety standards.',
    specs: ['Fixed & Floating Roof', 'HSFO & Chemical Tanks', 'Calibration & Safety'],
  },
  {
    code: '03',
    tag: 'STRUCTURAL & FABRICATION',
    title: 'Structural Steel & Fabrication',
    image: '/projects/fabrication.jpg',
    alt: 'PEC Heavy Structural Steel Erection and Fabrication Yard',
    description:
      'Heavy structural steelwork, industrial pipe racks, plant trusses, and high-precision shop and site fabrication for mega energy complexes.',
    specs: ['Heavy Steel Structures', 'Pipe Racks & Trusses', 'Precision Fabrication'],
  },
  {
    code: '04',
    tag: 'TANK ERECTION & EPC',
    title: 'Mechanical Erection & EPC',
    image: '/projects/dmwateriocl.jpg',
    alt: 'PEC Heavy Mechanical Tank Erection with Crane Operations',
    description:
      'Turnkey mechanical erection, heavy crane lifting, roof truss assembly, and end-to-end EPC project execution across India and GCC markets.',
    specs: ['Turnkey EPC Delivery', 'Heavy Lifting & Rigging', 'Refinery & Plant Works'],
  },
];

export default function UnderConstruction() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-pec-rust selection:text-white">
      {/* Top Industrial Header Bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo & Company Name */}
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="flex-shrink-0 bg-white border border-gray-200 rounded-sm px-2.5 py-1.5 shadow-xs">
                <img
                  src="/pec-new.png"
                  alt="PEC - Petrochem Engineering Construction Logo"
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-base md:text-lg font-extrabold text-pec-navy tracking-tight leading-tight truncate">
                  PETROCHEM ENGINEERING CONSTRUCTION
                </div>
                <div className="text-[10px] sm:text-xs font-semibold text-pec-rust tracking-widest uppercase truncate">
                  Petrochemical &bull; Oil &amp; Gas &bull; EPC Services
                </div>
              </div>
            </div>

            {/* Live Engineering Status Pill */}
            <div className="hidden md:flex items-center gap-2.5 bg-pec-dark text-white px-4 py-2 rounded-sm border border-pec-rust/40 flex-shrink-0">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pec-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pec-copper"></span>
              </span>
              <span className="font-mono text-xs font-semibold tracking-wider uppercase text-gray-100">
                Site Under Construction
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Emphatic Engineering Hero Section */}
      <section className="relative overflow-hidden bg-pec-dark text-white py-16 sm:py-24 lg:py-28">
        {/* Industrial Grid & Blueprint Layers */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 grid-pattern opacity-40 animate-grid-move" />
          <div className="absolute inset-0 blueprint opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-br from-pec-dark via-pec-navy/95 to-pec-dark opacity-90" />

          {/* Animated Engineering Pipeline SVG */}
          <svg
            className="absolute inset-0 w-full h-full opacity-70"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="uc-pipeline-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#d97706" stopOpacity="0" />
                <stop offset="50%" stopColor="#d97706" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
              </linearGradient>
            </defs>

            <motion.line
              x1="0"
              y1="26%"
              x2="100%"
              y2="26%"
              stroke="url(#uc-pipeline-gradient)"
              strokeWidth="1.5"
              animate={{ x1: [-80, 80] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
            <motion.line
              x1="78%"
              y1="0"
              x2="78%"
              y2="100%"
              stroke="url(#uc-pipeline-gradient)"
              strokeWidth="1.5"
              animate={{ y1: [-80, 80] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            />

            {[18, 42, 65, 86].map((x, i) => (
              <circle
                key={`h-${i}`}
                cx={`${x}%`}
                cy="26%"
                r="3.5"
                fill="#d97706"
                className="animate-node-blink"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            ))}
            {[26, 52, 78].map((y, i) => (
              <circle
                key={`v-${i}`}
                cx="78%"
                cy={`${y}%`}
                r="3.5"
                fill="#f59e0b"
                className="animate-node-blink"
                style={{ animationDelay: `${i * 0.65}s` }}
              />
            ))}
          </svg>
        </div>

        {/* Engineering Corner Drafting Brackets */}
        <div className="hidden lg:block absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-pec-copper/50 pointer-events-none" />
        <div className="hidden lg:block absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-pec-copper/50 pointer-events-none" />
        <div className="hidden lg:block absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-pec-copper/50 pointer-events-none" />
        <div className="hidden lg:block absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-pec-copper/50 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Technical Status Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 bg-pec-rust/20 border border-pec-rust/50 rounded-sm px-5 py-2 mb-8 backdrop-blur-sm"
          >
            <HardHat className="w-4 h-4 text-pec-accent" />
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase text-pec-accent">
              Engineering Upgrade In Progress &bull; PEC
            </span>
          </motion.div>

          {/* Emphatic Industrial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6"
          >
            <span className="block text-sm sm:text-base font-mono tracking-[0.28em] uppercase text-gray-300 mb-3">
              Petrochem Engineering Construction
            </span>
            <span className="relative inline-block">
              <span className="block text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white">
                SITE UNDER
              </span>
              <span className="block text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none mt-1 sm:mt-2 bg-gradient-to-r from-pec-copper via-pec-accent to-pec-rust bg-clip-text text-transparent">
                CONSTRUCTION
              </span>
            </span>
          </motion.h1>

          {/* Engineering Rule Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.7 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center justify-center gap-4 my-7"
          >
            <div className="w-16 sm:w-24 h-0.5 bg-pec-rust" />
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-pec-copper uppercase">
              25+ Years EPC Excellence
            </span>
            <div className="w-16 sm:w-24 h-0.5 bg-pec-rust" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-10"
          >
            We are engineering an upgraded digital presence. Meanwhile, our teams
            continue executing{' '}
            <span className="text-pec-accent font-semibold">
              Piping, Storage Tanks, Structural Steel &amp; Fabrication
            </span>{' '}
            projects with precision across India &amp; GCC.
          </motion.p>

          {/* Direct Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <a
              href="tel:+919434010783"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-pec-rust hover:bg-pec-copper text-white px-8 py-4 rounded-sm font-bold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-lg hover-lift"
            >
              <Phone className="w-5 h-5" />
              <span>CALL +91 94340 10783</span>
            </a>

            <a
              href="mailto:bpanja@pecengg.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border-2 border-pec-copper text-pec-accent hover:bg-pec-copper hover:text-white px-8 py-4 rounded-sm font-bold text-sm sm:text-base tracking-wide transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>bpanja@pecengg.com</span>
            </a>
          </motion.div>

          {/* Key Industrial Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {[
              { value: '25+', label: 'YEARS', sublabel: 'ENGINEERING EXPERIENCE' },
              { value: '200+', label: 'PROJECTS', sublabel: 'DELIVERED SAFELY' },
              { value: 'EPC', label: 'INDIA & GCC', sublabel: 'OIL, GAS & PETROCHEMICAL' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-pec-navy/70 backdrop-blur-sm border border-pec-rust/35 rounded-sm px-6 py-5"
              >
                <div className="text-3xl font-black text-pec-copper font-serif mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-white tracking-widest uppercase">
                  {stat.label}
                </div>
                <div className="text-[11px] text-gray-400 tracking-wide mt-0.5">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scope of Work Showcase — 1 Image per Core Discipline */}
      <section className="relative bg-gray-50 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5 grid-pattern pointer-events-none" />

        {/* Crosshair Engineering Divider */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 mb-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-4 h-4 cross-element opacity-30" />
            ))}
          </div>

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-pec-rust font-mono text-xs font-bold tracking-[0.2em] uppercase mb-3">
              <Wrench className="w-4 h-4" />
              <span>Core Engineering Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-pec-navy tracking-tight mb-4">
              Built for Heavy Industrial Execution
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              A glimpse of our active project capabilities across piping, storage
              tanks, structural steelwork, and turnkey mechanical erection.
            </p>
          </div>

          {/* 2x2 Engineering Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workDisciplines.map((item, idx) => (
              <motion.article
                key={item.code}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group bg-white border border-gray-200 hover:border-pec-rust/60 rounded-sm overflow-hidden shadow-xs hover-lift flex flex-col"
              >
                {/* Wide Site Photograph */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-pec-dark">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pec-dark/80 via-pec-dark/15 to-transparent" />

                  {/* Blueprint Index Tag */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-pec-dark/90 backdrop-blur-sm border border-pec-copper/50 px-3 py-1.5 rounded-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-pec-copper" />
                    <span className="font-mono text-xs font-bold tracking-widest text-white">
                      {item.code} // {item.tag}
                    </span>
                  </div>
                </div>

                {/* Technical Scope Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between border-t-2 border-pec-rust">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-pec-navy group-hover:text-pec-rust transition-colors mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                      {item.description}
                    </p>
                  </div>

                  {/* Scope Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    {item.specs.map((spec) => (
                      <span
                        key={spec}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-pec-navy bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-sm"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-pec-rust flex-shrink-0" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Contact & Head Office Block */}
      <footer className="relative bg-pec-dark text-white border-t-4 border-pec-rust overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 mb-10 border-b border-pec-grid">
            <div>
              <span className="font-mono text-xs font-bold tracking-[0.22em] text-pec-copper uppercase block mb-2">
                Direct Project &amp; Business Inquiries
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Connect with Petrochem Engineering Construction
              </h2>
            </div>
            <div className="inline-flex items-center gap-3 bg-white px-3.5 py-2 rounded-sm self-start md:self-auto">
              <img
                src="/pec-new.png"
                alt="PEC Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Card */}
            <div className="bg-pec-navy/70 border border-pec-grid hover:border-pec-copper/60 rounded-sm p-6 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-pec-rust/20 border border-pec-rust/50 flex items-center justify-center text-pec-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[11px] tracking-widest uppercase text-pec-copper font-semibold">
                    Telephone
                  </div>
                  <div className="text-sm font-bold text-white">Direct Contact</div>
                </div>
              </div>
              <a
                href="tel:+919434010783"
                className="inline-flex items-center gap-2 text-lg sm:text-xl font-bold text-white hover:text-pec-accent transition-colors"
              >
                <span>+91 94340 10783</span>
                <ArrowUpRight className="w-4 h-4 text-pec-copper" />
              </a>
              <p className="text-xs text-gray-400 mt-2">
                Available for tenders, EPC inquiries &amp; site coordination.
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-pec-navy/70 border border-pec-grid hover:border-pec-copper/60 rounded-sm p-6 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-pec-rust/20 border border-pec-rust/50 flex items-center justify-center text-pec-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[11px] tracking-widest uppercase text-pec-copper font-semibold">
                    Email
                  </div>
                  <div className="text-sm font-bold text-white">Official Desks</div>
                </div>
              </div>
              <div className="space-y-2.5">
                <a
                  href="mailto:bpanja@pecengg.com"
                  className="flex items-center gap-2 text-sm sm:text-base font-semibold text-white hover:text-pec-accent transition-colors break-all"
                >
                  <span>bpanja@pecengg.com</span>
                  <ArrowUpRight className="w-4 h-4 text-pec-copper flex-shrink-0" />
                </a>
                <a
                  href="mailto:biswajitpanja@rediffmail.com"
                  className="flex items-center gap-2 text-sm sm:text-base font-semibold text-gray-200 hover:text-pec-accent transition-colors break-all"
                >
                  <span>biswajitpanja@rediffmail.com</span>
                  <ArrowUpRight className="w-4 h-4 text-pec-copper flex-shrink-0" />
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-pec-navy/70 border border-pec-grid hover:border-pec-copper/60 rounded-sm p-6 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-pec-rust/20 border border-pec-rust/50 flex items-center justify-center text-pec-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[11px] tracking-widest uppercase text-pec-copper font-semibold">
                    Headquarters
                  </div>
                  <div className="text-sm font-bold text-white">PEC Head Office</div>
                </div>
              </div>
              <address className="not-italic text-sm text-gray-200 leading-relaxed space-y-0.5">
                <div className="font-semibold text-white">
                  Petrochem Engineering Construction
                </div>
                <div>Barsundra, NH41 Highway</div>
                <div>Purba Medinipur, West Bengal 721654</div>
                <div className="text-gray-400">India</div>
              </address>
            </div>
          </div>

          {/* Bottom Legal / Drafting Bar */}
          <div className="mt-12 pt-6 border-t border-pec-grid flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p>
              &copy; {currentYear} Petrochem Engineering Construction (PEC). All
              rights reserved.
            </p>
            <p className="font-mono tracking-wider uppercase text-gray-500">
              STATUS: UNDER CONSTRUCTION &bull; FULL SITE LAUNCHING SOON
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
