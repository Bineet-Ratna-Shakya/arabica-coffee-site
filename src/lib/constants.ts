// Site configuration
export const siteConfig = {
  name: "Arabica Coffee",
  description:
    "Experience the finest specialty coffee in town. Hand-roasted beans, artisan brewing, and a cozy atmosphere await you.",
  url: "https://arabicacoffee.com",
  ogImage: "/og-image.jpg",
  links: {
    instagram: "https://instagram.com/arabicacoffee",
    facebook: "https://facebook.com/arabicacoffee",
    twitter: "https://twitter.com/arabicacoffee",
  },
  contact: {
    phone: "+1 (555) 123-4567",
    email: "hello@arabicacoffee.com",
    address: "123 Coffee Lane, Brewville, CA 90210",
  },
  hours: {
    weekdays: "7:00 AM - 8:00 PM",
    saturday: "8:00 AM - 9:00 PM",
    sunday: "8:00 AM - 6:00 PM",
  },
};

// Navigation links
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// Footer quick links
export const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/events", label: "Events" },
    { href: "/blog", label: "Blog" },
  ],
  support: [
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
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
