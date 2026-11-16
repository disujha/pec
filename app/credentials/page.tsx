import type { Metadata } from 'next';
import { CredentialsPortfolio } from '../../components/CredentialsPortfolio';

export const metadata: Metadata = {
  title: 'Project Credentials | Petrochem Engineering Construction',
  description:
    'Explore Petrochem Engineering Construction’s verified industrial EPC project credentials, client portfolio, work orders, and completion certificates.',
};

export default function CredentialsPage() {
  return <CredentialsPortfolio />;
}
