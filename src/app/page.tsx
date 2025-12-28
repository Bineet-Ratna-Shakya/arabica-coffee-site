import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedSection } from "@/components/sections/featured-section";
import { MenuPreviewSection } from "@/components/sections/menu-preview-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <MenuPreviewSection />
      <TestimonialsSection />
      <CTASection />
      <NewsletterSection />
    </>
  );
}
