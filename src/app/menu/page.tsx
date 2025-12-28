"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { SectionContainer } from "@/components/shared/section-container";
import { Heading } from "@/components/shared/heading";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/animated-section";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { menuItems } from "@/lib/data";
import type { MenuCategory } from "@/types";

const categories: { value: MenuCategory; label: string }[] = [
  { value: "coffee", label: "Coffee" },
  { value: "drinks", label: "Drinks" },
  { value: "pastries", label: "Pastries" },
  { value: "specialties", label: "Specialties" },
];

const categoryImages: Record<MenuCategory, string> = {
  coffee: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400",
  drinks: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400",
  pastries: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400",
  specialties: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400",
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("coffee");

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-coffee-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <SectionContainer className="relative text-center">
          <AnimatedSection>
            <Heading as="h1" size="hero" className="text-cream-50 mb-6">
              Our Menu
            </Heading>
            <p className="text-xl text-cream-200 max-w-3xl mx-auto">
              From expertly crafted espresso to freshly baked pastries, explore
              our selection of handmade favorites.
            </p>
          </AnimatedSection>
        </SectionContainer>
      </section>

      {/* Menu Section */}
      <section className="py-24">
        <SectionContainer>
          <Tabs
            defaultValue="coffee"
            value={activeCategory}
            onValueChange={(value) => setActiveCategory(value as MenuCategory)}
            className="w-full"
          >
            <AnimatedSection className="flex justify-center mb-12">
              <TabsList className="flex-wrap h-auto gap-2 p-2">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.value}
                    value={category.value}
                    className="px-6 py-3"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </AnimatedSection>

            {categories.map((category) => (
              <TabsContent key={category.value} value={category.value}>
                <motion.div
                  key={category.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {menuItems
                      .filter((item) => item.category === category.value)
                      .map((item) => (
                        <StaggerItem key={item.id}>
                          <Card className="group h-full overflow-hidden hover:shadow-card transition-all duration-300">
                            <div className="relative h-48 overflow-hidden">
                              <Image
                                src={categoryImages[item.category]}
                                alt={item.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 33vw"
                              />
                              <div className="absolute top-3 left-3 flex gap-2">
                                {item.isNew && (
                                  <Badge variant="new">New</Badge>
                                )}
                                {item.isPopular && (
                                  <Badge variant="popular">Popular</Badge>
                                )}
                              </div>
                            </div>
                            <CardContent className="p-5">
                              <h3 className="font-heading text-xl font-semibold text-coffee-800 mb-2">
                                {item.name}
                              </h3>
                              <p className="text-coffee-500 text-sm leading-relaxed">
                                {item.description}
                              </p>
                            </CardContent>
                            <CardFooter className="p-5 pt-0">
                              <span className="text-2xl font-bold text-coffee-700">
                                ${item.price.toFixed(2)}
                              </span>
                            </CardFooter>
                          </Card>
                        </StaggerItem>
                      ))}
                  </StaggerContainer>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </SectionContainer>
      </section>

      {/* Note Section */}
      <section className="py-16 bg-cream-100">
        <SectionContainer size="narrow" className="text-center">
          <AnimatedSection>
            <p className="text-coffee-600">
              <strong className="text-coffee-800">Dietary Options:</strong> We
              offer oat, almond, soy, and coconut milk alternatives at no extra
              charge. Please inform us of any allergies when ordering.
            </p>
          </AnimatedSection>
        </SectionContainer>
      </section>
    </>
  );
}
