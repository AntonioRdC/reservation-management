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
    <div className="flex min-h-screen w-full flex-col">
      <MainNav user={user} />
      {children}
    </div>
  );
}
