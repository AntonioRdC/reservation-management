import { redirect } from 'next/navigation';

import Header from '@/components/app-header';
import { currentUser } from '@/lib/auth';

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  if (!user) {
    redirect('/auth/login');
  }

  return (
    <main className="h-screen border-border/40 dark:border-border min-[1800px]:border-x">
      <Header user={user} />
      {children}
    </main>
  );
}
