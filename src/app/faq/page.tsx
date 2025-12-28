import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionContainer } from "@/components/shared/section-container";
import { Heading } from "@/components/shared/heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Arabica Coffee - hours, menu options, events, and more.",
};

// Group FAQs by category
const faqCategories = [
  {
    title: "General",
    items: faqItems.slice(0, 3),
  },
  {
    title: "Menu & Dietary",
    items: faqItems.slice(3, 6),
  },
  {
    title: "Visits & Events",
    items: faqItems.slice(6),
  },
];

export default function FAQPage() {
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
              Frequently Asked Questions
            </Heading>
            <p className="text-xl text-cream-200 max-w-3xl mx-auto">
              Got questions? We've got answers. Find everything you need to know
              about Arabica Coffee.
            </p>
          </AnimatedSection>
        </SectionContainer>
      </section>

      {/* FAQ Content */}
      <section className="py-24">
        <SectionContainer size="narrow">
          {faqCategories.map((category, categoryIndex) => (
            <AnimatedSection
              key={category.title}
              delay={categoryIndex * 0.1}
              className="mb-12 last:mb-0"
            >
              <h2 className="font-heading text-2xl font-semibold text-coffee-800 mb-6">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {category.items.map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          ))}
        </SectionContainer>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-cream-100">
        <SectionContainer size="narrow" className="text-center">
          <AnimatedSection>
            <Heading as="h2" size="md" className="mb-4">
              Still Have Questions?
            </Heading>
            <p className="text-lg text-coffee-600 mb-8">
              Can't find what you're looking for? We're happy to help. Reach out
              to us directly and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:hello@arabicacoffee.com">Email Us</a>
              </Button>
            </div>
          </AnimatedSection>
        </SectionContainer>
      </section>
    </>
  );
}
