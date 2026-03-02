"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

function RevealLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%", rotate: 2 }}
        animate={{ y: 0, rotate: 0 }}
        transition={{ duration: 1.2, delay, ease }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-coffee-950">
      {/* Background image with slow Ken Burns zoom (CSS animation to avoid hydration issues) */}
      <div className="absolute inset-0 hero-ken-burns">
        <Image
          src="/images/IMG_2035.JPG.jpeg"
          alt="Arabica Specialty Coffee House"
          fill
          className="object-cover hero-bg"
          priority
          sizes="100vw"
        />
      </div>

      {/* Color overlay */}
      <div className="absolute inset-0 bg-coffee-950/75" />

      {/* Cinematic vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)]" />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIi8+PC9zdmc+')]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-8 lg:px-16">
        {/* ── Centered logo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
        >
          <Image
            src="/images/logo.png"
            alt="Arabica"
            width={280}
            height={93}
            className="h-28 sm:h-40 md:h-52 w-auto hero-bg invert brightness-0 opacity-90"
            priority
          />
        </motion.div>

        {/* ── Divider line ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.6, ease }}
          className="w-24 sm:w-40 h-px bg-cream-50/15 origin-center my-10 sm:my-14"
        />

        {/* ── Headline below logo ── */}
        <h1 className="font-heading text-[clamp(1.6rem,5vw,3.5rem)] leading-none tracking-[0.05em] text-center pl-[0.05em]">
          <RevealLine delay={0.8}>
            <span className="hero-text-outline">Every Cup,</span>{" "}
            <span className="text-accent-500 hero-accent-glow">Perfected</span>
          </RevealLine>
        </h1>

        {/* ── Tagline ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease }}
          className="text-cream-50 text-[10px] sm:text-xs mt-5 sm:mt-6 uppercase tracking-[0.15em] sm:tracking-[0.3em] font-heading text-center"
        >
          Specialty coffee house &middot; SCA-certified academy
        </motion.p>

        {/* ── CTA buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9, ease }}
          className="flex items-center gap-4 mt-12 sm:mt-16"
        >
          <Link
            href="/menu"
            className="w-32 sm:w-36 flex items-center justify-center py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-cream-50 hover:bg-cream-50 hover:text-coffee-900 transition-all"
            style={{ border: "1px solid #ffffff" }}
          >
            Menu
          </Link>
          <Link
            href="/locations"
            className="w-32 sm:w-36 flex items-center justify-center py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-cream-50 hover:bg-cream-50 hover:text-coffee-900 transition-all"
            style={{ border: "1px solid #ffffff" }}
          >
            Location
          </Link>
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="absolute bottom-8 sm:bottom-12"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-cream-50/20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
