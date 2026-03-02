import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getMenuItemsByCategory } from "@/lib/menu-service";
import { MENU_CATEGORIES, categoryMeta } from "@/lib/constants";
import type { MenuCategory, MenuItem } from "@/types";

export const revalidate = 60;

function MenuListItem({ item, number }: { item: MenuItem; number: number }) {
  return (
    <Link
      href={`/menu/${item.id}`}
      className="group flex gap-5 py-4 border-b border-cream-200 last:border-0 hover:bg-cream-50/50 -mx-3 px-3 transition-colors"
    >
      <span className="text-base font-medium text-coffee-300 w-8 shrink-0 pt-0.5">
        {String(number).padStart(2, "0")}
      </span>
      <div className="flex-1 min-w-0">
        <h3 className="font-heading text-lg text-coffee-900 group-hover:underline underline-offset-2 leading-tight">
          {item.name}
        </h3>
        <p className="text-sm text-coffee-500 mt-1 leading-relaxed">
          {item.description}
        </p>
      </div>
      {(item.isNew || item.isPopular) && (
        <span className="bg-accent-500 text-white text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 shrink-0 self-start mt-1">
          {item.isNew ? "New" : "Popular"}
        </span>
      )}
    </Link>
  );
}

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return MENU_CATEGORIES.map((category) => ({ category }));
}

export default async function MenuCategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  if (!MENU_CATEGORIES.includes(category as MenuCategory)) {
    notFound();
  }

  const validCategory = category as MenuCategory;
  const items = await getMenuItemsByCategory(validCategory);
  const meta = categoryMeta[validCategory];

  if (items.length === 0) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Magazine spread layout */}
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Left: Image with title overlay */}
        <div className="relative min-h-[50vh] md:min-h-screen md:sticky md:top-0">
          <Image
            src={meta.image}
            alt={meta.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-white italic leading-none">
              {meta.title}
            </h1>
            <p className="text-sm text-white/60 mt-3 uppercase tracking-[0.2em]">
              {meta.subtitle}
            </p>
            <p className="text-white/80 mt-4 max-w-sm text-sm leading-relaxed hidden md:block">
              {meta.description}
            </p>
          </div>

          {/* Back link - mobile */}
          <Link
            href="/menu"
            className="absolute top-4 left-4 md:top-8 md:left-8 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded text-xs uppercase tracking-[0.15em] text-coffee-900 hover:bg-white transition-colors"
          >
            ← Menu
          </Link>
        </div>

        {/* Right: Item list */}
        <div className="p-8 md:p-12 lg:p-16 bg-white">
          {/* Breadcrumb - desktop */}
          <nav className="hidden md:flex items-center gap-2 text-sm text-coffee-400 mb-12">
            <Link href="/menu" className="hover:text-coffee-900 transition-colors">
              Menu
            </Link>
            <span>/</span>
            <span className="text-coffee-900">{meta.title}</span>
          </nav>

          {/* Section header */}
          <div className="mb-8 pb-4 border-b border-cream-300">
            <span className="text-xs uppercase tracking-[0.25em] text-coffee-500">
              {meta.subtitle} · {items.length} items
            </span>
          </div>

          {/* Items list */}
          <div>
            {items.map((item, i) => (
              <MenuListItem key={item.id} item={item} number={i + 1} />
            ))}
          </div>

          {/* Other categories */}
          <div className="mt-12 pt-8 border-t border-cream-200">
            <p className="text-xs uppercase tracking-[0.2em] text-coffee-400 mb-4">
              Explore more
            </p>
            <div className="flex flex-wrap gap-3">
              {MENU_CATEGORIES.filter((c) => c !== validCategory).map((cat) => (
                <Link
                  key={cat}
                  href={`/menu/category/${cat}`}
                  className="px-4 py-2 border border-cream-300 rounded text-sm text-coffee-700 hover:bg-cream-50 hover:border-coffee-300 transition-colors"
                >
                  {categoryMeta[cat].title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
