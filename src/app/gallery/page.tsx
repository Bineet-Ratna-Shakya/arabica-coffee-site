"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Heading } from "@/components/shared/heading";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/animated-section";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { galleryImages } from "@/lib/data";

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1
      );
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-coffee-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <SectionContainer className="relative text-center">
          <AnimatedSection>
            <Heading as="h1" size="hero" className="text-cream-50 mb-6">
              Gallery
            </Heading>
            <p className="text-xl text-cream-200 max-w-3xl mx-auto">
              Take a glimpse into our world—from our cozy corners to our
              expertly crafted drinks.
            </p>
          </AnimatedSection>
        </SectionContainer>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <SectionContainer>
          <StaggerContainer className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <StaggerItem key={image.id}>
                <motion.div
                  className="relative break-inside-avoid cursor-pointer overflow-hidden rounded-xl group"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => openLightbox(index)}
                >
                  <div
                    className="relative"
                    style={{
                      aspectRatio: `${image.width}/${image.height}`,
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-coffee-900/0 group-hover:bg-coffee-900/40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-cream-50 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View
                    </span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SectionContainer>
      </section>

      {/* Lightbox Dialog */}
      <Dialog
        open={selectedIndex !== null}
        onOpenChange={(open) => !open && closeLightbox()}
      >
        <DialogContent className="max-w-5xl p-0 bg-coffee-950 border-coffee-800">
          <DialogTitle className="sr-only">
            {selectedIndex !== null ? galleryImages[selectedIndex].alt : "Gallery Image"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            View larger version of the gallery image
          </DialogDescription>
          {selectedIndex !== null && (
            <div className="relative">
              <div className="relative aspect-[4/3]">
                <Image
                  src={galleryImages[selectedIndex].src}
                  alt={galleryImages[selectedIndex].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-coffee-950 to-transparent">
                <p className="text-cream-100 text-center">
                  {galleryImages[selectedIndex].alt}
                </p>
              </div>

              {/* Navigation */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-cream-100 hover:bg-cream-50/20"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-cream-100 hover:bg-cream-50/20"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Image Counter */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-coffee-900/80 px-4 py-2 rounded-full">
                <span className="text-cream-100 text-sm">
                  {selectedIndex + 1} / {galleryImages.length}
                </span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
