import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Heading } from "@/components/shared/heading";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { events } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join us for coffee workshops, live music, and community events at Arabica Coffee.",
};

export default function EventsPage() {
  // Separate upcoming and past events
  const upcomingEvents = events.filter((event) => !event.isPast);
  const pastEvents = events.filter((event) => event.isPast);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-cream-100">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/gallery/shop-interior-1.webp"
            alt="Arabica coffee shop"
            fill
            className="object-cover"
            priority
          />
        </div>
        <SectionContainer className="relative text-center">
          <AnimatedSection>
            <Heading as="h1" size="hero" className="text-coffee-900 mb-6">
              Events
            </Heading>
            <p className="text-xl text-coffee-600 max-w-3xl mx-auto">
              From coffee workshops to live music nights, there's always
              something happening at Arabica.
            </p>
          </AnimatedSection>
        </SectionContainer>
      </section>

      {/* Upcoming Events */}
      <section className="py-24">
        <SectionContainer>
          <AnimatedSection>
            <Heading as="h2" size="lg" className="mb-12">
              Upcoming Events
            </Heading>
          </AnimatedSection>

          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <StaggerItem key={event.id}>
                <Card className="h-full overflow-hidden group hover:shadow-card transition-all duration-300">
                  <div className="relative h-48 overflow-hidden bg-coffee-100">
                    <Image
                      src="/images/gallery/shop-counter-2.webp"
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="accent">Upcoming</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-coffee-800 mb-3">
                      {event.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-sm text-coffee-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </span>
                    </div>

                    <p className="text-coffee-600 text-sm leading-relaxed mb-6">
                      {event.description}
                    </p>

                    <Button className="w-full">RSVP Now</Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SectionContainer>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-24 bg-cream-100">
          <SectionContainer>
            <AnimatedSection>
              <Heading as="h2" size="lg" className="mb-12">
                Past Events
              </Heading>
            </AnimatedSection>

            <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <StaggerItem key={event.id}>
                  <Card className="h-full opacity-75">
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        Past Event
                      </Badge>
                      <h3 className="font-heading text-lg font-semibold text-coffee-700 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-coffee-500">
                        {event.date}
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </SectionContainer>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24">
        <SectionContainer size="narrow" className="text-center">
          <AnimatedSection>
            <Heading as="h2" size="md" className="mb-4">
              Want to Host an Event?
            </Heading>
            <p className="text-lg text-coffee-600 mb-8">
              We offer private event space for groups of 20-50 people. Perfect
              for corporate meetings, birthday parties, or special occasions.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </AnimatedSection>
        </SectionContainer>
      </section>
    </>
  );
}
