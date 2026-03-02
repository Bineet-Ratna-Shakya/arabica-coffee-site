import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ParallaxImage } from "@/components/effects/parallax";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/animated-section";

export function GalleryPreviewSection() {
  const preview = galleryImages.slice(0, 4);

  return (
    <section className="bg-white border-t-4 border-coffee-900">
      {/* Big header */}
      <div className="bg-cream-100 py-12 text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-coffee-900">
            The Space
          </h2>
        </AnimatedSection>
      </div>

      {/* Large gallery grid */}
      <StaggerContainer staggerDelay={0.1} delayChildren={0.15} className="grid md:grid-cols-2">
        {preview.map((image) => (
          <StaggerItem key={image.id}>
            <ParallaxImage speed={0.15} className="h-[35vh] sm:h-[50vh] border-2 border-coffee-900">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </ParallaxImage>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* CTA */}
      <AnimatedSection delay={0.3}>
        <div className="py-8 text-center bg-cream-50 border-t-4 border-coffee-900">
          <Button variant="outline" asChild>
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </AnimatedSection>
    </section>
  );
}
