import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@/components/shared/section-container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Badge } from "@/components/ui/badge";
import { getTrendingMenuItems } from "@/lib/menu-service";
import { categoryImages } from "@/lib/constants";
import type { MenuItem } from "@/types";

export const revalidate = 60;

function TrendingItemCard({ item, index }: { item: MenuItem; index: number }) {
  const itemImage = item.image || categoryImages[item.category];
  const isLarge = index === 0;

  if (isLarge) {
    return (
      <Link href={`/menu/${item.id}`} className="group block md:col-span-2">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-cream-100">
            <Image
              src={itemImage}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              {item.isNew && <Badge variant="new">New</Badge>}
              {item.isPopular && <Badge variant="popular">Popular</Badge>}
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-5xl font-heading text-coffee-200">01</span>
              <span className="text-xs uppercase tracking-[0.2em] text-coffee-500">Top Pick</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-heading text-coffee-900 italic group-hover:underline underline-offset-4">
              {item.name}
            </h3>
            <p className="text-coffee-600 leading-relaxed">
              {item.description}
            </p>
            <span className="text-xs uppercase tracking-[0.15em] text-coffee-500">
              {item.category.replace(/-/g, " ")}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/menu/${item.id}`} className="group block">
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-cream-100 mb-4">
        <Image
          src={itemImage}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-1">
          {item.isNew && <Badge variant="new" className="text-[10px]">New</Badge>}
          {item.isPopular && <Badge variant="popular" className="text-[10px]">Popular</Badge>}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="text-4xl font-heading text-white/30 block leading-none">
            0{index + 1}
          </span>
        </div>
      </div>
      <h4 className="font-heading text-xl text-coffee-900 group-hover:underline underline-offset-2">
        {item.name}
      </h4>
      <p className="text-sm text-coffee-500 mt-1 line-clamp-2">
        {item.description}
      </p>
      <span className="text-xs uppercase tracking-[0.1em] text-coffee-400 mt-3 block">
        {item.category.replace(/-/g, " ")}
      </span>
    </Link>
  );
}

export default async function TrendingMenuPage() {
  const trendingItems = await getTrendingMenuItems();

  const firstItem = trendingItems[0];
  const otherItems = trendingItems.slice(1);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="border-b border-cream-200">
        <SectionContainer>
          <div className="py-12 md:py-16">
            <AnimatedSection>
              <nav className="flex items-center gap-2 text-sm text-coffee-500 mb-6">
                <Link href="/menu" className="hover:text-coffee-900 underline underline-offset-2">
                  Menu
                </Link>
                <span>/</span>
                <span className="text-coffee-900">Trending</span>
              </nav>

              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <span className="text-7xl md:text-8xl font-heading text-coffee-100 block leading-none">
                    Hot
                  </span>
                  <h1 className="text-4xl md:text-5xl font-heading text-coffee-900 italic -mt-4 md:-mt-6">
                    What's Trending
                  </h1>
                </div>
                <p className="text-coffee-600 max-w-md md:text-right">
                  The drinks and bites our guests can't stop ordering. Updated based on what's popular right now.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </SectionContainer>
      </header>

      {/* Featured Item */}
      {firstItem && (
        <section className="border-b border-cream-200">
          <SectionContainer>
            <div className="py-12 md:py-16">
              <TrendingItemCard item={firstItem} index={0} />
            </div>
          </SectionContainer>
        </section>
      )}

      {/* Other Trending Items */}
      {otherItems.length > 0 && (
        <section>
          <SectionContainer>
            <div className="py-12 md:py-16">
              <h2 className="text-2xl font-heading text-coffee-900 italic mb-8">
                Also Trending
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {otherItems.map((item, i) => (
                  <TrendingItemCard key={item.id} item={item} index={i + 1} />
                ))}
              </div>
            </div>
          </SectionContainer>
        </section>
      )}

      {/* Back to Menu */}
      <footer className="border-t border-cream-200 bg-cream-50">
        <SectionContainer>
          <div className="py-12 text-center">
            <p className="text-sm text-coffee-500 mb-4">
              Want to see everything?
            </p>
            <Link
              href="/menu"
              className="inline-block px-6 py-2.5 border border-coffee-900 text-coffee-900 text-xs uppercase tracking-[0.2em] hover:bg-coffee-900 hover:text-cream-50 transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </SectionContainer>
      </footer>
    </div>
  );
}
