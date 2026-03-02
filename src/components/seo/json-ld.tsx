import { siteConfig } from "@/lib/constants";

// Organization Schema - Site-wide
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    foundingDate: siteConfig.foundingDate,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      email: siteConfig.contact.email,
      availableLanguage: ["English", "Nepali"],
    },
    sameAs: [
      siteConfig.links.instagram,
      siteConfig.links.facebook,
      siteConfig.links.twitter,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// LocalBusiness Schema - For local SEO and Knowledge Panel
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: siteConfig.priceRange,
    servesCuisine: ["Coffee", "Espresso", "Pastries"],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.geo.latitude,
      longitude: siteConfig.contact.geo.longitude,
    },
    openingHoursSpecification: siteConfig.hours.structured.flatMap((schedule) =>
      schedule.days.map((day) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: day,
        opens: schedule.opens,
        closes: schedule.closes,
      }))
    ),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    hasMenu: {
      "@type": "Menu",
      url: `${siteConfig.url}/menu`,
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "SCA Certified Training Partner",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// WebSite Schema - For sitelinks search box
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/menu?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Course Schema - For barista academy
export function CourseSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "SCA Barista Training Program",
    description:
      "SCA-certified barista training program covering espresso fundamentals, latte art, and professional coffee preparation techniques.",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    courseCode: "SCA-BARISTA",
    educationalCredentialAwarded: "SCA Barista Certification",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      location: {
        "@type": "Place",
        name: siteConfig.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address.street,
          addressLocality: siteConfig.contact.address.city,
          addressCountry: siteConfig.contact.address.country,
        },
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQPage Schema - For FAQ content
interface FAQ {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQ[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Article Schema - For blog posts
interface ArticleData {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  slug: string;
}

export function ArticleSchema({ article }: { article: ArticleData }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image.startsWith("http")
      ? article.image
      : `${siteConfig.url}${article.image}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Organization",
      name: article.author || siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${article.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Product Schema - For menu items
interface ProductData {
  name: string;
  description: string;
  price: number;
  currency?: string;
  image?: string;
  category?: string;
}

export function ProductSchema({ product }: { product: ProductData }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image || `${siteConfig.url}${siteConfig.ogImage}`,
    category: product.category,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: product.currency || "NPR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// BreadcrumbList Schema - For navigation
interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
