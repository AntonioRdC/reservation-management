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
          href="#features"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/home#features'
              ? 'text-foreground'
              : 'text-foreground/80',
          )}
        >
          Sobre as reservas
        </Link>
        <Link
          href="#news"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/home#news'
              ? 'text-foreground'
              : 'text-foreground/80',
          )}
        >
          Notícias
        </Link>
        <Link
          href="#faq"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/home#faq' ? 'text-foreground' : 'text-foreground/80',
          )}
        >
          Perguntas frequentes
        </Link>
      </nav>
    </div>
  );
}
