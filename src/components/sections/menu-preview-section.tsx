"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Button } from "@/components/ui/button";
import { ParallaxImage } from "@/components/effects/parallax";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/animated-section";
import type { MenuItem } from "@/types";

interface MenuPreviewSectionProps {
  items: MenuItem[];
}

export function MenuPreviewSection({ items }: MenuPreviewSectionProps) {
  const featuredItems = items
    .filter((item) => item.isPopular || item.isNew)
    .slice(0, 3);

  return (
    <section className="bg-cream-50 border-y-4 border-coffee-900">
      {/* Big header image */}
      <ParallaxImage speed={0.2} className="h-[40vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1800&q=90&auto=format&fit=crop"
          alt="Signature coffee drinks"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-coffee-950/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatedSection>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream-50">
              The Menu
            </h2>
          </AnimatedSection>
        </div>
      </ParallaxImage>

      {/* Featured items grid with big images */}
      <SectionContainer padding="large">
        <StaggerContainer staggerDelay={0.12} delayChildren={0.2} className="grid md:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <StaggerItem key={item.id}>
              <div className="border-2 border-coffee-900 bg-white shadow-[4px_4px_0_0_theme(colors.coffee.900)]">
                <div className="relative h-64">
                  <Image
                    src={item.image || `https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop`}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4 border-t-2 border-coffee-900">
                  <h3 className="font-heading text-xl text-coffee-900 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-coffee-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.4}>
          <div className="mt-10 text-center">
            <Button size="lg" asChild>
              <Link href="/menu">
                Full Menu
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </SectionContainer>
    </section>
  );
}
