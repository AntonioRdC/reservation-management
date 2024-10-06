import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function AsideNav() {
  return (
    <aside className="fixed h-screen w-14 flex flex-col border-r border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <FaCalendarAlt />
                <span className="sr-only">Agendamentos</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Agendamentos</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
}
