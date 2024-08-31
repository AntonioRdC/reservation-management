import { Auth } from '@/app/auth/(components)/Auth';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Auth>{children}</Auth>;
}
