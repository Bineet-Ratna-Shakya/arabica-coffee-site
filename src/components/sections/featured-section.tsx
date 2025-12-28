"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Coffee, Leaf, Heart } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeader } from "@/components/shared/heading";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animated-section";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Coffee,
    title: "Artisan Roasted",
    description:
      "Our beans are carefully roasted in small batches to bring out unique flavor profiles.",
  },
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description:
      "Direct trade relationships with farmers ensure quality and fair compensation.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "Every drink is crafted by skilled baristas who are passionate about coffee.",
  },
];

export function FeaturedSection() {
  return (
    <section className="bg-cream-100 py-24">
      <SectionContainer>
        <AnimatedSection>
          <SectionHeader
            title="Why Choose Arabica?"
            subtitle="We believe great coffee starts with great ingredients and even greater care."
          />
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <StaggerContainer className="lg:col-span-2 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <Card className="h-full hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.div
                      className="mb-4 inline-flex rounded-xl bg-gold-500/10 p-3"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <feature.icon className="h-6 w-6 text-gold-600" />
                    </motion.div>
                    <h3 className="font-heading text-xl font-semibold text-coffee-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-coffee-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection direction="right" delay={0.3} className="hidden lg:block">
            <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600"
                alt="Freshly brewed coffee"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-heading text-2xl text-cream-50">
                  Crafted with
                  <br />
                  <span className="text-gold-400">passion</span>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionContainer>
    </section>
  );
}
