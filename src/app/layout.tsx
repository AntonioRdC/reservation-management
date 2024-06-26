import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme-provider';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth/auth';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import './globals.css';

export const metadata: Metadata = {
  title: 'Reservation Management',
  description: 'Generated by Antônio',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="pt-br">
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
