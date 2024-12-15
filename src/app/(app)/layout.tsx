import { redirect } from 'next/navigation';

import MainNav from '@/app/(app)/(components)/main-nav';
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
    <main className="flex items-center md:h-screen mx-auto">
      <MainNav user={user} />
      {children}
    </main>
  );
}
