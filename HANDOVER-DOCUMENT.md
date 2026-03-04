# Arabica Beans & Academy — Website Handover Document

**Project**: Arabica Beans & Academy — Official Website
**Client**: Arabica Beans & Academy, Purple House, Bagbazar, Kathmandu
**Developer**: [Your Name]
**Delivery Date**: March 2026
**Website URL**: https://arabicaacademy.com

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Screenshots — All Pages](#2-screenshots--all-pages)
3. [Complete Page Directory](#3-complete-page-directory)
4. [Feature Breakdown](#4-feature-breakdown)
5. [Google Sheets CMS — Menu Management](#5-google-sheets-cms--menu-management)
6. [SEO & Search Engine Optimization](#6-seo--search-engine-optimization)
7. [Design System & Branding](#7-design-system--branding)
8. [Animations & Micro-Interactions](#8-animations--micro-interactions)
9. [Performance & Security](#9-performance--security)
10. [Accessibility](#10-accessibility)
11. [Technical Architecture](#11-technical-architecture)
12. [Component Library](#12-component-library)
13. [Data & Content Management](#13-data--content-management)
14. [Deployment & Environment Setup](#14-deployment--environment-setup)
15. [Maintenance Guide](#15-maintenance-guide)
16. [Future Scope & Expansion Opportunities](#16-future-scope--expansion-opportunities)
17. [Project Statistics Summary](#17-project-statistics-summary)
18. [Investment Breakdown](#18-investment-breakdown)

---

## 1. Project Overview

A fully custom, production-ready website for **Arabica Beans & Academy** — a specialty coffee house and barista academy located at Purple House, Bagbazar, Kathmandu, Nepal. The academy's program is aligned with SCA, ASCA & AST international specialty coffee standards.

This is **not a template**. Every component, animation, layout, and interaction was hand-coded from scratch using the latest web technologies available in 2025/2026.

### What Was Delivered

| Deliverable | Details |
|---|---|
| Total Pages | **10 pages** (clean static routes, no dynamic routes) |
| Custom Components | **~30 hand-built components** |
| Lines of Code | **8,500+** hand-written lines |
| Menu Items | **41 items** displayed on a single menu page |
| CMS Integration | **Google Sheets** — update your menu from a spreadsheet |
| SEO Schemas | **4 types** of structured data for Google (Organization, LocalBusiness, WebSite, Course) |
| Gallery Images | **18 curated photos** across Cafe, Academy & Exterior |
| Responsive | Fully responsive across **mobile, tablet, and desktop** |
| Animations | **20 animation types** including parallax, page transitions, and scroll reveals |

---

## 2. Screenshots — All Pages

All screenshots are captured at **1440×900px** (full-page, desktop view) and are available in the `screenshots/` folder.

### Homepage
![Homepage](screenshots/home.png)
**File**: `screenshots/home.png`
Full landing experience with hero section, brand strip, featured offerings, academy highlight, testimonials carousel, call-to-action, and newsletter signup.

---

### About Page
![About](screenshots/about.png)
**File**: `screenshots/about.png`
Editorial magazine-style layout with parallax images, origin story in "chapters", brand values, photo grid, and key statistics (Founded 2018, 500+ trained, 50K+ cups served).

---

### Menu
![Menu](screenshots/menu.png)
**File**: `screenshots/menu.png`
Complete menu listing with all 41 items organized by category with New/Popular badges, powered by Google Sheets CMS.

---

### Academy
![Academy](screenshots/academy.png)
**File**: `screenshots/academy.png`
Full academy page with hero, program overview aligned to SCA/ASCA/AST standards, 5-module curriculum, two duration options (1 Week Intensive & 1 Month Advanced), certification details, "Why Choose Arabica" cards, and 3-step enrollment process.

---

### Gallery
![Gallery](screenshots/gallery.png)
**File**: `screenshots/gallery.png`
Interactive gallery with split hero (image + stats), masonry grid layout (18 photos across Cafe, Academy & Exterior categories), and **full lightbox** with keyboard navigation (arrow keys, Escape), image counter, and prev/next buttons.

---

### Testimonials
![Testimonials](screenshots/testimonials.png)
**File**: `screenshots/testimonials.png`
Testimonials page with split-layout hero (interior photo + invitation copy), "coming soon" message, and CTA section inviting visitors to be part of the story.

---

### Contact
![Contact](screenshots/contact.png)
**File**: `screenshots/contact.png`
Dual-purpose contact page with tab switcher between General inquiries and Academy enrollment. Repeating logo pattern backdrop, form validation with Zod, success states, and contact details footer.

---

### Locations
![Locations](screenshots/locations.png)
**File**: `screenshots/locations.png`
Location page with Google Maps embed, 8 amenity cards with responsive grid, operating hours, and direct contact details.

---

### Privacy Policy
![Privacy](screenshots/privacy.png)
**File**: `screenshots/privacy.png`
Full legal privacy policy with 11 sections covering data collection, cookies, security, rights, and children's privacy.

---

### Terms & Conditions
![Terms](screenshots/terms.png)
**File**: `screenshots/terms.png`
Complete terms of service with 15 sections including intellectual property, gift cards, events, liability, and Nepal governing law.

---

## 3. Complete Page Directory

### Main Pages (10 routes)

| # | Page | URL | Description |
|---|---|---|---|
| 1 | Home | `/` | Landing page with 8 sections |
| 2 | About | `/about` | Brand story, values, stats |
| 3 | Menu | `/menu` | Full menu listing (41 items across 11 categories) |
| 4 | Academy | `/academy` | Barista Certification Program (SCA/ASCA/AST aligned) |
| 5 | Gallery | `/gallery` | Photo gallery with lightbox (18 images) |
| 6 | Testimonials | `/testimonials` | Customer stories (placeholder — coming soon) |
| 7 | Contact | `/contact` | Dual contact/academy form |
| 8 | Locations | `/locations` | Google Maps, amenities, hours |
| 9 | Privacy Policy | `/privacy` | Legal — privacy |
| 10 | Terms | `/terms` | Legal — terms of service |

### Special Pages (system-generated)

| Page | Purpose |
|---|---|
| Loading Screen | Custom coffee cup filling animation with steam effect |
| 404 Page | Custom "not found" page |
| Error Page | Graceful error handling with retry button |
| `sitemap.xml` | Auto-generated sitemap for Google (10 URLs) |
| `robots.txt` | Search engine crawl rules (AI-bot friendly) |

**Total unique URLs generated**: **10 pages**

---

## 4. Feature Breakdown

### 4.1 Homepage Sections (8 sections)

1. **Hero Section** — Full-screen with Ken Burns zoom effect, animated text reveals, grain texture overlay, vignette, and scroll indicator
2. **Brand Strip** — Infinite-scrolling marquee of logos (22s loop)
3. **Featured Section** — Split layout with philosophy text, 4 feature highlights, and floating 4.9 rating card
4. **Academy Section** — Barista training promotion with 4 stats and certification badge
5. **Menu Preview** — Parallax header with 3 featured menu items in brutalist cards
6. **Testimonials Carousel** — Auto-rotating (6s interval) with manual navigation and dot indicators
7. **CTA Section** — Visit us prompt with hours, location, phone, and full-width image of Purple House
8. **Newsletter Section** — Email signup with success state and auto-reset

### 4.2 Menu System

- **41 menu items** displayed on a single menu listing page, organized by 11 categories
- **Google Sheets CMS** — client can update menu without a developer
- **Dynamic badges** — "New" and "Popular" flags
- **Alternative milk options** — Oat, Almond, Soy, Coconut badges
- **ISR caching** — menu updates go live within 60 seconds

### 4.3 Academy Page — Barista Certification Program

The academy page is a comprehensive, multi-section page showcasing the Arabica Barista Coffee School:

- **Hero** with background image and 4 stat cards (SCA Aligned, 80% Practical, ASCA Recognized, 500+ Trained)
- **About the Program** — 2-column layout with SCA/ASCA/AST framework alignment
- **Ideal For** — 4 target student profiles (beginners, enthusiasts, aspiring café owners, planning to work abroad)
- **Course Duration** — Two options:
  - 1 Week Intensive (fast-track certification)
  - 1 Month Advanced (deep professional program)
- **80% Practical / 20% Theory** training split callout
- **Full Curriculum** — 5 numbered modules:
  1. Coffee Foundation & Specialty Knowledge (2 topics)
  2. Espresso Mastery (4 topics)
  3. Milk Science & Latte Art (4 topics)
  4. Specialty Brewing Methods (3 topics)
  5. Café Operations & Professional Skills (4 topics)
- **Certification Section** — Arabica Barista Certification details, worldwide recognition
- **Why Choose Arabica** — 4 cards: Structured Curriculum, Hands-on Training, Small Batch Attention, Career Support
- **How It Works** — 3-step process: Call Us → Enroll → Certify
- **CTA** — Call Us + Send a Message buttons
- Academy-specific contact form with course selection and experience level (on Contact page)

### 4.4 Gallery with Lightbox

- **18 curated photographs** organized into 3 categories:
  - **Café** (12 images) — counter, seating, interior views, pastry display
  - **Academy** (4 images) — training stations, espresso machines, certifications
  - **Exterior** (2 images) — Purple House building, opening day
- Masonry grid layout (responsive 2–4 columns)
- **Click-to-expand lightbox modal**
- **Keyboard navigation**: Arrow keys to browse, Escape to close
- Image counter (e.g., "3 / 18")
- Previous/Next buttons
- Alt text captions displayed in lightbox
- Hover effects with frame numbering

### 4.5 Contact System

- **Dual forms**: General inquiry + Academy enrollment
- **Tab switcher** between form types (Coffee icon + Graduation Cap icon)
- **Repeating logo pattern backdrop** (CSS background-repeat, lightweight)
- **Zod validation**: Email format, minimum lengths, required fields
- **Academy form**: Course selection dropdown, experience level selector
- **Success state**: 5-second confirmation message
- Contact details: Phone, email, address

### 4.6 Locations Page

- **Google Maps embed** with exact location
- **Amenity cards** with responsive grid: Parking, WiFi, Wheelchair Accessible, Air Conditioned, Card Payments, Family Friendly, Pet Friendly, Lounge Seating
- Full address, phone, email
- Operating hours table
- "View in Google Maps" direct link

### 4.7 Testimonials Page

- Placeholder page — designed for future customer stories when reviews are collected
- Split-layout hero with interior photograph and invitation copy
- CTA section: "Write Your Own Story" with links to Menu and Contact

### 4.8 Legal Pages

- **Privacy Policy**: 11 sections, GDPR-aware, covers cookies, data rights, children's privacy
- **Terms & Conditions**: 15 sections, covers IP, gift cards, events, Nepal jurisdiction

---

## 5. Google Sheets CMS — Menu Management

This is one of the most valuable features of the website. The menu is powered by a Google Sheets spreadsheet, meaning **the client can update menu items, prices, and availability without contacting a developer**.

### How It Works

```
Google Sheet (your spreadsheet)
    ↓ Google Sheets API v4
Website fetches data every 60 seconds
    ↓ with caching (ISR)
Menu page updates automatically
```

### Google Sheet Column Structure

| Column | Header | Required | Example |
|---|---|---|---|
| A | `id` | Yes | `1`, `2`, `espresso-01` |
| B | `name` | Yes | `Classic Espresso` |
| C | `description` | Yes | `Bold, rich, and full-bodied...` |
| D | `price` | Yes | `280` or `$280` |
| E | `category` | Yes | `Hot Coffee`, `Matcha`, `Bakery` |
| F | `image` | No | Full URL to image |
| G | `isNew` | No | `true`, `yes`, `1` |
| H | `isPopular` | No | `true`, `yes`, `1` |

### Supported Categories

The system recognizes these categories (case-insensitive, flexible naming):

| Category | Accepted Values |
|---|---|
| Hot Coffee | `Hot Coffee`, `hot-coffee` |
| Cold & Iced Coffee | `Cold & Iced Coffee`, `Iced Coffee`, `cold-iced-coffee` |
| Smoothies | `Smoothies`, `Smoothie` |
| Blended Coffee | `Blended Coffee`, `blended-coffee` |
| Coffee Alternatives | `Coffee Alternatives`, `coffee-alternatives` |
| Healthy Breakfast | `Healthy Breakfast`, `healthy-breakfast` |
| Matcha | `Matcha` |
| Ice Cream | `Ice Cream`, `ice-cream`, `icecream` |
| Water | `Water` |
| Fresh Juice | `Fresh Juice`, `fresh-juice` |
| Bakery Products | `Bakery`, `Bakery Products`, `bakery-products` |

### How to Update the Menu

1. Open the Google Sheet linked to the website
2. Add, edit, or remove rows in the spreadsheet
3. The website will automatically pick up changes **within 60 seconds**
4. No deployment or code changes needed

### Fallback System

If the Google Sheets API is unavailable (network issues, quota exceeded, etc.), the website **automatically falls back** to the built-in static menu data (41 items). Visitors will never see a broken menu.

### Environment Variables Required

```env
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-account@project.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_MENU_SHEET_NAME=Menu
MENU_REVALIDATE_SECONDS=60
```

**Important**: When setting `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` on Vercel, do NOT wrap the value in extra quotes. Paste the key directly without surrounding double-quotes.

---

## 6. SEO & Search Engine Optimization

### 6.1 Structured Data (JSON-LD) — 4 Schema Types

The website includes **4 types of structured data** that tell Google exactly what the business is, what it offers, and how to display it in search results.

| Schema Type | Purpose | Where Used |
|---|---|---|
| **Organization** | Business identity, logo, social links | Root layout (all pages) |
| **LocalBusiness / CafeOrCoffeeShop** | Address, hours, phone, geo coordinates, price range, rating (4.9/5) | Root layout (all pages) |
| **WebSite** | Site name + search action for Google sitelinks | Root layout (all pages) |
| **Course** | SCA Barista Training Program for education search results | Root layout |

### 6.2 Dynamic Sitemap

The website auto-generates a `sitemap.xml` with **10 URLs**, each with:
- Priority levels (homepage = 1.0, menu = 0.9, legal = 0.3)
- Change frequency (daily for menu, weekly for gallery, monthly for legal)
- Last modified dates

### 6.3 Robots.txt Configuration

- Allows all major search engines
- **Allows AI bots** (GPTBot, ChatGPT-User, ClaudeBot, Anthropic-AI, Google-Extended) — future-proofing for AI search
- Blocks scrapers (CCBot)
- Blocks internal paths (`/api/`, `/_next/`, `/private/`, query parameters)

### 6.4 Open Graph & Social Sharing

Every page includes:
- `og:title`, `og:description`, `og:image`
- `og:type` (website)
- Twitter Card metadata (`summary_large_image`)
- Custom OG image (`og-image.jpg` at 1200×630px)
- Creator: `@arabicacoffee`

### 6.5 Meta Tags

- Unique `<title>` and `<meta description>` on every page
- Title template: `%s | Arabica Beans & Academy`
- Keyword meta tags on key pages (menu, homepage)
- Canonical URLs
- Google Bot directives: index, follow, large image preview

---

## 7. Design System & Branding

### 7.1 Brutalist Design Language

The website uses a distinctive **brutalist design aesthetic** — deliberately bold, raw, and minimal:

| Element | Style |
|---|---|
| **Border Radius** | 0px everywhere (sharp corners) |
| **Borders** | 2–4px solid borders |
| **Shadows** | Hard drop shadows (`4px 4px 0 black`, `6px 6px 0 black`) |
| **Typography** | Monospace fonts (JetBrains Mono + Space Mono) |
| **Colors** | Coffee browns + cream whites + accent orange |
| **Layout** | High contrast, bold sections, editorial magazine feel |

### 7.2 Color Palette (OKLCH Color Space)

| Token | Usage | Color |
|---|---|---|
| `coffee-900` | Primary text, headers | Deep brown |
| `coffee-700` | Secondary text | Medium brown |
| `coffee-500` | Borders, accents | Mid brown |
| `cream-50` | Page backgrounds | Off-white |
| `cream-100` | Card backgrounds | Light cream |
| `accent-400/500` | Buttons, highlights, CTAs | Warm accent orange |
| `gold-600` | Premium elements | Gold |

### 7.3 Typography

- **Headings**: JetBrains Mono (monospace, bold) — `--font-heading`
- **Body**: Space Mono (monospace, regular/bold) — `--font-body`
- **Uppercase tracking** for labels, badges, and section headers
- **Responsive sizing** with fluid typography breakpoints

### 7.4 Custom UI Components

All UI elements are built on **Radix UI primitives** (accessible by default) with custom brutalist styling:

- Buttons with hard shadows and hover lift
- Cards with thick borders
- Badges with uppercase tracking
- Accordions for expandable content
- Dialogs for gallery lightbox
- Sheets for mobile navigation
- Tabs for contact form switcher
- Inputs with border-bottom style

---

## 8. Animations & Micro-Interactions

### Animation Inventory

| # | Animation | Technology | Where Used |
|---|---|---|---|
| 1 | **Ken Burns zoom** | CSS keyframes | Hero background image |
| 2 | **Text reveal lines** | Framer Motion | Hero headline |
| 3 | **Parallax scrolling** | RequestAnimationFrame | About, Menu, CTA, Gallery sections |
| 4 | **Scroll-triggered fade-up** | Framer Motion + useInView | All sections sitewide |
| 5 | **Stagger animations** | Framer Motion | Card grids, lists, nav links |
| 6 | **Page transitions** | Framer Motion AnimatePresence | Between all routes |
| 7 | **Infinite marquee** | CSS animation (22s loop) | Brand strip |
| 8 | **Testimonial carousel** | Auto-rotate (6s) + manual | Homepage testimonials |
| 9 | **Hamburger → X** | Framer Motion | Mobile menu button |
| 10 | **Circular reveal** | CSS clip-path + Framer Motion | Mobile nav overlay |
| 11 | **Coffee cup loading** | CSS keyframes | Loading screen |
| 12 | **Steam rising** | SVG path animation | Loading screen |
| 13 | **Coffee fill animation** | CSS keyframes (height 0%→85%) | Loading screen |
| 14 | **Dot pulse** | CSS keyframes | Loading screen "Brewing..." text |
| 15 | **Back-to-top button** | Framer Motion | Appears after 400px scroll |
| 16 | **Hover scale effects** | CSS transform | Cards, images |
| 17 | **Text stroke/glow** | CSS text-stroke | Hero outlined text |
| 18 | **Grain texture overlay** | CSS background | Hero section |
| 19 | **Scroll indicator bounce** | CSS animation | Hero section |
| 20 | **Route loader** | Framer Motion | Navigation between pages |

All animations **respect `prefers-reduced-motion`** — users who have motion sensitivity enabled in their OS will see simplified, non-animated versions.

---

## 9. Performance & Security

### 9.1 Performance Optimizations

| Optimization | Details |
|---|---|
| **Image Optimization** | Next.js `<Image>` with automatic WebP/AVIF, responsive `srcset`, lazy loading |
| **ISR Caching** | Menu data cached for 60 seconds with Incremental Static Regeneration |
| **Static Generation** | All pages pre-rendered at build time |
| **Package Optimization** | Tree-shaking for Lucide icons (`optimizePackageImports`) |
| **Preconnect** | DNS prefetch for Unsplash and Google Fonts CDN |
| **Asset Caching** | 1-year cache headers on all static assets and images (immutable) |
| **Image Formats** | Gallery images served in WebP, JPEG, and optimized JPG formats |
| **CSS Background Patterns** | Lightweight CSS `background-repeat` instead of multiple Image components |

### 9.2 Security Headers

| Header | Value | Purpose |
|---|---|---|
| `X-Content-Type-Options` | `nosniff` | Prevents MIME type sniffing |
| `X-Frame-Options` | `DENY` | Prevents clickjacking |
| `X-XSS-Protection` | `1; mode=block` | XSS attack prevention |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Controls referrer information |

### 9.3 API Security

- Google Sheets uses **service account authentication** (JWT) — no user credentials exposed
- API credentials stored in **environment variables** (never in code)
- Read-only API scope (`spreadsheets.readonly`)
- Graceful fallback on API failure (no error exposure to users)

---

## 10. Accessibility

| Feature | Implementation |
|---|---|
| **Skip Link** | "Skip to main content" link on every page |
| **ARIA Labels** | All interactive elements have descriptive labels |
| **Keyboard Navigation** | Gallery lightbox supports Arrow keys + Escape |
| **Focus Management** | Mobile menu restores focus to hamburger on close |
| **Focus Trap** | Mobile overlay traps focus within the menu |
| **Reduced Motion** | All animations disabled when `prefers-reduced-motion` is set |
| **Semantic HTML** | Proper heading hierarchy, `<nav>`, `<main>`, `<article>`, `<section>` |
| **Alt Text** | All 18 gallery images and all page images have descriptive alternative text |
| **Color Contrast** | High contrast brutalist palette meets WCAG standards |
| **Noscript Fallback** | Message displayed when JavaScript is disabled |

---

## 11. Technical Architecture

### 11.1 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 15.1.0 | React framework with App Router |
| **React** | 19.0.0 | UI library |
| **TypeScript** | 5.7.2 | Type safety |
| **Tailwind CSS** | 4.0.0 | Utility-first styling (OKLCH color space) |
| **Framer Motion** | 11.15.0 | Animations |
| **Radix UI** | Various | Accessible component primitives (8 packages) |
| **Google APIs** | 170.1.0 | Sheets CMS integration |
| **Zod** | 3.24.1 | Form validation |
| **React Hook Form** | 7.54.2 | Form state management |
| **Lucide React** | 0.468.0 | Icon library |
| **Embla Carousel** | 8.5.1 | Carousel/slider (with autoplay plugin) |

### 11.2 Project Structure

```
arabica-coffee-site/
├── public/
│   ├── images/
│   │   ├── gallery/          # 5 WebP interior photos
│   │   ├── IMG_*.JPG.jpeg    # 14 high-res cafe & academy photos
│   │   ├── header.webp       # Hero background
│   │   ├── interior.png      # Interior photo
│   │   ├── logo.png          # Main logo
│   │   └── purplehouse.jpg   # Location photo (optimized from PNG)
│   ├── arabica-logo.svg      # SVG logo
│   └── og-image.jpg          # Social sharing image (1200×630)
├── screenshots/               # Full-page screenshots
├── scripts/
│   └── take-screenshots.js   # Puppeteer automation
├── src/
│   ├── app/                   # 10 pages + layouts
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout + SEO + JSON-LD
│   │   ├── loading.tsx        # Coffee cup animation
│   │   ├── error.tsx          # Error boundary
│   │   ├── not-found.tsx      # Custom 404 page
│   │   ├── robots.ts          # Robots.txt generator
│   │   ├── sitemap.ts         # Sitemap generator (10 URLs)
│   │   ├── about/
│   │   ├── academy/           # Barista Certification Program
│   │   ├── contact/
│   │   │   └── layout.tsx     # Contact-specific layout
│   │   ├── gallery/
│   │   │   └── layout.tsx     # Gallery-specific layout
│   │   ├── locations/
│   │   ├── menu/              # Single menu listing page
│   │   ├── privacy/
│   │   ├── terms/
│   │   └── testimonials/
│   ├── components/            # ~30 components
│   │   ├── effects/           # Parallax components
│   │   ├── layout/            # Header, Footer, Mobile Nav, Hamburger
│   │   ├── sections/          # Homepage & shared sections (9)
│   │   ├── seo/               # JSON-LD schemas
│   │   ├── shared/            # Reusable animated components (8)
│   │   └── ui/                # Base UI components (Shadcn/Radix)
│   ├── lib/
│   │   ├── constants.ts       # Site config, nav, categories, animations
│   │   ├── data.ts            # Static fallback data (41 menu, 18 gallery, etc.)
│   │   ├── google-sheets.ts   # Google Sheets API service
│   │   ├── menu-service.ts    # Cached menu data layer
│   │   └── utils.ts           # Utility functions (cn helper)
│   ├── styles/
│   │   └── globals.css        # Design system + 10 animation keyframes
│   └── types/
│       └── index.ts           # TypeScript interfaces
├── .env.example               # Environment variable template
├── next.config.ts             # Next.js config + security headers + caching
├── package.json               # 22 dependencies + 8 dev dependencies
├── postcss.config.mjs         # PostCSS config
└── tsconfig.json              # TypeScript config (strict mode)
```

### 11.3 Data Flow

```
┌──────────────────────────────────────────────────────┐
│                   GOOGLE SHEETS                       │
│              (Client edits menu here)                 │
└──────────────────┬───────────────────────────────────┘
                   │ Google Sheets API v4
                   │ (JWT Service Account Auth)
                   ▼
┌──────────────────────────────────────────────────────┐
│              MENU SERVICE LAYER                       │
│  ┌─────────────────────────────────────────────┐     │
│  │  google-sheets.ts                            │     │
│  │  • Fetches rows A:H                         │     │
│  │  • Validates & parses data                  │     │
│  │  • Normalizes categories                    │     │
│  └──────────────────┬──────────────────────────┘     │
│                     ▼                                 │
│  ┌─────────────────────────────────────────────┐     │
│  │  menu-service.ts                             │     │
│  │  • unstable_cache (60s TTL)                 │     │
│  │  • getMenuItems()                           │     │
│  │  • getMenuItemById()                        │     │
│  │  • getMenuItemsByCategory()                 │     │
│  │  • getTrendingMenuItems()                   │     │
│  │  • getFeaturedMenuItems()                   │     │
│  └──────────────────┬──────────────────────────┘     │
│                     │                                 │
│         ┌───────────┴───────────┐                    │
│         ▼                       ▼                     │
│   API succeeds            API fails                   │
│   (live data)         (fallback to data.ts)           │
└──────────────────────────────────────────────────────┘
                   │
                   ▼
┌──────────────────────────────────────────────────────┐
│                  NEXT.JS PAGES                        │
│  • /menu           → All items by category           │
│  • Homepage        → Featured items preview          │
└──────────────────────────────────────────────────────┘
```

---

## 12. Component Library

### Layout Components (4)

| Component | File | Description |
|---|---|---|
| Header | `components/layout/header.tsx` | Responsive header with desktop FloatingNav + mobile hamburger |
| Footer | `components/layout/footer.tsx` | 3-column footer with nav, contact, social links, hours |
| Mobile Nav Overlay | `components/layout/mobile-nav-overlay.tsx` | Full-screen overlay with circular reveal animation + focus trap |
| Hamburger Button | `components/layout/hamburger-button.tsx` | Animated 3-bar → X toggle with color transitions |

### Section Components (9)

| Component | File | Description |
|---|---|---|
| Hero Section | `components/sections/hero-section.tsx` | Full-screen hero with Ken Burns, text reveals, grain overlay |
| Featured Section | `components/sections/featured-section.tsx` | Split layout with features + floating rating card |
| Menu Preview | `components/sections/menu-preview-section.tsx` | Parallax header + 3 featured items |
| Testimonials | `components/sections/testimonials-section.tsx` | Auto-rotating carousel (6s) with manual navigation |
| Newsletter | `components/sections/newsletter-section.tsx` | Email signup with success state |
| CTA Section | `components/sections/cta-section.tsx` | Visit us with hours, location, Purple House image |
| Gallery Preview | `components/sections/gallery-preview-section.tsx` | 2×2 parallax image grid |
| Academy Section | `components/sections/academy-section.tsx` | Barista training with stats + certification badge |
| Brand Strip | `components/sections/brand-strip.tsx` | Infinite marquee (22s CSS animation) |

### Shared Components (8)

| Component | File | Description |
|---|---|---|
| Animated Section | `components/shared/animated-section.tsx` | Scroll-triggered fade-in (up/down/left/right) |
| Stagger Container/Item | `components/shared/animated-section.tsx` | Sequential child animations with configurable delay |
| Page Transition | `components/shared/page-transition.tsx` | Route change animation (fade + slide) |
| Back to Top | `components/shared/back-to-top.tsx` | Scroll button (appears after 400px) |
| Route Loader | `components/shared/route-loader.tsx` | Navigation loading indicator |
| CTA Button | `components/shared/cta-button.tsx` | Reusable call-to-action button with animated wrapper |
| Heading / SectionHeader | `components/shared/heading.tsx` | Reusable heading with section header variant |
| Section Container | `components/shared/section-container.tsx` | Page section wrapper with max-width |
| Kathmandu Date | `components/shared/kathmandu-date.tsx` | Date display in Kathmandu timezone |

### SEO Components (1)

| Component | File | Description |
|---|---|---|
| JSON-LD Schemas | `components/seo/json-ld.tsx` | 4 schema generators (Organization, LocalBusiness, WebSite, Course) |

### Effects Components (1)

| Component | File | Description |
|---|---|---|
| Parallax / ParallaxImage | `components/effects/parallax.tsx` | Scroll-based parallax with requestAnimationFrame, reduced motion support |

### UI Components (Shadcn/Radix-based)

| Component | Description |
|---|---|
| Accordion | Expandable content sections |
| Badge | Category/status labels |
| Button | Primary, secondary, ghost, outline variants |
| Card | Content containers with brutalist styling |
| Dialog | Modal overlays (gallery lightbox) |
| Dropdown Menu | Dropdown menu for selections |
| Floating Navbar | Desktop-only fixed nav with icon-based navigation + active indicator |
| Input | Form text inputs |
| Label | Form field labels |
| Separator | Visual dividers |
| Sheet | Slide-out panels |
| Tabs | Content tab switcher (contact forms) |
| Textarea | Multi-line form inputs |

---

## 13. Data & Content Management

### 13.1 Content Inventory

| Content Type | Count | Source | Editable By Client |
|---|---|---|---|
| Menu Items | 41 | Google Sheets (primary) / Static fallback | Yes — via Google Sheets |
| Menu Categories | 11 | Code constants | No — requires developer |
| Gallery Images | 18 | Static data (12 cafe, 4 academy, 2 exterior) | No — requires developer |
| Testimonials | — | Page placeholder (coming soon) | No — requires developer |

### 13.2 TypeScript Type Definitions

| Type | Fields |
|---|---|
| `MenuItem` | id, name, description, price, category, image?, isNew?, isPopular? |
| `MenuCategory` | Union type of 11 category slugs |
| `GalleryImage` | id, src, alt, width, height, category? (cafe/academy/exterior) |

---

## 14. Deployment & Environment Setup

### 14.1 Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn package manager
- Google Cloud service account with Sheets API enabled

### 14.2 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Copy environment template
cp .env.example .env.local

# 3. Fill in Google Sheets credentials in .env.local

# 4. Start development server
npm run dev
# → Opens at http://localhost:3000
```

### 14.3 Production Build

```bash
# Build optimized production version
npm run build

# Start production server
npm start
```

### 14.4 Environment Variables

| Variable | Required | Default | Description |
|---|---|---|---|
| `GOOGLE_SHEETS_SPREADSHEET_ID` | Yes | — | Google Sheet ID from URL |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Yes | — | Service account email |
| `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` | Yes | — | Service account private key (no extra quotes!) |
| `GOOGLE_SHEETS_MENU_SHEET_NAME` | No | `Menu` | Sheet tab name |
| `MENU_REVALIDATE_SECONDS` | No | `60` | Cache refresh interval |

### 14.5 Vercel Deployment (Recommended)

- **Zero-config** — Vercel auto-detects Next.js and deploys
- **ISR support** — Menu cache revalidation works out of the box
- **Environment variables** — Set all 5 variables in Vercel dashboard (Settings → Environment Variables)
- **Important**: Do NOT wrap `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` in extra double-quotes on Vercel
- **Current deployment**: `arabicacoffeeandacademy.vercel.app`

### 14.6 Alternative Hosting

- **Netlify** — With Next.js adapter
- **Self-hosted** — Node.js server with `npm start`

---

## 15. Maintenance Guide

### 15.1 Updating Menu Items

1. Open the Google Sheet
2. Edit rows (add/remove/modify items)
3. Changes go live within 60 seconds — no deployment needed

### 15.2 Updating Other Content

For content that is **not** in Google Sheets (gallery images):

1. Edit the file `src/lib/data.ts`
2. Follow the existing data structure
3. Run `npm run build` to verify no errors
4. Deploy the updated code

### 15.3 Adding Gallery Images

Add to the `galleryImages` array in `src/lib/data.ts`:

```typescript
{
  id: "19",
  src: "/images/your-new-image.jpg",
  alt: "Description of the image",
  width: 4032,
  height: 3024,
  category: "cafe" // or "academy" or "exterior"
}
```

Place the image file in `public/images/` and ensure it's optimized (JPEG or WebP format recommended, under 1MB).

### 15.4 Taking Fresh Screenshots

```bash
# Ensure dev server is running on port 3000
npm run dev

# In another terminal, run the screenshot script
node scripts/take-screenshots.js
# → Saves screenshots to screenshots/ folder
```

---

## 16. Future Scope & Expansion Opportunities

The following features can be added to the website as future enhancements. These represent natural next steps that build on the existing architecture.

### Phase 2 — Quick Wins (₹10,000–15,000)

| Feature | Description | Effort |
|---|---|---|
| **Blog System** | Blog listing + article pages with author bios, categories, and read-time indicators | 2–3 days |
| **Events Page** | Upcoming & past events with RSVP, private event hosting CTA | 2–3 days |
| **FAQ Page** | Accordion-style Q&A with FAQ structured data for Google rich results | 1–2 days |
| **Careers Page** | Job listings with benefits cards, expandable requirements, and pre-filled mailto links | 1–2 days |
| **Online Ordering** | WhatsApp or custom order form integration | 2–3 days |
| **Google Reviews Widget** | Pull live Google reviews via Places API | 1–2 days |
| **Instagram Feed** | Live Instagram embed on gallery page | 1 day |
| **Multi-language** | Nepali + English with Next.js i18n | 2–3 days |
| **Push Notifications** | New event/menu item alerts via web push | 2 days |
| **Testimonials Integration** | Populate testimonials page with customer reviews | 1–2 days |

### Phase 3 — Major Features (₹20,000–40,000)

| Feature | Description | Effort |
|---|---|---|
| **Full E-commerce** | Online ordering with payment (Khalti/eSewa) | 5–7 days |
| **Academy Enrollment System** | Online registration with payment | 3–5 days |
| **Loyalty Program** | Digital stamp card / points system | 3–4 days |
| **Admin Dashboard** | CMS panel for all content (not just menu) | 5–7 days |
| **Blog CMS** | Google Sheets or Notion-powered blog | 2–3 days |
| **Event RSVP System** | Registration with capacity management | 2–3 days |

### Phase 4 — Premium Features (₹30,000–60,000)

| Feature | Description | Effort |
|---|---|---|
| **Mobile App (PWA)** | Progressive Web App with offline support | 5–7 days |
| **Table Reservations** | Calendar-based booking system | 3–5 days |
| **Gift Card System** | Digital gift cards with QR codes | 3–4 days |
| **Analytics Dashboard** | Custom analytics for the business owner | 4–5 days |
| **Multi-location Support** | Multiple branches with location switching | 3–5 days |

---

## 17. Project Statistics Summary

| Metric | Value |
|---|---|
| **Total Lines of Code** | 8,500+ |
| **Total TypeScript/TSX Files** | 70 |
| **Total CSS Lines** | 433 |
| **Total Pages** | **10** |
| **Total URLs** | **10** |
| **Custom Components** | ~30 |
| **npm Packages** | 213 |
| **Public Image Assets** | 26 files |
| **SEO Schema Types** | 4 |
| **Animation Types** | 20 |
| **Menu Categories** | 11 |
| **Menu Items** | 41 |
| **Gallery Images** | 18 |
| **Content Entries** | 60+ (menu, gallery) |
| **Accessibility Features** | 10 distinct implementations |
| **Security Headers** | 4 |
| **API Integrations** | Google Sheets, Google Maps |

---

## 18. Investment Breakdown

| Deliverable | Estimated Market Value |
|---|---|
| 10 pages with unique layouts & content | ₹15,000 |
| Google Sheets CMS integration with caching & fallback | ₹8,000 |
| 4 SEO schema types + sitemap + robots.txt + Open Graph | ₹5,000 |
| 20 animation types (parallax, transitions, reveals) | ₹7,000 |
| Custom brutalist design system (not a template) | ₹8,000 |
| Production tech stack (Next.js 15, React 19, TypeScript) | ₹5,000 |
| Accessibility, security headers, performance optimization | ₹2,000 |
| Vercel deployment, domain setup & ongoing support | ₹3,000 |
| Content writing & copywriting for all pages | ₹4,000 |
| Responsive design — tested across mobile, tablet, desktop | ₹3,000 |
| **Total Project Value** | **₹60,000** |

**Cost per line of code**: ₹7.05
**Cost per page**: ₹6,000
**Cost per unique URL**: ₹6,000

For comparison, agencies in Kathmandu charge ₹80,000–₹2,00,000 for similar scope. Freelancers on international platforms charge $800–$2,000 USD (₹67,000–₹1,68,000) for this level of work.

---

## Acceptance

By receiving this handover document, the client acknowledges delivery of all items listed above. The developer remains available for maintenance, updates, and future feature development as outlined in Section 16.

| | Details |
|---|---|
| **Client** | Arabica Beans & Academy |
| **Developer** | [Your Name] |
| **Date** | March 2026 |
| **Project Value** | ₹60,000 |

---

*This document was generated alongside the project codebase. All screenshots are available in the `screenshots/` directory. For questions or support, contact the developer.*
