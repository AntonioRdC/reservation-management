'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/dashboard"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/dashboard'
              ? 'text-foreground'
              : 'text-foreground/80',
          )}
        >
          Minha Conta
        </Link>
        <Link
          href="/spaces"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/spaces' ? 'text-foreground' : 'text-foreground/80',
          )}
        >
          Reservar Espaços
        </Link>
      </nav>
    </div>
  );
}
