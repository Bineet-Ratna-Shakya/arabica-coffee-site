import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedSection } from "@/components/sections/featured-section";
import { AcademySection } from "@/components/sections/academy-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { BrandStrip } from "@/components/sections/brand-strip";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandStrip />
      <FeaturedSection />
      <AcademySection />
      <TestimonialsSection />
      <CTASection />
      <NewsletterSection />
    </>
  );
}
