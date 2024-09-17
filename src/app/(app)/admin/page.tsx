import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { currentUser } from '@/lib/auth';

export const metadata: Metadata = {
  title: 'Admin',
  description: 'administration app',
};

export default async function AdminPage() {
  const user = await currentUser();

  if (user?.role !== 'ADMIN') {
    redirect('/dashboard');
  }

  return <></>;
}
