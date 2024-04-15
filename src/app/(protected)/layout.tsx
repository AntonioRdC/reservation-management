import { currentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';

import { MainNav } from '@/components/dashboard/main-nav';
import { UserNav } from '@/components/dashboard/user-nav';
import { ThemeToggle } from '@/components/theme-toggle';

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  if (!user) {
    redirect('/auth/login');
  }

  return (
    <div className="flex flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>
    </div>
  );
}
