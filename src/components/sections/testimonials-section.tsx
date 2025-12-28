"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeader } from "@/components/shared/heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/data";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-coffee-900 py-24">
      <SectionContainer>
        <AnimatedSection>
          <SectionHeader
            title="What Our Customers Say"
            subtitle="Don't just take our word for it – hear from our coffee-loving community."
            className="text-cream-50 [&_h2]:text-cream-50 [&_p]:text-cream-300"
          />
        </AnimatedSection>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full bg-coffee-800 border-coffee-700">
                    <CardContent className="p-6">
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-gold-400 text-gold-400"
                            />
                          )
                        )}
                      </div>

                      {/* Quote */}
                      <p className="text-cream-200 leading-relaxed mb-6">
                        &quot;{testimonial.content}&quot;
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                          <span className="text-gold-400 font-semibold">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-cream-100">
                            {testimonial.name}
                          </p>
                          {testimonial.role && (
                            <p className="text-sm text-cream-400">
                              {testimonial.role}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="border-cream-400 text-cream-300 hover:bg-cream-50/10"
              onClick={scrollPrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-cream-400 text-cream-300 hover:bg-cream-50/10"
              onClick={scrollNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <AnimatedSection delay={0.3} className="mt-12 text-center">
          <Button variant="gold" asChild>
            <Link href="/testimonials">Read More Reviews</Link>
          </Button>
        </AnimatedSection>
      </SectionContainer>
    </section>
  );
}
