import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import { ParallaxImage } from "@/components/effects/parallax";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/animated-section";

export function CTASection() {
  return (
    <section className="bg-cream-50">
      {/* Split layout */}
      <div className="grid lg:grid-cols-2 min-h-[70vh]">
        {/* Left side - Text content */}
        <div className="flex flex-col justify-center px-5 sm:px-8 lg:px-16 py-12 sm:py-16">
          <div className="max-w-lg">
            <AnimatedSection direction="up" delay={0.1}>
              <p className="text-accent-500 text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Visit Us
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-coffee-900 leading-[0.95] mb-6">
                Purple
                <br />
                House,
                <br />
                <span className="text-accent-500">Bagbazar</span>
              </h2>
              <p className="text-coffee-600 text-lg leading-relaxed mb-10">
                Drop by for your daily dose of specialty coffee or book the space for your next event.
              </p>
            </AnimatedSection>

            {/* Contact info */}
            <StaggerContainer className="space-y-4 mb-10" staggerDelay={0.1} delayChildren={0.2}>
              <StaggerItem>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-coffee-900 flex items-center justify-center text-cream-50">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-coffee-500">Hours</div>
                    <div className="font-medium text-coffee-900">Mon–Fri {siteConfig.hours.weekdays}</div>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-coffee-900 flex items-center justify-center text-cream-50">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-coffee-500">Location</div>
                    <div className="font-medium text-coffee-900">{siteConfig.contact.address.full}</div>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-coffee-900 flex items-center justify-center text-cream-50">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-coffee-500">Phone</div>
                    <div className="font-medium text-coffee-900">{siteConfig.contact.phone}</div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <AnimatedSection direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Directions</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Right side - Image with parallax */}
        <ParallaxImage speed={0.2} className="min-h-[50vh] lg:min-h-full">
          <Image
            src="/images/purplehouse.png"
            alt="The Purple House — Arabica's home in Bagbazar, Kathmandu"
            fill
            className="object-cover"
            sizes="50vw"
            loading="eager"
          />
        </ParallaxImage>
      </div>
    </section>
  );
}
