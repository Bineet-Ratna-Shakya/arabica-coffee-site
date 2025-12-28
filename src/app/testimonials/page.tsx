import type { Metadata } from "next";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Heading } from "@/components/shared/heading";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what our customers have to say about their experience at Arabica Coffee.",
};

// Extended testimonials for full page
const allTestimonials = [
  ...testimonials,
  {
    id: "6",
    name: "Robert Williams",
    role: "Business Owner",
    content: "I hold all my client meetings here. The atmosphere is professional yet comfortable, and the coffee never disappoints. My clients always leave impressed.",
    rating: 5,
  },
  {
    id: "7",
    name: "Amanda Foster",
    role: "Coffee Subscriber",
    content: "Their coffee subscription service is amazing! Fresh beans delivered to my door every month. It's completely transformed my morning routine.",
    rating: 5,
  },
  {
    id: "8",
    name: "Daniel Martinez",
    role: "First-time Visitor",
    content: "Just discovered this gem and I'm already a regular. The staff took time to explain different brewing methods and helped me find my perfect coffee.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
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
              Customer Stories
            </Heading>
            <p className="text-xl text-cream-200 max-w-3xl mx-auto">
              Don't just take our word for it—hear what our wonderful customers
              have to say about their Arabica experience.
            </p>
          </AnimatedSection>
        </SectionContainer>
      </section>

      {/* Featured Testimonial */}
      <section className="py-24">
        <SectionContainer size="narrow">
          <AnimatedSection>
            <Card className="bg-coffee-900 text-cream-50 overflow-hidden">
              <CardContent className="p-8 md:p-12 text-center relative">
                <Quote className="h-16 w-16 text-gold-500/30 mx-auto mb-6" />
                <p className="text-xl md:text-2xl leading-relaxed mb-8 italic">
                  "Arabica isn't just a coffee shop—it's my second home. The
                  team knows everyone by name, the coffee is consistently
                  exceptional, and the atmosphere makes you want to stay all
                  day. I've been coming here for five years and it only gets
                  better."
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>
                <p className="font-heading text-xl font-semibold">
                  Sarah Mitchell
                </p>
                <p className="text-cream-400">Regular Customer since 2019</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </SectionContainer>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-24 bg-cream-100">
        <SectionContainer>
          <AnimatedSection className="mb-12 text-center">
            <Heading as="h2" size="lg">
              More Happy Customers
            </Heading>
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allTestimonials.map((testimonial) => (
              <StaggerItem key={testimonial.id}>
                <Card className="h-full hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-gold-400 text-gold-400"
                        />
                      ))}
                    </div>

                    <p className="text-coffee-600 leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-coffee-200 flex items-center justify-center">
                        <span className="text-coffee-700 font-semibold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-coffee-800">
                          {testimonial.name}
                        </p>
                        {testimonial.role && (
                          <p className="text-sm text-coffee-500">
                            {testimonial.role}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SectionContainer>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <SectionContainer>
          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <StaggerItem>
              <div className="font-heading text-5xl font-bold text-coffee-800 mb-2">
                4.9
              </div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>
              <p className="text-coffee-600">Average Rating</p>
            </StaggerItem>

            <StaggerItem>
              <div className="font-heading text-5xl font-bold text-coffee-800 mb-2">
                2,500+
              </div>
              <p className="text-coffee-600">Happy Customers</p>
            </StaggerItem>

            <StaggerItem>
              <div className="font-heading text-5xl font-bold text-coffee-800 mb-2">
                500+
              </div>
              <p className="text-coffee-600">5-Star Reviews</p>
            </StaggerItem>

            <StaggerItem>
              <div className="font-heading text-5xl font-bold text-coffee-800 mb-2">
                14+
              </div>
              <p className="text-coffee-600">Years of Excellence</p>
            </StaggerItem>
          </StaggerContainer>
        </SectionContainer>
      </section>
    </>
  );
}
