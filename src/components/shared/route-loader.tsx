"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

const MINIMUM_LOADING_MS = 2000;

export function RouteLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const fadeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const loadStartRef = useRef<number>(0);
  const prevPathnameRef = useRef(pathname);

  const cleanup = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
  }, []);

  const showLoader = useCallback(() => {
    cleanup();
    loadStartRef.current = Date.now();
    setIsVisible(true);
    setIsLoading(true);
  }, [cleanup]);

  const hideLoader = useCallback(() => {
    const elapsed = Date.now() - loadStartRef.current;
    const remaining = Math.max(0, MINIMUM_LOADING_MS - elapsed);

    timerRef.current = setTimeout(() => {
      setIsLoading(false);
      // Allow fade-out animation to complete
      fadeTimerRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }, remaining);
  }, []);

  // Intercept all internal link clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Skip external links, hash links, mailto, tel
      if (
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        anchor.target === "_blank"
      ) {
        return;
      }

      // Skip if modifier keys are pressed (open in new tab, etc.)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      // Skip if navigating to the same page
      if (href === pathname || href === pathname + "/") return;

      showLoader();
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname, showLoader]);

  // When pathname changes, the new page has loaded — start the hide countdown
  useEffect(() => {
    if (pathname !== prevPathnameRef.current) {
      prevPathnameRef.current = pathname;
      if (isLoading) {
        hideLoader();
      }
    }
  }, [pathname, isLoading, hideLoader]);

  // Cleanup on unmount
  useEffect(() => cleanup, [cleanup]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-cream-50 flex items-center justify-center transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-busy="true"
      aria-live="polite"
    >
      <div className="flex flex-col items-center">
        {/* Brand wordmark */}
        <h2 className="font-heading text-2xl sm:text-3xl tracking-[0.3em] text-coffee-900 mb-10 loading-fade-in">
          ARABICA
        </h2>

        {/* Coffee cup illustration */}
        <div className="relative w-20 h-24 mb-8">
          {/* Steam lines */}
          <div className="absolute -top-6 left-3 flex gap-2">
            <div className="loading-steam loading-steam-1">
              <svg width="8" height="20" viewBox="0 0 8 20" fill="none">
                <path
                  d="M4 20C4 20 0 14 4 10C8 6 4 0 4 0"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-coffee-300"
                />
              </svg>
            </div>
            <div className="loading-steam loading-steam-2">
              <svg width="8" height="20" viewBox="0 0 8 20" fill="none">
                <path
                  d="M4 20C4 20 8 14 4 10C0 6 4 0 4 0"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-coffee-300"
                />
              </svg>
            </div>
            <div className="loading-steam loading-steam-3">
              <svg width="8" height="20" viewBox="0 0 8 20" fill="none">
                <path
                  d="M4 20C4 20 0 14 4 10C8 6 4 0 4 0"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-coffee-300"
                />
              </svg>
            </div>
          </div>

          {/* Cup body */}
          <div className="absolute bottom-0 left-0 w-16 h-[72px] border-4 border-coffee-900 rounded-b-xl overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 loading-coffee-fill">
              <div className="loading-coffee-wave" />
              <div className="absolute inset-0 top-2 bg-coffee-700" />
            </div>
          </div>

          {/* Cup handle */}
          <div className="absolute right-[-12px] top-[22px] w-5 h-8 border-4 border-coffee-900 rounded-r-full border-l-0" />

          {/* Saucer */}
          <div className="absolute -bottom-1 -left-2 w-20 h-2 bg-coffee-900 rounded-full" />
        </div>

        {/* Brewing text with animated dots */}
        <p className="text-xs font-heading uppercase tracking-[0.25em] text-coffee-500 loading-fade-in">
          Brewing
          <span className="loading-dots">
            <span className="loading-dot">.</span>
            <span className="loading-dot">.</span>
            <span className="loading-dot">.</span>
          </span>
        </p>
      </div>
    </div>
  );
}
