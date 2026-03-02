"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { HamburgerButton } from "./hamburger-button";
import { MobileNavOverlay } from "./mobile-nav-overlay";
import { FloatingNav } from "@/components/ui/floating-navbar";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Restore focus to hamburger on close
  useEffect(() => {
    if (!isOpen) {
      hamburgerRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Floating Nav - desktop only */}
      <div className="hidden lg:block">
        <FloatingNav />
      </div>

      {/* Mobile Top Bar - logo + hamburger only */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 h-16 bg-cream-50/80 backdrop-blur-md border-b border-coffee-900/20">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Arabica Specialty Coffee House"
            width={120}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <HamburgerButton
          ref={hamburgerRef}
          isOpen={isOpen}
          toggle={toggle}
          className="z-[60] relative"
        />
      </div>

      {/* Full-screen Mobile Navigation Overlay */}
      <MobileNavOverlay isOpen={isOpen} onClose={close} />
    </>
  );
}
