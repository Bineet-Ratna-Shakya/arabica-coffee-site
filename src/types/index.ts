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

export type MenuCategory = "coffee" | "drinks" | "pastries" | "specialties";

// Team member type
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

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

// Testimonial type
export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating: number;
  image?: string;
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
}

// Contact form data type
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}
