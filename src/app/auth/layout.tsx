export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-[1800px]:max-w-[1400px] flex items-center md:h-screen mx-auto">
      {children}
    </main>
  );
}
