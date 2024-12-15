export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex items-center md:h-screen mx-auto">{children}</main>
  );
}
