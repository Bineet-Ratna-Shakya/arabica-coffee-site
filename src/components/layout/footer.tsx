import Link from "next/link";
import {
  Coffee,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee-900 text-cream-100">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Coffee className="h-8 w-8 text-gold-400" />
              <span className="font-heading text-2xl font-bold text-cream-50">
                Arabica
              </span>
            </Link>
            <p className="text-cream-300 text-sm leading-relaxed mb-6">
              Crafting exceptional coffee experiences since 2010. Every cup
              tells a story of passion, quality, and community.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-coffee-800 p-2 text-cream-200 hover:bg-gold-500 hover:text-coffee-900 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-coffee-800 p-2 text-cream-200 hover:bg-gold-500 hover:text-coffee-900 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-coffee-800 p-2 text-cream-200 hover:bg-gold-500 hover:text-coffee-900 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-cream-50 mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-300 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-cream-50 mb-6">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-300 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-cream-50 mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-sm text-cream-300">
                  {siteConfig.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-sm text-cream-300 hover:text-gold-400 transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm text-cream-300 hover:text-gold-400 transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>

            {/* Hours */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-cream-50 mb-2">Hours</h4>
              <ul className="text-sm text-cream-300 space-y-1">
                <li>Mon-Fri: {siteConfig.hours.weekdays}</li>
                <li>Sat: {siteConfig.hours.saturday}</li>
                <li>Sun: {siteConfig.hours.sunday}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-coffee-800" />
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-cream-400">
            © {currentYear} Arabica Coffee. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-cream-400 hover:text-gold-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-cream-400 hover:text-gold-400 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
