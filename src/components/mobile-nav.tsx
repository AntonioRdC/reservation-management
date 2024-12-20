'use client';

import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import Link from 'next/link';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

export function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <nav className="grid gap-6 text-lg">
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
              pathname === '/home#faq'
                ? 'text-foreground'
                : 'text-foreground/80',
            )}
          >
            Perguntas frequentes
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
