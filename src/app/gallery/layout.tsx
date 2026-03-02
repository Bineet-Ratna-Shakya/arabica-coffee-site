import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual journey through Arabica Beans & Academy — warm interiors, skilled baristas, latte art, and the moments that make our coffee shop special.",
  keywords: [
    "coffee shop gallery",
    "cafe photos",
    "latte art",
    "coffee shop interior",
    "Kathmandu cafe",
    "coffee photography",
  ],
  openGraph: {
    title: `Gallery | ${siteConfig.name}`,
    description:
      "A visual journey through Arabica — warm interiors, skilled baristas, and the moments that make us special.",
    url: `${siteConfig.url}/gallery`,
    images: [
      {
        url: `${siteConfig.url}/images/IMG_2057.JPG.jpeg`,
        width: 1200,
        height: 630,
        alt: "Arabica coffee shop gallery",
      },
    ],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
