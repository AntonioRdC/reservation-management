'use client';

import { LogIn } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { MainNav } from '@/components/main-nav';
import { MobileNav } from '@/components/mobile-nav';

export function Header() {
  return (
    <header className="top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <div className="flex h-14 items-center p-4">
        <MainNav />
        <MobileNav />
        <div className="flex flex-auto items-center gap-2 justify-end">
          <nav className="flex items-center gap-1">
            <Link href="/auth/login">
              <Button variant="secondary">
                <LogIn className="mr-2 w-5 h-5" />
                <p className="text-lg">Fazer Login</p>
              </Button>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
