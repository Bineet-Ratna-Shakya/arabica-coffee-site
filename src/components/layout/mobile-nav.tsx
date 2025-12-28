"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Coffee } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[300px] sm:w-[350px]">
        <SheetHeader className="text-left">
          <SheetTitle className="flex items-center gap-2">
            <Coffee className="h-6 w-6 text-coffee-700" />
            <span className="font-heading text-xl">Arabica</span>
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-8 flex flex-col gap-1">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className="flex items-center rounded-lg px-4 py-3 text-base font-medium text-coffee-700 hover:bg-cream-200 hover:text-coffee-900 transition-colors"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-3 px-4">
          <Button variant="outline" asChild onClick={onClose}>
            <Link href="/contact">Visit Us</Link>
          </Button>
          <Button asChild onClick={onClose}>
            <Link href="/menu">Order Now</Link>
          </Button>
        </div>

        {/* Social Links */}
        <div className="absolute bottom-8 left-6 right-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-coffee-400">
            Follow Us
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coffee-500 hover:text-coffee-700 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coffee-500 hover:text-coffee-700 transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
