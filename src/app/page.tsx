import { FAQ } from '@/components/faq';
import { Features } from '@/components/features';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Header } from '@/components/header';

export default function RootPage() {
  return (
    <div className="border-border/40 dark:border-border min-[1800px]:border-x">
      <Header />
      <Hero />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
}
