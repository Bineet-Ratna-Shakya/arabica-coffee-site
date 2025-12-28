import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Coffee, Heart, Sparkles, Users } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Heading, SectionHeader } from "@/components/shared/heading";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { jobListings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Arabica Coffee team. Explore open positions and become part of our passionate coffee community.",
};

const benefits = [
  {
    icon: Coffee,
    title: "Free Coffee",
    description: "Unlimited drinks during shifts and discounts on beans to take home.",
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Medical, dental, and vision coverage for full-time team members.",
  },
  {
    icon: Sparkles,
    title: "Growth Opportunities",
    description: "Training programs, certifications, and paths to leadership roles.",
  },
  {
    icon: Users,
    title: "Team Culture",
    description: "Monthly team events, birthday celebrations, and a supportive environment.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-coffee-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <SectionContainer className="relative text-center">
          <AnimatedSection>
            <Heading as="h1" size="hero" className="text-cream-50 mb-6">
              Join Our Team
            </Heading>
            <p className="text-xl text-cream-200 max-w-3xl mx-auto">
              Love coffee? Love people? We're looking for passionate individuals
              to join the Arabica family.
            </p>
          </AnimatedSection>
        </SectionContainer>
      </section>

      {/* Why Work With Us */}
      <section className="py-24">
        <SectionContainer>
          <AnimatedSection>
            <SectionHeader
              title="Why Work With Us?"
              subtitle="We believe in taking care of our team just as much as we take care of our coffee."
            />
          </AnimatedSection>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <Card className="h-full text-center hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-gold-500/10 flex items-center justify-center">
                      <benefit.icon className="h-7 w-7 text-gold-600" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-coffee-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-coffee-600 text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SectionContainer>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-cream-100">
        <SectionContainer>
          <AnimatedSection>
            <SectionHeader
              title="Open Positions"
              subtitle="Find your place at Arabica. We're always looking for talented people to join our team."
            />
          </AnimatedSection>

          <StaggerContainer className="space-y-6">
            {jobListings.map((job) => (
              <StaggerItem key={job.id}>
                <Card className="overflow-hidden hover:shadow-card transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="p-6 md:flex md:items-center md:justify-between md:gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="font-heading text-xl font-semibold text-coffee-800">
                            {job.title}
                          </h3>
                          <Badge
                            variant={
                              job.type === "full-time" ? "default" : "secondary"
                            }
                          >
                            {job.type === "full-time"
                              ? "Full Time"
                              : job.type === "part-time"
                              ? "Part Time"
                              : "Contract"}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-coffee-500 mb-4">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                        </div>

                        <p className="text-coffee-600 mb-4">
                          {job.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {job.requirements.slice(0, 3).map((req, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                          {job.requirements.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{job.requirements.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="mt-6 md:mt-0 md:shrink-0">
                        <Button asChild>
                          <a href={`mailto:careers@arabicacoffee.com?subject=Application: ${job.title}`}>
                            Apply Now
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SectionContainer>
      </section>

      {/* General Application */}
      <section className="py-24">
        <SectionContainer size="narrow" className="text-center">
          <AnimatedSection>
            <Heading as="h2" size="md" className="mb-4">
              Don't See Your Role?
            </Heading>
            <p className="text-lg text-coffee-600 mb-8">
              We're always interested in meeting passionate people. Send us your
              resume and tell us how you'd like to contribute to the Arabica
              team.
            </p>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:careers@arabicacoffee.com?subject=General Application">
                Send General Application
              </a>
            </Button>
          </AnimatedSection>
        </SectionContainer>
      </section>
    </>
  );
}
