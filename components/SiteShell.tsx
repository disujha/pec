'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import UnderConstruction from './UnderConstruction';
import {
  UNDER_CONSTRUCTION_MODE,
  UNDER_CONSTRUCTION_EXEMPT_PATHS,
} from '../lib/siteConfig';

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || '/';

  const isUnderConstructionRoute = pathname === '/under-construction';
  const isExemptRoute = UNDER_CONSTRUCTION_EXEMPT_PATHS.some(
    (exemptPath) =>
      pathname === exemptPath || pathname.startsWith(`${exemptPath}/`)
  );

  if (isUnderConstructionRoute || (UNDER_CONSTRUCTION_MODE && !isExemptRoute)) {
    return <UnderConstruction />;
  }

  // While the main site is under construction, keep exempt pages (e.g. /credentials)
  // standalone without full site navigation links.
  if (UNDER_CONSTRUCTION_MODE) {
    return (
      <>
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center gap-3">
                <img
                  src="/pec-new.png"
                  alt="PEC Logo"
                  className="w-16 h-10 object-contain"
                />
                <div className="hidden sm:block">
                  <p className="text-sm font-bold text-pec-navy leading-tight">
                    Petrochem Engineering Construction
                  </p>
                  <p className="text-[11px] text-gray-500">
                    Industrial EPC &amp; Tankage Contractors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-gray-50 border-t border-gray-200 py-6">
          <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Petrochem Engineering Construction. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
