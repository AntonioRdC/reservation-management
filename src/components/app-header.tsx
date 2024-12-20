'use client';

import Link from 'next/link';
import { ExtendedUser } from '@/auth/next-auth';

import { ModeToggle } from '@/components/mode-toggle';
import { MobileNav } from '@/components/app-mobile-nav';
import { UserNav } from '@/components/user-nav';
import { MainNav } from '@/components/app-main-nav';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

interface MainNavProps {
  user: ExtendedUser;
}

export default function Header({ user }: MainNavProps) {
  const pathname = usePathname();

  return (
    <header className="top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <div className="flex h-14 items-center p-4 gap-2">
        <MainNav />
        <MobileNav />
        <div className="flex flex-auto items-center gap-2 justify-end">
          <nav className="flex items-center gap-4">
            {user.role === 'ADMIN' && (
              <Link
                key="3"
                href="/admin"
                className={cn(
                  'text-sm transition-colors hover:text-foreground/80',
                  pathname === '/spaces'
                    ? 'text-foreground'
                    : 'text-foreground/80',
                )}
              >
                Área Administrativa
              </Link>
            )}
            <ModeToggle />
            <UserNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
