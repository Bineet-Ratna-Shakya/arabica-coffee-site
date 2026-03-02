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

// Event type
export interface CoffeeEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image?: string;
  isPast?: boolean;
}

// Blog post type
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

// Job listing type
export interface JobListing {
  id: string;
  title: string;
  type: "full-time" | "part-time" | "contract";
  location: string;
  description: string;
  requirements: string[];
}

// FAQ item type
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Gallery image type
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category?: "cafe" | "academy" | "exterior";
}

