"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MobileNavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const clipOrigin = "calc(100% - 36px) 32px";

const navContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: { duration: 0.2 },
  },
};

const bottomVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

export function MobileNavOverlay({ isOpen, onClose }: MobileNavOverlayProps) {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  // Escape key to close
  useEffect(() => {
    if (!isOpen) return;
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose();
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, handleClose]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
    return () => document.body.classList.remove("nav-open");
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;
    const overlay = overlayRef.current;
    if (!overlay) return;

    const focusableSelectors =
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';

    const timer = setTimeout(() => {
      const focusableElements =
        overlay.querySelectorAll<HTMLElement>(focusableSelectors);
      focusableElements[0]?.focus();
    }, 400);

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      const focusableElements =
        overlay?.querySelectorAll<HTMLElement>(focusableSelectors);
      if (!focusableElements || focusableElements.length === 0) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const overlayAnimation = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15 },
      }
    : {
        initial: { clipPath: `circle(0px at ${clipOrigin})` },
        animate: { clipPath: `circle(200vmax at ${clipOrigin})` },
        exit: { clipPath: `circle(0px at ${clipOrigin})` },
        transition: {
          duration: 0.6,
          ease: [0.76, 0, 0.24, 1],
        },
      };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-nav-overlay"
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          id="mobile-navigation"
          className="fixed inset-0 z-50 flex flex-col bg-coffee-900/95 text-cream-50 overflow-y-auto backdrop-blur-sm"
          {...overlayAnimation}
        >
          {/* Top bar area with close button */}
          <div className="flex items-center justify-between px-6 h-16 shrink-0 border-b border-cream-50/10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-cream-50/40">
              Menu
            </span>
            <button
              onClick={handleClose}
              className="flex items-center justify-center h-10 w-10 border border-cream-50/30 text-cream-50/70 hover:bg-cream-50 hover:text-coffee-900 transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <motion.nav
            className="flex flex-col px-6 pt-4"
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map((link, index) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <motion.div key={link.href} variants={navItemVariants}>
                  <Link
                    href={link.href}
                    onClick={handleClose}
                    className={cn(
                      "group flex items-center justify-between py-4 text-xl font-bold uppercase tracking-[0.2em] border-b border-cream-50/10 transition-all",
                      isActive
                        ? "bg-cream-50/10 text-cream-50 px-4 -mx-4 border-cream-50/20"
                        : "hover:pl-2 hover:text-cream-50/80"
                    )}
                  >
                    <span>{link.label}</span>
                    <span className={cn(
                      "text-[10px] font-mono tracking-normal text-cream-50/20",
                      isActive && "text-cream-50/40"
                    )}>
                      0{index + 1}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-3 px-6 mt-8"
            variants={bottomVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <a
              href={siteConfig.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center py-3 text-sm font-bold uppercase tracking-[0.18em] border border-cream-50/30 text-cream-50/80 hover:bg-cream-50 hover:text-coffee-900 hover:border-cream-50 transition-all"
            >
              Visit Us
            </a>
            <Link
              href="/menu"
              onClick={handleClose}
              className="flex-1 flex items-center justify-center py-3 text-sm font-bold uppercase tracking-[0.18em] bg-cream-50/90 text-coffee-900 border border-cream-50/90 hover:bg-cream-50 transition-all"
            >
              View Menu
            </Link>
          </motion.div>

          {/* Bottom section with social + contact */}
          <motion.div
            className="mt-auto px-6 pb-8 pt-6 border-t border-cream-50/10"
            variants={bottomVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-cream-50/30">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  <a
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm uppercase tracking-wide text-cream-50/60 hover:text-cream-50 transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href={siteConfig.links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm uppercase tracking-wide text-cream-50/60 hover:text-cream-50 transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-xs font-mono text-cream-50/30 hover:text-cream-50/60 transition-colors"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
