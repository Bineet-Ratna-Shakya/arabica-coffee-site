import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { siteConfig } from "@/lib/constants";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  // Full breadcrumb list including home
  const fullItems = [{ name: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Visual Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center gap-1 text-sm ${className}`}
      >
        {fullItems.map((item, index) => {
          const isLast = index === fullItems.length - 1;
          const isFirst = index === 0;

          return (
            <span key={item.href} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight className="h-3.5 w-3.5 text-coffee-400" aria-hidden="true" />
              )}
              {isLast ? (
                <span className="text-coffee-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-coffee-500 hover:text-coffee-900 transition-colors flex items-center gap-1"
                >
                  {isFirst && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
                  {!isFirst && item.name}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}

// Minimal breadcrumb for dark backgrounds
export function BreadcrumbsLight({ items, className = "" }: BreadcrumbsProps) {
  const fullItems = [{ name: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <nav
        aria-label="Breadcrumb"
        className={`flex items-center gap-1 text-sm ${className}`}
      >
        {fullItems.map((item, index) => {
          const isLast = index === fullItems.length - 1;

          return (
            <span key={item.href} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight className="h-3.5 w-3.5 text-cream-400" aria-hidden="true" />
              )}
              {isLast ? (
                <span className="text-cream-50" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-cream-300 hover:text-cream-50 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
