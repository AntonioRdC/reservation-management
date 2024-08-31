import { FAQ } from '@/app/(components)/faq';
import { Features } from '@/app/(components)/features';
import { Footer } from '@/app/(components)/footer';
import { Hero } from '@/app/(components)/hero';
import { MainNav } from '@/app/(components)/main-nav';
import { News } from '@/app/(components)/news';

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
