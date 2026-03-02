import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@/components/shared/section-container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getMenuItems, getMenuItemById } from "@/lib/menu-service";
import { categoryImages } from "@/lib/constants";

export const revalidate = 60;

interface MenuItemPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const items = await getMenuItems();
  return items.map((item) => ({ id: item.id }));
}

export default async function MenuItemPage({ params }: MenuItemPageProps) {
  const { id } = await params;
  const item = await getMenuItemById(id);

  if (!item) {
    notFound();
  }

  const itemImage = item.image || categoryImages[item.category];

  return (
    <div className="bg-white min-h-screen">
      {/* Two-column layout */}
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Image Side */}
        <div className="relative h-[50vh] md:h-auto md:sticky md:top-0">
          <Image
            src={itemImage}
            alt={item.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:hidden" />

          {/* Mobile back button */}
          <Link
            href="/menu"
            className="absolute top-4 left-4 md:hidden px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded text-xs uppercase tracking-[0.15em] text-coffee-900"
          >
            ← Menu
          </Link>
        </div>

        {/* Content Side */}
        <div className="flex flex-col">
          <SectionContainer className="flex-1 py-8 md:py-16">
            <AnimatedSection className="h-full flex flex-col">
              {/* Breadcrumb - Desktop */}
              <nav className="hidden md:flex items-center gap-2 text-sm text-coffee-500 mb-8">
                <Link href="/menu" className="hover:text-coffee-900 underline underline-offset-2">
                  Menu
                </Link>
                <span>/</span>
                <Link
                  href={`/menu/category/${item.category}`}
                  className="hover:text-coffee-900 underline underline-offset-2 capitalize"
                >
                  {item.category}
                </Link>
                <span>/</span>
                <span className="text-coffee-900">{item.name}</span>
              </nav>

              {/* Item Details */}
              <div className="flex-1 space-y-6">
                {/* Badges */}
                {(item.isNew || item.isPopular) && (
                  <div className="flex gap-2">
                    {item.isNew && <Badge variant="new">New</Badge>}
                    {item.isPopular && <Badge variant="popular">Popular</Badge>}
                  </div>
                )}

                {/* Category */}
                <p className="text-xs uppercase tracking-[0.2em] text-coffee-500">
                  {item.category}
                </p>

                {/* Name */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-coffee-900 italic leading-tight">
                  {item.name}
                </h1>

                {/* Description */}
                <p className="text-lg text-coffee-600 leading-relaxed max-w-md">
                  {item.description}
                </p>

                {/* Divider */}
                <hr className="border-cream-200" />

                {/* Notes */}
                <div className="space-y-3 text-sm text-coffee-600">
                  <p>Alternative milks included at no extra charge:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Oat", "Almond", "Soy", "Coconut"].map((milk) => (
                      <span
                        key={milk}
                        className="px-3 py-1 bg-cream-100 rounded-full text-xs uppercase tracking-[0.1em]"
                      >
                        {milk}
                      </span>
                    ))}
                  </div>
                  <p className="text-coffee-500 italic">
                    Please inform us of any allergies when ordering.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-8 space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="text-xs uppercase tracking-[0.15em]">
                    Add to Order
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-xs uppercase tracking-[0.15em] border-coffee-200"
                  >
                    Customize
                  </Button>
                </div>

                <Link
                  href={`/menu/category/${item.category}`}
                  className="inline-block text-xs uppercase tracking-[0.15em] text-coffee-500 hover:text-coffee-900 underline underline-offset-4"
                >
                  View more {item.category} →
                </Link>
              </div>
            </AnimatedSection>
          </SectionContainer>
        </div>
      </div>
    </div>
  );
}
