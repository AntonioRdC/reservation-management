import { FAQ } from '@/components/home/faq';
import { Features } from '@/components/home/features';
import { Footer } from '@/components/home/footer';
import { Hero } from '@/components/home/hero';
import { Header } from '@/components/home/header';

export default function RootPage() {
  return (
    <main className="border-border/40 dark:border-border min-[1800px]:border-x">
      <Header />
      <Hero />
      <Features />
      <FAQ />
      <Footer />
    </main>
  );
}
