import { Metadata } from 'next';

import { Dashboard } from '@/app/(app)/dashboard/(components)/dashboard';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard of user.',
};

export default async function DashboardPage() {
  return <Dashboard />;
}
