"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920"
          alt="Coffee beans and cup"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-950/70 via-coffee-950/50 to-coffee-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-gold-500/20 px-4 py-2 mb-6"
          >
            <Coffee className="h-4 w-4 text-gold-400" />
            <span className="text-sm font-medium text-gold-300">
              Est. 2010 • Specialty Coffee
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream-50 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Where Every Cup
            <br />
            <span className="text-gold-400">Tells a Story</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mx-auto max-w-2xl text-lg sm:text-xl text-cream-200 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Experience the finest specialty coffee, hand-roasted with love.
            From bean to cup, we craft moments worth savoring.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Button size="xl" variant="gold" asChild>
              <Link href="/menu">Explore Our Menu</Link>
            </Button>
            <Button size="xl" variant="outline" className="border-cream-200 text-cream-100 hover:bg-cream-50/10" asChild>
              <Link href="/contact">Visit Us Today</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-cream-300"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
