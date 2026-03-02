// Site configuration
export const siteConfig = {
  name: "Arabica Beans & Academy",
  description:
    "Specialty coffee house and SCA-certified barista academy in Bagbazar, Kathmandu. Cozy, modern, and built for coffee lovers, learners, and locals.",
  url: "https://arabicaacademy.com",
  ogImage: "/og-image.jpg",
  links: {
    instagram: "https://instagram.com/arabicacoffee",
    facebook: "https://facebook.com/arabicacoffee",
    twitter: "https://twitter.com/arabicacoffee",
  },
  contact: {
    phone: "9700128949",
    phoneDisplay: "970-012-8949",
    email: "arabicaacademy27@gmail.com",
    address: {
      street: "Purple House, Bagbazar",
      city: "Kathmandu",
      postalCode: "44600",
      country: "Nepal",
      full: "Purple House, Bagbazar, Kathmandu 44600, Nepal",
    },
    geo: {
      latitude: 27.7057538,
      longitude: 85.3222866,
    },
    mapsUrl: "https://maps.app.goo.gl/49mFw9uXVdp1KPRN7",
  },
  hours: {
    weekdays: "8:00 AM - 8:00 PM",
    saturday: "8:00 AM - 8:00 PM",
    sunday: "8:00 AM - 8:00 PM",
    // Structured for schema.org
    structured: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "08:00", closes: "20:00" },
    ],
  },
  priceRange: "$$",
  foundingDate: "",
};

// Navigation links
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academy", label: "Academy" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/locations", label: "Location" },
  { href: "/contact", label: "Contact" },
];

// Footer quick links
export const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/academy", label: "Academy" },
    { href: "/menu", label: "Menu" },
    { href: "/gallery", label: "Gallery" },
    { href: "/locations", label: "Location" },
  ],
  support: [
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
};

// Animation variants for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

// ── Menu category data (centralized) ──────────────────────────────────
import type { MenuCategory } from "@/types";

export const MENU_CATEGORIES: MenuCategory[] = [
  "hot-coffee", "cold-iced-coffee", "smoothies", "blended-coffee",
  "coffee-alternatives", "healthy-breakfast", "matcha", "ice-cream",
  "water", "fresh-juice", "bakery",
];

export const categoryImages: Record<MenuCategory, string> = {
  "hot-coffee": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&auto=format&fit=crop&q=80",
  "cold-iced-coffee": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=1200&auto=format&fit=crop&q=80",
  smoothies: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=1200&auto=format&fit=crop&q=80",
  "blended-coffee": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=1200&auto=format&fit=crop&q=80",
  "coffee-alternatives": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=1200&auto=format&fit=crop&q=80",
  "healthy-breakfast": "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=1200&auto=format&fit=crop&q=80",
  matcha: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=1200&auto=format&fit=crop&q=80",
  "ice-cream": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=1200&auto=format&fit=crop&q=80",
  water: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=1200&auto=format&fit=crop&q=80",
  "fresh-juice": "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=1200&auto=format&fit=crop&q=80",
  bakery: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&auto=format&fit=crop&q=80",
};

export const categoryMeta: Record<MenuCategory, { label: string; title: string; subtitle: string; description: string; image: string }> = {
  "hot-coffee": {
    label: "Hot Coffee",
    title: "Hot Coffee",
    subtitle: "Espresso & Brewed",
    description: "From bold espressos to smooth pour-overs, each cup is crafted with precision and passion.",
    image: categoryImages["hot-coffee"],
  },
  "cold-iced-coffee": {
    label: "Cold & Iced Coffee",
    title: "Cold & Iced Coffee",
    subtitle: "Chilled & Refreshing",
    description: "Cool down with our selection of iced espressos, cold brews, and chilled coffee drinks.",
    image: categoryImages["cold-iced-coffee"],
  },
  smoothies: {
    label: "Smoothies",
    title: "Smoothies",
    subtitle: "Fruity & Fresh",
    description: "Blended with real fruits, yogurt, and natural goodness for a refreshing treat.",
    image: categoryImages["smoothies"],
  },
  "blended-coffee": {
    label: "Blended Coffee",
    title: "Blended Coffee",
    subtitle: "Frozen & Creamy",
    description: "Icy blended coffee drinks perfect for warm days — our frappés and frozen specialties.",
    image: categoryImages["blended-coffee"],
  },
  "coffee-alternatives": {
    label: "Coffee Alternatives",
    title: "Coffee Alternatives",
    subtitle: "Tea & More",
    description: "Beyond coffee — discover our selection of teas, chocolates, and warming beverages.",
    image: categoryImages["coffee-alternatives"],
  },
  "healthy-breakfast": {
    label: "Healthy Breakfast",
    title: "Healthy Breakfast",
    subtitle: "Start Fresh",
    description: "Nutritious bowls, toasts, and parfaits to fuel your morning the right way.",
    image: categoryImages["healthy-breakfast"],
  },
  matcha: {
    label: "Matcha",
    title: "Matcha",
    subtitle: "Japanese Green Tea",
    description: "Premium ceremonial-grade matcha prepared hot, iced, or blended.",
    image: categoryImages["matcha"],
  },
  "ice-cream": {
    label: "Ice Cream",
    title: "Ice Cream",
    subtitle: "Scoops & Affogatos",
    description: "House-made ice cream and gelato — try it solo or drowned in espresso.",
    image: categoryImages["ice-cream"],
  },
  water: {
    label: "Water",
    title: "Water",
    subtitle: "Still & Sparkling",
    description: "Stay hydrated with our still, sparkling, and infused water options.",
    image: categoryImages["water"],
  },
  "fresh-juice": {
    label: "Fresh Juice",
    title: "Fresh Juice",
    subtitle: "Cold Pressed",
    description: "Freshly squeezed and cold-pressed juices made to order with seasonal produce.",
    image: categoryImages["fresh-juice"],
  },
  bakery: {
    label: "Bakery Products",
    title: "Bakery Products",
    subtitle: "Fresh Baked Daily",
    description: "Buttery croissants, flaky danishes, and sweet treats — all baked fresh every morning.",
    image: categoryImages["bakery"],
  },
};
