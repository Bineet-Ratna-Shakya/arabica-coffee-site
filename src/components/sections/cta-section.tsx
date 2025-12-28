"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, Clock } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-24">
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Image Side */}
          <AnimatedSection direction="left" className="relative">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800"
                alt="Arabica Coffee Shop Interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-cream-50 rounded-xl p-5 shadow-elevated max-w-[200px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-gold-600" />
                </div>
                <span className="font-heading font-semibold text-coffee-800">
                  Open Now
                </span>
              </div>
              <p className="text-sm text-coffee-600">
                {siteConfig.hours.weekdays}
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Content Side */}
          <AnimatedSection direction="right" delay={0.2}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-coffee-900 mb-6">
              Visit Us Today
            </h2>
            <p className="text-lg text-coffee-600 leading-relaxed mb-6">
              Step into our warm and inviting space, where the aroma of freshly
              roasted coffee fills the air. Whether you&apos;re looking for a quiet
              corner to work or a cozy spot to catch up with friends, we&apos;ve
              got the perfect seat for you.
            </p>

            <div className="flex items-start gap-4 mb-8">
              <div className="h-12 w-12 rounded-full bg-coffee-100 flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-coffee-600" />
              </div>
              <div>
                <h3 className="font-semibold text-coffee-800 mb-1">
                  Our Location
                </h3>
                <p className="text-coffee-600">{siteConfig.contact.address}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Directions</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/menu">View Menu</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </SectionContainer>
    </section>
  );
}
