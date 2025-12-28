import type { Metadata } from "next";
import Image from "next/image";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeader } from "@/components/shared/heading";
import { Heading } from "@/components/shared/heading";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Arabica Coffee's story, our mission, and the passionate team behind your favorite cup of coffee.",
};

const timeline = [
  {
    year: "2010",
    title: "The Beginning",
    description:
      "Maria Santos opens the first Arabica Coffee shop with a single espresso machine and a dream.",
  },
  {
    year: "2013",
    title: "First Roaster",
    description:
      "We begin roasting our own beans in-house, giving us complete control over flavor profiles.",
  },
  {
    year: "2016",
    title: "Community Hub",
    description:
      "Arabica becomes a beloved community gathering spot, hosting events and local art shows.",
  },
  {
    year: "2019",
    title: "Sustainability Pledge",
    description:
      "We commit to 100% sustainable sourcing and eliminate single-use plastics from our operations.",
  },
  {
    year: "2024",
    title: "Award Winning",
    description:
      "Named Best Coffee Shop by the Local Food & Drink Awards for the third consecutive year.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-coffee-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <SectionContainer className="relative text-center">
          <AnimatedSection>
            <Heading as="h1" size="hero" className="text-cream-50 mb-6">
              Our Story
            </Heading>
            <p className="text-xl text-cream-200 max-w-3xl mx-auto">
              From a small corner shop to a beloved community hub, discover the
              passion and people behind every cup of Arabica coffee.
            </p>
          </AnimatedSection>
        </SectionContainer>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <AnimatedSection direction="left">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800"
                  alt="Arabica Coffee Shop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <Heading as="h2" size="lg" className="mb-6">
                A Passion for Perfect Coffee
              </Heading>
              <div className="space-y-4 text-coffee-600 leading-relaxed">
                <p>
                  Arabica Coffee was born from a simple belief: that great
                  coffee has the power to bring people together and brighten
                  everyday moments.
                </p>
                <p>
                  Our founder, Maria Santos, spent years traveling the world,
                  learning from master roasters in Ethiopia, Colombia, and
                  Italy. She brought those lessons home to create something
                  special—a place where quality, community, and comfort come
                  together.
                </p>
                <p>
                  Today, we continue that tradition, sourcing the finest beans,
                  roasting them with care, and serving them with love. Every
                  cup is a reflection of our commitment to excellence.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </SectionContainer>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-cream-100">
        <SectionContainer>
          <AnimatedSection>
            <SectionHeader
              title="Mission & Vision"
              subtitle="What drives us every single day."
            />
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2">
            <AnimatedSection delay={0.1}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-semibold text-coffee-800 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-coffee-600 leading-relaxed">
                    To craft exceptional coffee experiences that inspire
                    connection and joy. We believe in sustainable practices,
                    supporting farming communities, and creating a welcoming
                    space for everyone.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-semibold text-coffee-800 mb-4">
                    Our Vision
                  </h3>
                  <p className="text-coffee-600 leading-relaxed">
                    To be the heart of our community—a place where memories are
                    made, ideas are born, and every person feels at home. We
                    envision a world where quality coffee is accessible to all.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </SectionContainer>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <SectionContainer size="narrow">
          <AnimatedSection>
            <SectionHeader
              title="Our Journey"
              subtitle="Key milestones in the Arabica story."
            />
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-cream-300 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <AnimatedSection
                  key={item.year}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <div
                    className={`relative flex items-start gap-8 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 pl-12 md:pl-0 ${
                        index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                      }`}
                    >
                      <span className="inline-block text-gold-600 font-bold text-lg mb-2">
                        {item.year}
                      </span>
                      <h3 className="font-heading text-xl font-semibold text-coffee-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-coffee-600">{item.description}</p>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold-500 rounded-full transform md:-translate-x-1/2 mt-2" />

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-cream-100">
        <SectionContainer>
          <AnimatedSection>
            <SectionHeader
              title="Meet Our Team"
              subtitle="The passionate people who make Arabica special."
            />
          </AnimatedSection>

          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <StaggerItem key={member.id}>
                <Card className="text-center overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-coffee-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gold-600 text-sm font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-coffee-500 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SectionContainer>
      </section>
    </>
  );
}
