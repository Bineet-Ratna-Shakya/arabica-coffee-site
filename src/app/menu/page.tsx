import type { Metadata } from "next";
import Image from "next/image";
import { getMenuItems } from "@/lib/menu-service";
import { siteConfig, MENU_CATEGORIES, categoryMeta } from "@/lib/constants";
import type { MenuItem, MenuCategory } from "@/types";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/animated-section";
import { ParallaxImage } from "@/components/effects/parallax";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore our curated selection of specialty coffees, artisan drinks, freshly baked pastries, and signature creations at Arabica Beans & Academy.",
  keywords: [
    "coffee menu",
    "specialty coffee",
    "espresso drinks",
    "matcha latte",
    "smoothies",
    "fresh juice",
    "bakery",
    "healthy breakfast",
    "ice cream",
    "Kathmandu cafe menu",
  ],
  openGraph: {
    title: `Menu | ${siteConfig.name}`,
    description:
      "Explore our curated selection of specialty coffees, artisan drinks, and freshly baked pastries.",
    url: `${siteConfig.url}/menu`,
  },
};

export default async function MenuPage() {
  const menuItems = await getMenuItems();

  const grouped = MENU_CATEGORIES.reduce(
    (acc, cat) => {
      acc[cat] = menuItems.filter((item) => item.category === cat);
      return acc;
    },
    {} as Record<MenuCategory, MenuItem[]>
  );

  return (
    <>
      {/* Hero heading — fades up on load */}
      <section className="bg-cream-50 pt-12 sm:pt-16 lg:pt-28 pb-8 sm:pb-12 px-5 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection delay={0.1} direction="up">
            <p className="text-accent-500 text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Our Menu
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.25} direction="up" duration={0.7}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-coffee-900 leading-[0.95]">
              Craft Coffee
              <br />
              & <span className="text-accent-500">More</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Category grid — cards stagger in one by one */}
      <section className="bg-cream-50 px-5 sm:px-8 lg:px-16 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
            staggerDelay={0.07}
            delayChildren={0.3}
          >
            {MENU_CATEGORIES.map((cat) => (
              <StaggerItem key={cat}>
                <a
                  href={`#${cat}`}
                  className="group relative overflow-hidden block"
                >
                  <ParallaxImage speed={0.15} className="h-44 sm:h-56 lg:h-64">
                    <Image
                      src={categoryMeta[cat].image}
                      alt={categoryMeta[cat].label}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </ParallaxImage>
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-coffee-900/40 group-hover:bg-coffee-900/30 transition-colors pointer-events-none" />
                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 pointer-events-none">
                    <span className="font-heading text-sm sm:text-base uppercase tracking-wider text-white">
                      {categoryMeta[cat].label}
                    </span>
                    <span className="block text-[10px] sm:text-xs text-white/70 mt-0.5">
                      {grouped[cat].length} items
                    </span>
                  </div>
                  {/* Badge for popular items */}
                  {grouped[cat].some((i) => i.isPopular) && (
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-accent-500 px-2 py-0.5 text-[9px] sm:text-[10px] uppercase tracking-wider text-white font-bold pointer-events-none">
                      Popular
                    </div>
                  )}
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Full menu — each category reveals on scroll, items stagger in */}
      {MENU_CATEGORIES.map((cat) => (
        <section
          key={cat}
          id={cat}
          className="border-t-4 border-coffee-900 bg-cream-50"
        >
          {/* Category header — slides in */}
          <AnimatedSection direction="up" duration={0.6}>
            <div className="px-5 sm:px-8 lg:px-16 py-8 sm:py-10 bg-cream-100">
              <div className="max-w-6xl mx-auto flex items-baseline justify-between">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-coffee-900">
                  {categoryMeta[cat].label}
                </h2>
                <span className="text-xs sm:text-sm text-coffee-500 uppercase tracking-wide">
                  {grouped[cat].length} items
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Items list — stagger in */}
          <StaggerContainer
            className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-16"
            staggerDelay={0.06}
          >
            {grouped[cat].map((item, idx) => (
              <StaggerItem key={item.id}>
                <div className="flex items-start gap-4 sm:gap-8 py-6 sm:py-8 border-b border-coffee-200 last:border-b-0">
                  {/* Number */}
                  <span className="font-heading text-xl sm:text-2xl text-coffee-300 shrink-0 w-8 sm:w-10 pt-0.5">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-heading text-base sm:text-lg text-coffee-900 uppercase">
                          {item.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-coffee-500 mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      {(item.isNew || item.isPopular) && (
                        <span className="hidden sm:inline-block bg-accent-500 text-white text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 shrink-0">
                          {item.isNew ? "New" : "Popular"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      ))}

      {/* Bottom CTA — fades up */}
      <AnimatedSection direction="up" duration={0.6}>
        <section className="bg-accent-500 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-white mb-4">
              Can&apos;t Decide?
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-6">
              Let our baristas recommend the perfect drink for you.
            </p>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
