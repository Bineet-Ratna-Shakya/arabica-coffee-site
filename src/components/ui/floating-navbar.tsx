"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import NextImage from "next/image";
import { usePathname } from "next/navigation";
import { Home, User, GraduationCap, Image, MessageSquareQuote, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const navItems = [
  { name: "Home", link: "/", icon: Home },
  { name: "About", link: "/about", icon: User },
  { name: "Academy", link: "/academy", icon: GraduationCap },
  { name: "Gallery", link: "/gallery", icon: Image },
  { name: "Testimonials", link: "/testimonials", icon: MessageSquareQuote },
  { name: "Location", link: "/locations", icon: MapPin },
  { name: "Contact", link: "/contact", icon: Mail },
];

export const FloatingNav = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-40 flex items-center justify-between bg-cream-50/90 backdrop-blur-md px-6 lg:px-10 py-3 rounded-full border-2 border-coffee-900 shadow-lg w-[calc(100%-3rem)] max-w-5xl",
        className
      )}
    >
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <NextImage
          src="/images/logo.png"
          alt="Arabica Specialty Coffee House"
          width={160}
          height={52}
          className="h-11 w-auto"
          priority
        />
      </Link>

      {/* Navigation Icons - Center */}
      <nav className="hidden md:flex items-center space-x-6">
        {navItems.map((navItem) => {
          const isActive =
            navItem.link === "/"
              ? pathname === "/"
              : pathname.startsWith(navItem.link);
          const Icon = navItem.icon;
          return (
            <Link
              key={navItem.link}
              href={navItem.link}
              className="group relative flex items-center justify-center p-2"
              aria-label={navItem.name}
            >
              <Icon
                className={cn(
                  "h-5 w-5 transition-all duration-300 ease-out group-hover:scale-125 group-hover:-translate-y-0.5",
                  isActive
                    ? "text-coffee-900 scale-110"
                    : "text-coffee-500 group-hover:text-coffee-900"
                )}
                strokeWidth={isActive ? 2.5 : 1.75}
              />
              {/* Active dot */}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-coffee-900" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Right - Buttons */}
      <div className="flex items-center gap-3">
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-coffee-300 text-coffee-500 hover:border-coffee-900 hover:text-coffee-900 transition-all duration-200"
          aria-label="Call us"
        >
          <Phone className="w-4 h-4" />
        </a>
        <Link
          href="/menu"
          className="bg-coffee-900 text-cream-50 text-sm font-medium px-5 py-2 rounded-full hover:bg-coffee-800 transition-all duration-200 hover:scale-[1.02]"
        >
          Menu
        </Link>
      </div>
    </div>
  );
};
