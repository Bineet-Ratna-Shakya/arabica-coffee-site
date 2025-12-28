"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, Coffee } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass-effect border-b border-cream-200 shadow-soft"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Coffee className="h-8 w-8 text-coffee-700" />
              </motion.div>
              <span className="font-heading text-2xl font-bold text-coffee-800 group-hover:text-coffee-600 transition-colors">
                Arabica
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-coffee-700 hover:text-coffee-900 transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex lg:items-center lg:gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">Visit Us</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/menu">Order Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
