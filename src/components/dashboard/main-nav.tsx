'use client';

import Link from 'next/link';

export function MainNav() {
  return (
    <nav className="flex items-center space-x-4 mx-6 lg:space-x-6">
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Espaços Reservados
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Eventos
      </Link>
    </nav>
  );
}
