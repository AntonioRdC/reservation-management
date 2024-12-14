export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="flex items-center h-screen mx-auto">{children}</main>;
}
