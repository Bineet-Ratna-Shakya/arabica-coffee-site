import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Visit Arabica Beans & Academy at ${siteConfig.contact.address.full}. Get in touch for reservations, barista training inquiries, or private events. Open 7 days a week.`,
  keywords: [
    "contact",
    "coffee shop location",
    "Bagbazar cafe",
    "Kathmandu coffee",
    "barista training inquiry",
    "cafe reservation",
    "coffee shop hours",
  ],
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description: `Visit us at ${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}. Open 7 days a week.`,
    url: `${siteConfig.url}/contact`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Arabica coffee shop contact",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
