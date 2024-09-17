import Link from 'next/link';
import { BiMenu } from 'react-icons/bi';

import { ExtendedUser } from '@/auth/next-auth';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from '@/components/mode-toggle';
import { UserNav } from '@/app/(app)/(components)/user-nav';

interface RouteProps {
  href: string;
  label: string;
}

interface MainNavProps {
  user: ExtendedUser;
}

const routeList: RouteProps[] = [
  {
    href: '/dashboard',
    label: 'Minha Conta',
  },
  {
    href: '/spaces',
    label: 'Reservar Espaços',
  },
  {
    href: '/events',
    label: 'Eventos',
  },
];

export default function MainNav({ user }: MainNavProps) {
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
          {user.role === 'ADMIN' && (
            <Link
              key="3"
              href="/admin"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Área Administrativa
            </Link>
          )}
        </div>
        <ModeToggle />
        <UserNav />
      </div>
    </header>
  );
}
