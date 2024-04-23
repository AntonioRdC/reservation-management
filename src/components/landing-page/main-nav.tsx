'use client';

import { BiLogIn } from 'react-icons/bi';
import { BiMenu } from 'react-icons/bi';
import Link from 'next/link';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: '#Lorem',
    label: 'Lorem1',
  },
  {
    href: '#Lorem',
    label: 'Lorem2',
  },
  {
    href: '#Lorem',
    label: 'Lorem3',
  },
  {
    href: '#Lorem',
    label: 'Lorem4',
  },
];

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 flex h-14 items-center gap-4 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6">
      <nav className="hidden flex-col w-full gap-6 text-lg md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        {routeList.map(({ href, label }: RouteProps, index) => (
          <Link
            key={index}
            href={href}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {label}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
            <BiMenu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg">
            {routeList.map(({ href, label }: RouteProps, index) => (
              <Link
                key={index}
                href={href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial">
          <ModeToggle />
        </div>
        <Link href="/auth/login">
          <Button variant="default">
            <BiLogIn className="mr-2 w-5 h-5" />
            <p className="text-lg">Fazer Login</p>
          </Button>
        </Link>
      </div>
    </header>
  );
}
