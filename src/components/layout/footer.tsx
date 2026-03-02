import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee-900 border-t-4 border-coffee-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand Column */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Arabica Specialty Coffee House"
                width={180}
                height={60}
                className="h-12 w-auto invert mix-blend-screen"
              />
            </Link>
            <p className="text-cream-50/60 max-w-md">
              A pared-back space for slow coffee, warm light, and conversations that linger. Bagbazar, Kathmandu.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border-2 border-cream-50/30 text-cream-50/70 hover:bg-cream-50 hover:text-coffee-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border-2 border-cream-50/30 text-cream-50/70 hover:bg-cream-50 hover:text-coffee-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border-2 border-cream-50/30 text-cream-50/70 hover:bg-cream-50 hover:text-coffee-900 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.22em] text-cream-50">
              Navigate
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm uppercase tracking-wide text-cream-50/60 hover:text-cream-50 hover:underline transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm uppercase tracking-wide text-cream-50/60 hover:text-cream-50 hover:underline transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.22em] text-cream-50">
              Visit
            </h3>
            <div className="space-y-3 text-sm text-cream-50/60">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-cream-50/80" />
                <span>{siteConfig.contact.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-cream-50/80" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-cream-50 hover:underline transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-cream-50/80" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-cream-50 hover:underline transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="pt-2 text-sm">
                <p className="font-bold uppercase text-cream-50/80">Hours</p>
                <p>Mon-Fri: {siteConfig.hours.weekdays}</p>
                <p>Sat: {siteConfig.hours.saturday}</p>
                <p>Sun: {siteConfig.hours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-cream-50/20 pt-6 text-sm text-cream-50/40 sm:flex-row sm:items-center sm:justify-between">
          <p className="uppercase tracking-wide">&copy; {currentYear} Arabica Coffee. Crafted with care.</p>
          <div className="flex gap-5 text-sm uppercase tracking-wide">
            <Link href="/privacy" className="hover:text-cream-50 hover:underline transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-cream-50 hover:underline transition-colors">
              Terms
            </Link>
            <span className="text-cream-50/25">·</span>
            <a
              href="https://bineetshakya.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="normal-case tracking-normal hover:text-cream-50 transition-colors"
            >
              Made by{" "}
              <span className="font-heading text-lg font-bold text-red-400">
                Bineet
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
