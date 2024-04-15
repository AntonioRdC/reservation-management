import { Auth } from '@/components/auth/Auth';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Auth>{children}</Auth>;
}
