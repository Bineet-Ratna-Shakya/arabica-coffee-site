"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeader } from "@/components/shared/heading";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animated-section";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/lib/data";

export function MenuPreviewSection() {
  // Get 4 featured items (popular or new)
  const featuredItems = menuItems
    .filter((item) => item.isPopular || item.isNew)
    .slice(0, 4);

  return (
    <section className="py-24">
      <SectionContainer>
        <AnimatedSection>
          <SectionHeader
            title="Our Menu Highlights"
            subtitle="Discover our most loved drinks and treats, crafted to perfection."
          />
        </AnimatedSection>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredItems.map((item) => (
            <StaggerItem key={item.id}>
              <Card className="group h-full overflow-hidden hover:shadow-card transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop`}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.isNew && <Badge variant="new">New</Badge>}
                    {item.isPopular && <Badge variant="popular">Popular</Badge>}
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-coffee-800 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-coffee-500 line-clamp-2 mb-3">
                    {item.description}
                  </p>
                </CardContent>
                <CardFooter className="p-5 pt-0 flex items-center justify-between">
                  <span className="text-xl font-bold text-coffee-700">
                    ${item.price.toFixed(2)}
                  </span>
                  <motion.span
                    className="text-gold-600 text-sm font-medium"
                    whileHover={{ x: 3 }}
                  >
                    Order
                  </motion.span>
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/menu" className="group">
              View Full Menu
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </AnimatedSection>
      </SectionContainer>
    </section>
  );
}
