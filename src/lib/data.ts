import type { MenuItem, Testimonial, CoffeeEvent, BlogPost, TeamMember, JobListing, FAQItem, GalleryImage } from "@/types";

// Menu Items
export const menuItems: MenuItem[] = [
  // Coffee
  {
    id: "1",
    name: "Signature Espresso",
    description: "Rich, bold espresso with notes of dark chocolate and caramel",
    price: 4.50,
    category: "coffee",
    isPopular: true,
  },
  {
    id: "2",
    name: "Arabica Pour Over",
    description: "Single-origin hand-poured coffee with floral undertones",
    price: 5.50,
    category: "coffee",
    isNew: true,
  },
  {
    id: "3",
    name: "Classic Cappuccino",
    description: "Perfectly balanced espresso with silky steamed milk foam",
    price: 5.00,
    category: "coffee",
    isPopular: true,
  },
  {
    id: "4",
    name: "Vanilla Latte",
    description: "Smooth espresso with vanilla and creamy steamed milk",
    price: 5.50,
    category: "coffee",
  },
  {
    id: "5",
    name: "Mocha Delight",
    description: "Espresso, chocolate, and steamed milk topped with whipped cream",
    price: 6.00,
    category: "coffee",
  },
  {
    id: "6",
    name: "Cold Brew",
    description: "Slow-steeped for 20 hours, smooth and refreshing",
    price: 5.00,
    category: "coffee",
  },
  // Drinks
  {
    id: "7",
    name: "Matcha Latte",
    description: "Premium Japanese matcha with your choice of milk",
    price: 5.50,
    category: "drinks",
    isNew: true,
  },
  {
    id: "8",
    name: "Chai Tea Latte",
    description: "Spiced chai blend with warm steamed milk",
    price: 5.00,
    category: "drinks",
  },
  {
    id: "9",
    name: "Hot Chocolate",
    description: "Rich Belgian chocolate with whipped cream",
    price: 4.50,
    category: "drinks",
  },
  {
    id: "10",
    name: "Fresh Lemonade",
    description: "Hand-squeezed lemons with a hint of mint",
    price: 4.00,
    category: "drinks",
  },
  // Pastries
  {
    id: "11",
    name: "Butter Croissant",
    description: "Flaky, golden French croissant baked fresh daily",
    price: 3.50,
    category: "pastries",
    isPopular: true,
  },
  {
    id: "12",
    name: "Almond Danish",
    description: "Sweet pastry with almond cream and sliced almonds",
    price: 4.00,
    category: "pastries",
  },
  {
    id: "13",
    name: "Blueberry Muffin",
    description: "Moist muffin bursting with fresh blueberries",
    price: 3.50,
    category: "pastries",
  },
  {
    id: "14",
    name: "Chocolate Éclair",
    description: "Choux pastry filled with cream, topped with chocolate",
    price: 4.50,
    category: "pastries",
    isNew: true,
  },
  // Specialties
  {
    id: "15",
    name: "Affogato",
    description: "Vanilla gelato drowned in hot espresso",
    price: 6.50,
    category: "specialties",
    isPopular: true,
  },
  {
    id: "16",
    name: "Espresso Martini",
    description: "Coffee-infused cocktail with vodka and Kahlúa",
    price: 12.00,
    category: "specialties",
  },
  {
    id: "17",
    name: "Lavender Honey Latte",
    description: "Espresso with lavender syrup and local honey",
    price: 6.00,
    category: "specialties",
    isNew: true,
  },
  {
    id: "18",
    name: "Turkish Coffee",
    description: "Traditional finely ground coffee, unfiltered",
    price: 5.00,
    category: "specialties",
  },
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Regular Customer",
    content: "The best coffee in town! The atmosphere is cozy, and the baristas always remember my order. It's my daily escape.",
    rating: 5,
  },
  {
    id: "2",
    name: "James Chen",
    role: "Coffee Enthusiast",
    content: "As someone who's tried coffee shops worldwide, Arabica stands out. Their pour-over is exceptional, and you can taste the passion in every cup.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    role: "Remote Worker",
    content: "My go-to spot for working remotely. Great WiFi, comfortable seating, and unlimited coffee refills. What more could you ask for?",
    rating: 5,
  },
  {
    id: "4",
    name: "Michael Thompson",
    role: "Food Blogger",
    content: "The pastries here are to die for! The butter croissants are as good as what I've had in Paris. Highly recommend!",
    rating: 5,
  },
  {
    id: "5",
    name: "Lisa Park",
    role: "Local Artist",
    content: "I love the art on the walls and the creative vibe. It's inspiring to work here, and the lavender latte is my new obsession.",
    rating: 5,
  },
];

// Events
export const events: CoffeeEvent[] = [
  {
    id: "1",
    title: "Coffee Cupping Workshop",
    date: "January 15, 2025",
    time: "10:00 AM - 12:00 PM",
    description: "Learn the art of coffee tasting with our head roaster. Discover the nuances of different origins and processing methods.",
  },
  {
    id: "2",
    title: "Latte Art Masterclass",
    date: "January 22, 2025",
    time: "2:00 PM - 4:00 PM",
    description: "Master the basics of latte art. From hearts to rosettas, our baristas will guide you through the techniques.",
  },
  {
    id: "3",
    title: "Live Jazz & Coffee Night",
    date: "January 28, 2025",
    time: "7:00 PM - 10:00 PM",
    description: "Enjoy smooth jazz performances while sipping on our signature drinks. Perfect for a relaxed evening.",
  },
  {
    id: "4",
    title: "Sustainable Coffee Talk",
    date: "February 5, 2025",
    time: "6:00 PM - 7:30 PM",
    description: "Join us for a discussion on sustainable coffee sourcing and how we support farming communities.",
  },
  {
    id: "5",
    title: "Valentine's Coffee Pairing",
    date: "February 14, 2025",
    time: "6:00 PM - 9:00 PM",
    description: "A special evening of coffee and chocolate pairings. Perfect for a unique date night experience.",
  },
];

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "the-art-of-pour-over-coffee",
    title: "The Art of Pour Over Coffee",
    excerpt: "Discover the meditative practice of pour-over brewing and why it produces the most flavorful cup of coffee.",
    content: "Pour-over coffee is more than just a brewing method—it's an art form...",
    author: "Maria Santos",
    date: "December 20, 2024",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
    category: "Brewing",
    readTime: "5 min read",
  },
  {
    id: "2",
    slug: "coffee-origins-ethiopia",
    title: "Coffee Origins: A Journey to Ethiopia",
    excerpt: "Explore the birthplace of coffee and learn about the unique flavors of Ethiopian beans.",
    content: "Ethiopia is widely considered the birthplace of coffee...",
    author: "David Kim",
    date: "December 15, 2024",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800",
    category: "Origins",
    readTime: "7 min read",
  },
  {
    id: "3",
    slug: "perfect-espresso-at-home",
    title: "How to Make Perfect Espresso at Home",
    excerpt: "Tips and tricks from our baristas to help you achieve café-quality espresso in your kitchen.",
    content: "Making great espresso at home is absolutely achievable...",
    author: "Alex Chen",
    date: "December 10, 2024",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800",
    category: "Tips",
    readTime: "6 min read",
  },
  {
    id: "4",
    slug: "sustainable-coffee-practices",
    title: "Our Commitment to Sustainable Coffee",
    excerpt: "Learn about our journey towards 100% sustainably sourced coffee and how we support farming communities.",
    content: "Sustainability isn't just a buzzword for us—it's a core value...",
    author: "Maria Santos",
    date: "December 5, 2024",
    image: "https://images.unsplash.com/photo-1524350876685-274059332603?w=800",
    category: "Sustainability",
    readTime: "8 min read",
  },
];

// Team Members
export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Maria Santos",
    role: "Founder & Head Roaster",
    bio: "With 15 years in the coffee industry, Maria founded Arabica with a vision to bring exceptional coffee to our community.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
  {
    id: "2",
    name: "David Kim",
    role: "Head Barista",
    bio: "A three-time latte art champion, David leads our barista team with passion and precision.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  },
  {
    id: "3",
    name: "Alex Chen",
    role: "Pastry Chef",
    bio: "Trained in Paris, Alex creates all our delicious pastries fresh every morning.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
  },
  {
    id: "4",
    name: "Jordan Taylor",
    role: "Operations Manager",
    bio: "Jordan ensures everything runs smoothly, from supply chain to customer experience.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
  },
];

// Job Listings
export const jobListings: JobListing[] = [
  {
    id: "1",
    title: "Barista",
    type: "full-time",
    location: "Downtown Location",
    description: "Join our team as a barista and create exceptional coffee experiences for our customers.",
    requirements: [
      "1+ years barista experience",
      "Passion for coffee and customer service",
      "Ability to work flexible hours",
      "Team player with positive attitude",
    ],
  },
  {
    id: "2",
    title: "Shift Supervisor",
    type: "full-time",
    location: "Downtown Location",
    description: "Lead our team during shifts and ensure smooth operations while maintaining our high standards.",
    requirements: [
      "2+ years coffee shop experience",
      "Leadership experience preferred",
      "Strong communication skills",
      "Problem-solving abilities",
    ],
  },
  {
    id: "3",
    title: "Weekend Barista",
    type: "part-time",
    location: "All Locations",
    description: "Perfect for students or those seeking weekend work. Join our vibrant weekend team.",
    requirements: [
      "Some barista experience preferred",
      "Available Saturdays and Sundays",
      "Enthusiastic and reliable",
      "Quick learner",
    ],
  },
];

// FAQ Items
export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "What are your hours of operation?",
    answer: "We're open Monday through Friday from 7:00 AM to 8:00 PM, Saturday from 8:00 AM to 9:00 PM, and Sunday from 8:00 AM to 6:00 PM.",
  },
  {
    id: "2",
    question: "Do you offer dairy-free milk alternatives?",
    answer: "Yes! We offer oat milk, almond milk, soy milk, and coconut milk at no extra charge. Just ask your barista!",
  },
  {
    id: "3",
    question: "Can I book the space for private events?",
    answer: "Absolutely! We offer private event bookings for groups of 20-50 people. Contact us at events@arabicacoffee.com for availability and pricing.",
  },
  {
    id: "4",
    question: "Do you sell coffee beans to take home?",
    answer: "Yes, we sell all our house-roasted coffee beans in 250g and 500g bags. We also offer a coffee subscription service for regular deliveries.",
  },
  {
    id: "5",
    question: "Is there WiFi available?",
    answer: "Yes, we offer free high-speed WiFi for all customers. Ask any team member for the password.",
  },
  {
    id: "6",
    question: "Do you have gluten-free options?",
    answer: "We have several gluten-free pastry options available daily. Please inform our staff of any allergies when ordering.",
  },
  {
    id: "7",
    question: "Can I bring my laptop and work here?",
    answer: "Of course! We welcome remote workers and have plenty of power outlets. We just ask that during busy periods, you be mindful of space.",
  },
  {
    id: "8",
    question: "Do you offer gift cards?",
    answer: "Yes! Gift cards are available in any amount from $10 and up. They can be purchased in-store or online.",
  },
];

// Gallery Images
export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800",
    alt: "Coffee shop interior with warm lighting",
    width: 800,
    height: 600,
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
    alt: "Barista preparing pour-over coffee",
    width: 800,
    height: 1000,
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
    alt: "Beautiful latte art in a ceramic cup",
    width: 800,
    height: 800,
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1559496417-e7f25cb247cd?w=800",
    alt: "Fresh pastries on display",
    width: 800,
    height: 600,
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800",
    alt: "Coffee beans being roasted",
    width: 800,
    height: 1000,
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800",
    alt: "Cozy seating area with customers",
    width: 800,
    height: 600,
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800",
    alt: "Espresso being extracted",
    width: 800,
    height: 800,
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800",
    alt: "Coffee and pastry pairing",
    width: 800,
    height: 600,
  },
];
