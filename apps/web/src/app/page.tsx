import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/animations"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LogoCloud } from "@/components/logo-cloud"
import { FeatureGrid } from "@/components/feature-grid"
import { SolutionsCarousel } from "@/components/solutions-carousel"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <FadeIn>
        <Hero />
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <LogoCloud />
      </FadeIn>
      
      <FeatureGrid />
      
      <FadeIn delay={0.1}>
        <SolutionsCarousel />
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <PricingSection />
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <TestimonialsSection />
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <FAQSection />
      </FadeIn>
      
      <Footer />
    </main>
  )
}
