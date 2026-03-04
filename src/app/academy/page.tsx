import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Coffee,
  Award,
  Users,
  Phone,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Flame,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/animated-section";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Academy",
  description:
    "Arabica Barista Coffee School — internationally certified barista academy in Bagbazar, Kathmandu. Hands-on training aligned with SCA, ASCA & AST standards.",
};

const stats = [
  { icon: GraduationCap, value: "SCA", label: "Aligned Curriculum" },
  { icon: Coffee, value: "80%", label: "Practical Training" },
  { icon: Award, value: "ASCA", label: "Recognized Standards" },
  { icon: Users, value: "500+", label: "Trained Baristas" },
];

const whyUs = [
  {
    title: "Specialty Curriculum",
    desc: "Globally recognized standards aligned with SCA, ASCA & AST frameworks.",
  },
  {
    title: "80% Hands-on",
    desc: "Real café-simulated environment. Professional espresso machines. Real pressure.",
  },
  {
    title: "Small Batches",
    desc: "Personalized attention. Every student gets the time they need to build confidence.",
  },
  {
    title: "Career Support",
    desc: "Internships, alumni network, mentorship, and job placement guidance.",
  },
  {
    title: "Recognized Globally",
    desc: "Our certification opens doors to cafés and employers across Nepal and abroad.",
  },
  {
    title: "Real Café Training",
    desc: "Not a classroom — you train where coffee is actually made, served, and loved.",
  },
];

const idealFor = [
  { label: "Zero experience? Perfect.", desc: "We start from scratch." },
  { label: "Coffee nerd?", desc: "Go pro with certification." },
  { label: "Opening a café?", desc: "Learn the business side too." },
  { label: "Going abroad?", desc: "Get globally recognized skills." },
];

const curriculum = [
  {
    title: "Coffee Foundation",
    emoji: "🫘",
    topics: ["Coffee origins & processing", "Arabica vs Robusta", "Specialty grading"],
  },
  {
    title: "Espresso Mastery",
    emoji: "☕",
    topics: ["Grinder calibration & dialing-in", "Extraction control", "Consistency & speed", "Workflow efficiency"],
  },
  {
    title: "Milk Science & Latte Art",
    emoji: "🥛",
    topics: ["Milk chemistry & texturing", "Classic & advanced patterns", "Precision pouring", "Service speed"],
  },
  {
    title: "Specialty Brewing",
    emoji: "🫖",
    topics: ["Pour-over techniques", "French press & AeroPress", "Cold brew & iced beverages"],
  },
  {
    title: "Café Ops & Pro Skills",
    emoji: "🏪",
    topics: ["Hygiene & machine care", "Bar workflow", "Customer communication", "POS & upselling"],
  },
];

export default function AcademyPage() {
  return (
    <>
      {/* Hero — big, bold, confident */}
      <section className="relative bg-coffee-900 overflow-hidden">
        <Image
          src="/images/IMG_2073.JPG.jpeg"
          alt="Arabica Barista Coffee School training facility"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 w-full px-6 md:px-8 pt-24 md:pt-32 pb-20 md:pb-28 max-w-6xl mx-auto">
          <AnimatedSection delay={0.2} direction="up" duration={0.8}>
            <p className="text-accent-400 text-xs uppercase tracking-[0.4em] mb-4">
              Arabica Barista Coffee School
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream-50 leading-[0.9] mb-6">
              Become a
              <br />
              <span className="text-accent-400">Barista.</span>
            </h1>
            <p className="text-cream-50/50 text-sm md:text-base max-w-md leading-relaxed mb-14">
              Structured, hands-on training aligned with international specialty
              coffee standards. From zero to certified.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5" staggerDelay={0.08} delayChildren={0.3}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="bg-white/10 backdrop-blur-sm border border-cream-50/10 p-4 sm:p-5 h-full">
                  <stat.icon className="w-5 h-5 text-accent-400 mb-3" />
                  <p className="text-cream-50 font-heading text-xl sm:text-2xl mb-1">
                    {stat.value}
                  </p>
                  <p className="text-cream-50/40 text-[11px] uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Big bold statement */}
      <section className="bg-accent-500 py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <AnimatedSection delay={0.1} direction="up">
            <p className="font-heading text-2xl sm:text-3xl md:text-4xl text-white text-center leading-snug">
              We don&apos;t teach coffee in a classroom.
              <br />
              <span className="text-white/60">We teach it where it&apos;s made.</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* About + Image */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection delay={0.1} direction="up">
              <div className="max-w-xl">
                <p className="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4">
                  The Program
                </p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-coffee-900 leading-tight mb-6">
                  Not just another
                  <br />
                  coffee course.
                </h2>
                <p className="text-coffee-600 text-base leading-relaxed mb-8">
                  Our Barista Certification Program combines deep specialty coffee
                  knowledge with intensive hands-on practice. Designed around the
                  Specialty Coffee Association framework — you learn the real thing.
                </p>
                <div className="space-y-4">
                  {[
                    { org: "SCA", full: "Specialty Coffee Association" },
                    { org: "ASCA", full: "Asian Specialty Coffee Association" },
                    { org: "AST", full: "Authorized SCA Trainer" },
                  ].map((item) => (
                    <div key={item.org} className="flex items-center gap-4">
                      <span className="font-heading text-lg text-accent-500 w-14 shrink-0">{item.org}</span>
                      <span className="text-coffee-600 text-sm">{item.full}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="up">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/IMG_2068.JPG.jpeg"
                  alt="Arabica Barista Coffee School equipment and training station"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Who is this for — punchy cards */}
      <section className="bg-coffee-900 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <AnimatedSection delay={0.1} direction="up">
            <p className="text-accent-400 text-xs uppercase tracking-[0.3em] mb-4">
              Is This For You?
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-tight mb-12">
              Spoiler: yes.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.08}>
            {idealFor.map((item) => (
              <StaggerItem key={item.label}>
                <div className="bg-white/5 border border-cream-50/10 p-6 h-full">
                  <p className="font-heading text-lg text-cream-50 mb-2">{item.label}</p>
                  <p className="text-cream-50/40 text-sm">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Duration options — visual split */}
      <section className="bg-cream-50">
        <div className="grid md:grid-cols-2">
          <div className="bg-coffee-900 p-10 md:p-16 flex flex-col justify-center">
            <AnimatedSection delay={0.1} direction="left">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-accent-400" />
                <p className="text-accent-400 text-xs uppercase tracking-[0.3em]">Fast Track</p>
              </div>
              <h3 className="font-heading text-4xl md:text-5xl text-cream-50 leading-[0.9] mb-4">
                1 Week<br />Intensive.
              </h3>
              <p className="text-cream-50/50 text-sm leading-relaxed">
                Concentrated certification program. Full days, real machines,
                instant immersion. For those who learn by diving in.
              </p>
            </AnimatedSection>
          </div>
          <div className="bg-cream-100 p-10 md:p-16 flex flex-col justify-center">
            <AnimatedSection delay={0.2} direction="right">
              <div className="flex items-center gap-3 mb-4">
                <Flame className="w-6 h-6 text-accent-500" />
                <p className="text-accent-500 text-xs uppercase tracking-[0.3em]">Deep Dive</p>
              </div>
              <h3 className="font-heading text-4xl md:text-5xl text-coffee-900 leading-[0.9] mb-4">
                1 Month<br />Advanced.
              </h3>
              <p className="text-coffee-500 text-sm leading-relaxed">
                Extended professional program. More practice, more depth,
                more confidence. For those who want mastery.
              </p>
            </AnimatedSection>
          </div>
        </div>
        <div className="bg-accent-500 py-4">
          <p className="text-center text-white text-sm font-bold uppercase tracking-wider">
            80% Practical &mdash; 20% Theory &mdash; Real Café Environment
          </p>
        </div>
      </section>

      {/* Full-width image break */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="/images/IMG_2069.JPG.jpeg"
          alt="Inside the Arabica Barista Coffee School"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-coffee-900/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatedSection delay={0.1} direction="up">
            <p className="font-heading text-3xl md:text-5xl text-cream-50 text-center leading-tight px-6">
              Learn by doing.<br />
              <span className="text-accent-400">Every single day.</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Curriculum — visual modules */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <AnimatedSection delay={0.1} direction="up">
            <div className="max-w-2xl mb-16">
              <p className="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4">
                The Curriculum
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-coffee-900 leading-tight">
                Everything you&apos;ll master.
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {curriculum.map((module, idx) => (
              <AnimatedSection key={module.title} delay={0.05 + idx * 0.05} direction="up">
                <div className="border-2 border-coffee-900 p-6 md:p-8 hover:shadow-[4px_4px_0_0_theme(colors.coffee.900)] transition-shadow">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-3xl">{module.emoji}</span>
                    <div>
                      <span className="text-coffee-300 text-xs font-bold uppercase tracking-wider">
                        Module {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-heading text-lg md:text-xl text-coffee-900 uppercase tracking-wider">
                        {module.title}
                      </h3>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 pl-14">
                    {module.topics.map((topic) => (
                      <div key={topic} className="flex items-start gap-2 text-sm text-coffee-600">
                        <ArrowRight className="w-3.5 h-3.5 text-accent-500 mt-0.5 shrink-0" />
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="bg-coffee-900 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection delay={0.1} direction="up">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/IMG_2074.JPG.jpeg"
                  alt="SCA certifications and credentials on display at Arabica Academy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="up">
              <p className="text-accent-400 text-xs uppercase tracking-[0.3em] mb-4">
                What You Get
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-cream-50 leading-tight mb-6">
                The Arabica<br />
                Barista<br />
                <span className="text-accent-400">Certification.</span>
              </h2>
              <p className="text-cream-50/60 text-base leading-relaxed mb-6">
                Advanced practical competency. Specialty coffee knowledge.
                Aligned with SCA, ASCA & AST standards. Recognized by cafés
                and employers worldwide.
              </p>
              <p className="text-cream-50/30 text-sm leading-relaxed italic">
                &ldquo;This isn&apos;t a certificate you hang on the wall.
                It&apos;s one you prove at the bar.&rdquo;
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Arabica — stagger grid */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <AnimatedSection delay={0.1} direction="up">
            <div className="max-w-2xl mb-12">
              <p className="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4">
                Why Arabica
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-coffee-900 leading-tight">
                Built different.
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.06}>
            {whyUs.map((item) => (
              <StaggerItem key={item.title}>
                <div className="border-2 border-coffee-900 p-6 shadow-[4px_4px_0_0_theme(colors.coffee.900)] h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-accent-500 shrink-0" />
                    <h3 className="font-heading text-base text-coffee-900 uppercase tracking-wider">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-coffee-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How it works — 3 steps */}
      <section className="border-y-4 border-coffee-900 bg-cream-50">
        <div className="max-w-5xl mx-auto px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {[
                { step: "01", title: "Call Us", desc: "Ask about sessions, pick your duration, check availability." },
                { step: "02", title: "Enroll", desc: "Lock in your spot. We handle the rest." },
                { step: "03", title: "Get Certified", desc: "Train hard, earn your Arabica Barista Certification." },
              ].map((item, idx) => (
                <div
                  key={item.step}
                  className={`py-12 md:py-16 px-6 text-center ${idx < 2 ? "md:border-r md:border-coffee-900/10" : ""}`}
                >
                  <div className="font-heading text-4xl md:text-5xl text-coffee-200 mb-4">
                    {item.step}
                  </div>
                  <div className="font-heading text-xl text-coffee-900 uppercase tracking-wider mb-2">
                    {item.title}
                  </div>
                  <div className="text-xs text-coffee-500 leading-relaxed max-w-[200px] mx-auto">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <AnimatedSection delay={0.1} direction="up">
            <BookOpen className="w-10 h-10 text-accent-500 mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-coffee-900 leading-tight mb-6">
              Your move.
            </h2>
            <p className="text-coffee-600 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Complete beginner or future café owner — it starts with one call.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <a href={`tel:${siteConfig.contact.phone}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Send a Message</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
