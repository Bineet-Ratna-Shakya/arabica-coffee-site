"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

/**
 * Wraps children in a parallax-scrolling container.
 * Uses rAF-driven scroll listener instead of motion hooks for reliability.
 */
export function Parallax({
  children,
  className,
  speed = 0.3,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced || !ref.current || !innerRef.current) return;

    const el = ref.current;
    const inner = innerRef.current;
    let rafId: number;

    function onScroll() {
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const viewH = window.innerHeight;
        const progress = (viewH - rect.top) / (viewH + rect.height);
        const clamped = Math.max(0, Math.min(1, progress));
        const distance = speed * 150;
        const y = (clamped - 0.5) * 2 * distance;
        inner.style.transform = `translateY(${y}px)`;
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed, prefersReduced]);

  if (prefersReduced) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <div ref={innerRef} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}

interface ParallaxImageProps {
  className?: string;
  speed?: number;
  children: ReactNode;
}

/**
 * Parallax container for images. Adds extra scale so the image
 * doesn't reveal empty space during parallax movement.
 */
export function ParallaxImage({
  className,
  speed = 0.2,
  children,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const scale = 1 + speed * 0.3;

  useEffect(() => {
    if (prefersReduced || !ref.current || !innerRef.current) return;

    const el = ref.current;
    const inner = innerRef.current;
    let rafId: number;

    function onScroll() {
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const viewH = window.innerHeight;
        const progress = (viewH - rect.top) / (viewH + rect.height);
        const clamped = Math.max(0, Math.min(1, progress));
        const distance = speed * 100;
        const y = (clamped - 0.5) * 2 * distance;
        inner.style.transform = `translateY(${y}px) scale(${scale})`;
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed, scale, prefersReduced]);

  if (prefersReduced) {
    return <div className={cn("relative", className)}>{children}</div>;
  }

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <div
        ref={innerRef}
        className="absolute inset-0"
        style={{ willChange: "transform" }}
      >
        {children}
      </div>
    </div>
  );
}
