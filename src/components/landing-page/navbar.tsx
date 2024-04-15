'use client';

import { useState } from 'react';
import { BiLogIn } from 'react-icons/bi';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

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

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link href="/" className="ml-2 font-bold text-xl flex">
              <AiOutlineHome />
            </Link>
          </NavigationMenuItem>

          {/* Nav & Login  on Smartphone */}
          <span className="flex md:hidden">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <BiMenu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </BiMenu>
              </SheetTrigger>
              <SheetContent side={'bottom'}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Shadcn/React
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps, index) => (
                    <Link key={index} href={href}>
                      <Button
                        variant={'ghost'}
                        onClick={() => setIsOpen(false)}
                      >
                        {label}
                      </Button>
                    </Link>
                  ))}
                  <Link href="/auth/login">
                    <Button variant={'outline'} className="w-[110px] border">
                      <BiLogIn className="mr-2 w-5 h-5" />
                      Fazer Login
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* Nav  on Desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map(({ href, label }: RouteProps, index) => (
              <Link key={index} href={href}>
                <Button variant={'ghost'} className="text-lg">
                  {label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Login  on Desktop */}
          <div className="hidden md:flex gap-2">
            <Link href="/auth/login">
              <Button variant={'outline'} className="border">
                <BiLogIn className="mr-2 w-5 h-5" />
                Fazer Login
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
