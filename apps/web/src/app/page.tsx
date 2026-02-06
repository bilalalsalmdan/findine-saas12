import { Metadata } from 'next';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Pricing } from '@/components/pricing';
import { Testimonials } from '@/components/testimonials';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'FineDine - منصة إدارة المطاعم بالذكاء الاصطناعي',
  description: 'أبهر عملاءك وحقق إيرادات أكثر مع قوائم QR المدعومة بالذكاء الاصطناعي، مواقع المطاعم، والمشاركات الاجتماعية الآلية',
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
