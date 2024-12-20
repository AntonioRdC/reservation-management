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
      </SheetContent>
    </Sheet>
  );
}
