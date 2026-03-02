import type { Metadata } from "next";
import { JetBrains_Mono, Space_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/shared/back-to-top";
import { RouteLoader } from "@/components/shared/route-loader";
import { siteConfig } from "@/lib/constants";
import {
  OrganizationSchema,
  LocalBusinessSchema,
  WebSiteSchema,
  CourseSchema,
} from "@/components/seo/json-ld";
import "@/styles/globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Premium Specialty Coffee`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "coffee shop",
    "specialty coffee",
    "arabica coffee",
    "espresso",
    "cafe",
    "artisan coffee",
    "coffee house",
    "premium coffee",
    "barista training",
    "SCA certification",
    "Kathmandu coffee",
    "Nepal cafe",
    "coffee academy",
    "latte art",
    "pour over coffee",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@arabicacoffee",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${spaceMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-cream-50 antialiased">
        {/* JSON-LD Structured Data */}
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebSiteSchema />
        <CourseSchema />

        {/* Skip Link for Accessibility */}
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="pt-16 lg:pt-0">
          {children}
        </main>

        <Footer />
        <BackToTop />
        <RouteLoader />

        {/* Noscript fallback */}
        <noscript>
          <div style={{ padding: "20px", textAlign: "center" }}>
            <p>Please enable JavaScript for the best experience on {siteConfig.name}.</p>
          </div>
        </noscript>
      </body>
    </html>
  );
}
