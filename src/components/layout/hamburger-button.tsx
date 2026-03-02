"use client";

import { forwardRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface HamburgerButtonProps {
  isOpen: boolean;
  toggle: () => void;
  className?: string;
}

export const HamburgerButton = forwardRef<HTMLButtonElement, HamburgerButtonProps>(
  ({ isOpen, toggle, className }, ref) => {
    const barTransition = { duration: 0.3, ease: [0.76, 0, 0.24, 1] as const };

    return (
      <button
        ref={ref}
        onClick={toggle}
        className={cn(
          "relative flex h-11 w-11 flex-col items-center justify-center gap-[6px] border-2 border-coffee-900 bg-cream-50 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee-900 focus-visible:ring-offset-2",
          isOpen && "border-cream-50/30 bg-coffee-900",
          className
        )}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        <motion.span
          animate={
            isOpen
              ? { rotate: 45, y: 8, backgroundColor: "#FFFAED" }
              : { rotate: 0, y: 0, backgroundColor: "#1C1210" }
          }
          transition={barTransition}
          className="block h-[2px] w-5 origin-center"
          style={{ backgroundColor: "#1C1210" }}
        />
        <motion.span
          animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.2 }}
          className="block h-[2px] w-5 origin-center"
          style={{ backgroundColor: isOpen ? "#FFFAED" : "#1C1210" }}
        />
        <motion.span
          animate={
            isOpen
              ? { rotate: -45, y: -8, backgroundColor: "#FFFAED" }
              : { rotate: 0, y: 0, backgroundColor: "#1C1210" }
          }
          transition={barTransition}
          className="block h-[2px] w-5 origin-center"
          style={{ backgroundColor: "#1C1210" }}
        />
      </button>
    );
  }
);

HamburgerButton.displayName = "HamburgerButton";
