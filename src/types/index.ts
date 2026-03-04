// Menu item type
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image?: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export type MenuCategory =
  | "hot-coffee"
  | "cold-iced-coffee"
  | "smoothies"
  | "blended-coffee"
  | "coffee-alternatives"
  | "healthy-breakfast"
  | "matcha"
  | "ice-cream"
  | "water"
  | "fresh-juice"
  | "bakery";

// Gallery image type
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category?: "cafe" | "academy" | "exterior";
}

