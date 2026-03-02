"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/data";

/* ── Image tile ── */
function Tile({
  src,
  alt,
  aspect,
  priority,
  onClick,
  children,
  className,
}: {
  src: string;
  alt: string;
  aspect: string;
  priority?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`relative overflow-hidden cursor-pointer group focus:outline-none ${className ?? ""}`}
      style={{ aspectRatio: aspect }}
      onClick={onClick}
      aria-label={`View: ${alt}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
      {children}
    </button>
  );
}

/* ── Image data ── */
const cafe = galleryImages.filter((img) => img.category === "cafe");
const academy = galleryImages.filter((img) => img.category === "academy");
const exterior = galleryImages.filter((img) => img.category === "exterior");
const allImages = [...cafe, ...academy, ...exterior];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openImage = (img: (typeof allImages)[0]) => {
    setLightbox(allImages.findIndex((i) => i.id === img.id));
  };

  const prev = useCallback(() => {
    setLightbox((i) => (i === null ? null : i === 0 ? allImages.length - 1 : i - 1));
  }, []);

  const next = useCallback(() => {
    setLightbox((i) => (i === null ? null : i === allImages.length - 1 ? 0 : i + 1));
  }, []);

  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, prev, next, close]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <>
      {/* ── Full-bleed hero behind navbar ── */}
      <div className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <Image
          src={cafe[0].src}
          alt={cafe[0].alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <button
          className="absolute inset-0 z-10 cursor-pointer"
          onClick={() => openImage(cafe[0])}
          aria-label={`View: ${cafe[0].alt}`}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-24 pointer-events-none z-20">
          <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.5em] mb-3">
            Arabica Beans & Academy
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white leading-none">
            Gallery
          </h1>
        </div>
      </div>

      {/* ── Café label ── */}
      <div className="bg-cream-50 flex items-center gap-6 px-8 md:px-12 py-10 md:py-14">
        <div className="h-px flex-1 bg-coffee-300/40" />
        <p className="text-coffee-600 text-[11px] md:text-xs uppercase tracking-[0.4em] font-bold">
          The Café
        </p>
        <div className="h-px flex-1 bg-coffee-300/40" />
      </div>

      {/* ── Café grid ── */}
      <div className="bg-cream-50 grid grid-cols-2 md:grid-cols-4 gap-1 px-1">
        {/* Row 1: 2 landscape */}
        <Tile src={cafe[1].src} alt={cafe[1].alt} aspect="4/3" className="col-span-2" onClick={() => openImage(cafe[1])}>
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 pointer-events-none">
            <p className="font-heading text-base md:text-lg text-white/60">The counter.</p>
          </div>
        </Tile>
        <Tile src={cafe[2].src} alt={cafe[2].alt} aspect="4/3" className="col-span-2" onClick={() => openImage(cafe[2])}>
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 pointer-events-none text-right">
            <p className="font-heading text-base md:text-lg text-white/60">The lounge.</p>
          </div>
        </Tile>

        {/* Row 2: 1 tall portrait + 2 squares stacked */}
        <Tile src={cafe[3].src} alt={cafe[3].alt} aspect="2/3" className="col-span-2 md:col-span-2 md:row-span-2" onClick={() => openImage(cafe[3])}>
          <div className="absolute top-6 left-6 md:top-10 md:left-10 pointer-events-none">
            <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-1">Slow pour</p>
            <p className="font-heading text-xl md:text-3xl text-white/70 leading-tight">
              Good things<br />take time.
            </p>
          </div>
        </Tile>
        <Tile src={cafe[4].src} alt={cafe[4].alt} aspect="4/3" className="col-span-1" onClick={() => openImage(cafe[4])} />
        <Tile src={cafe[5].src} alt={cafe[5].alt} aspect="4/3" className="col-span-1" onClick={() => openImage(cafe[5])} />
        <Tile src={cafe[6].src} alt={cafe[6].alt} aspect="4/3" className="col-span-1" onClick={() => openImage(cafe[6])} />
        <Tile src={cafe[7].src} alt={cafe[7].alt} aspect="4/3" className="col-span-1" onClick={() => openImage(cafe[7])} />

        {/* Row 3: full-bleed quote */}
        <Tile src={cafe[8].src} alt={cafe[8].alt} aspect="21/9" className="col-span-2 md:col-span-4" onClick={() => openImage(cafe[8])}>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="font-heading text-xl md:text-3xl lg:text-4xl text-white/60 text-center leading-snug italic">
              &ldquo;Light, warmth & good coffee.&rdquo;
            </p>
          </div>
        </Tile>

        {/* Row 4: 3 images */}
        <Tile src={cafe[9].src} alt={cafe[9].alt} aspect="1/1" className="col-span-1" onClick={() => openImage(cafe[9])} />
        <Tile src={cafe[10].src} alt={cafe[10].alt} aspect="1/1" className="col-span-2" onClick={() => openImage(cafe[10])}>
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 pointer-events-none">
            <p className="font-heading text-base md:text-lg text-white/50">After hours.</p>
          </div>
        </Tile>
        <Tile src={cafe[11].src} alt={cafe[11].alt} aspect="1/1" className="col-span-1" onClick={() => openImage(cafe[11])} />
      </div>

      {/* ── Academy label ── */}
      <div className="bg-cream-50 flex items-center gap-6 px-8 md:px-12 py-10 md:py-14">
        <div className="h-px flex-1 bg-coffee-300/40" />
        <p className="text-coffee-600 text-[11px] md:text-xs uppercase tracking-[0.4em] font-bold">
          The Academy
        </p>
        <div className="h-px flex-1 bg-coffee-300/40" />
      </div>

      {/* ── Academy grid ── */}
      <div className="bg-cream-50 grid grid-cols-3 gap-1 px-1">
        <Tile src={academy[0].src} alt={academy[0].alt} aspect="16/9" className="col-span-3" onClick={() => openImage(academy[0])}>
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 pointer-events-none">
            <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-1">SCA Certified</p>
            <p className="font-heading text-lg md:text-2xl text-white/60">Where baristas are made.</p>
          </div>
        </Tile>
        <Tile src={academy[1].src} alt={academy[1].alt} aspect="4/3" onClick={() => openImage(academy[1])} />
        <Tile src={academy[2].src} alt={academy[2].alt} aspect="4/3" onClick={() => openImage(academy[2])} />
        <Tile src={academy[3].src} alt={academy[3].alt} aspect="4/3" onClick={() => openImage(academy[3])} />
      </div>

      {/* ── Exterior label ── */}
      <div className="bg-cream-50 flex items-center gap-6 px-8 md:px-12 py-10 md:py-14">
        <div className="h-px flex-1 bg-coffee-300/40" />
        <p className="text-coffee-600 text-[11px] md:text-xs uppercase tracking-[0.4em] font-bold">
          Purple House, Bagbazar
        </p>
        <div className="h-px flex-1 bg-coffee-300/40" />
      </div>

      {/* ── Exterior grid ── */}
      <div className="bg-cream-50 grid grid-cols-1 md:grid-cols-2 gap-1 px-1">
        <Tile src={exterior[0].src} alt={exterior[0].alt} aspect="3/2" onClick={() => openImage(exterior[0])} />
        <Tile src={exterior[1].src} alt={exterior[1].alt} aspect="3/2" onClick={() => openImage(exterior[1])}>
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 pointer-events-none text-right">
            <p className="font-heading text-base md:text-lg text-white/50">Day one.</p>
          </div>
        </Tile>
      </div>

      {/* ── End mark ── */}
      <div className="bg-cream-50 py-10 md:py-16 text-center">
        <div className="w-8 h-px bg-coffee-300/40 mx-auto mb-4" />
        <p className="text-coffee-400/40 text-[10px] uppercase tracking-[0.5em]">
          Arabica Beans & Academy
        </p>
        <p className="text-coffee-400/30 text-[10px] uppercase tracking-[0.3em] mt-1">
          Bagbazar, Kathmandu
        </p>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={close}
        >
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
            <span className="text-white/50 text-sm tabular-nums">
              {lightbox + 1} / {allImages.length}
            </span>
          </div>

          <button
            className="absolute top-4 right-4 z-10 text-white/50 hover:text-white transition-colors p-2"
            onClick={close}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/40 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/40 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div
            className="relative w-[90vw] h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={allImages[lightbox].src}
              alt={allImages[lightbox].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-sm text-center max-w-md">
            {allImages[lightbox].alt}
          </p>
        </div>
      )}
    </>
  );
}
