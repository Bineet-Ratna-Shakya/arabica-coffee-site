"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends ButtonProps {
  href?: string;
  showArrow?: boolean;
  external?: boolean;
}

export function CTAButton({
  children,
  href,
  showArrow = false,
  external = false,
  className,
  ...props
}: CTAButtonProps) {
  const content = (
    <>
      {children}
      {showArrow && (
        <motion.span
          className="inline-flex"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <ArrowRight className="ml-1 h-4 w-4" />
        </motion.span>
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <Button asChild className={cn(className)} {...props}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {content}
          </a>
        </Button>
      );
    }

    return (
      <Button asChild className={cn(className)} {...props}>
        <Link href={href}>{content}</Link>
      </Button>
    );
  }

  return (
    <Button className={cn(className)} {...props}>
      {content}
    </Button>
  );
}

// Animated wrapper for hover effects
interface AnimatedButtonWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedButtonWrapper({
  children,
  className,
}: AnimatedButtonWrapperProps) {
  return (
    <motion.div
      className={cn("inline-block", className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
}
