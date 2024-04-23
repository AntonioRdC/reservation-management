import { FAQ } from '@/components/landing-page/faq';
import { Features } from '@/components/landing-page/features';
import { Footer } from '@/components/landing-page/footer';
import { Hero } from '@/components/landing-page/hero';
import { MainNav } from '@/components/landing-page/main-nav';
import { News } from '@/components/landing-page/news';

export default function RootPage() {
  return (
    <>
      <MainNav />
      <Hero />
      <News />
      <Features />
      <FAQ />
      <Footer />
    </>
  );
}
