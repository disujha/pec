'use client';

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

  return (
    <>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
