import { FAQ } from '@/components/landing-page/faq';
import { Features } from '@/components/landing-page/features';
import { Footer } from '@/components/landing-page/footer';
import { Hero } from '@/components/landing-page/hero';
import { Navbar } from '@/components/landing-page/navbar';
import { News } from '@/components/landing-page/news';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <News />
      <Features />
      <FAQ />
      <Footer />
    </>
  );
}
