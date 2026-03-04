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
  Clock,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/animated-section";
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
    title: "Structured Specialty Curriculum",
    desc: "Our program follows globally recognized specialty coffee standards aligned with SCA, ASCA & AST frameworks.",
  },
  {
    title: "Maximum Hands-on Training",
    desc: "80% practical, 20% theory. Train in a real café-simulated environment using professional espresso machines.",
  },
  {
    title: "Small Batch Attention",
    desc: "Personalized instruction ensures every student gets the hands-on time they need to build real confidence.",
  },
  {
    title: "Career & Internship Support",
    desc: "Career guidance, internship support, alumni network, and continued mentorship after graduation.",
  },
];

const idealFor = [
  "Beginners with no prior experience",
  "Coffee enthusiasts wanting professional skills",
  "Aspiring & future café owners",
  "Individuals planning to work abroad",
];

const curriculum = [
  {
    title: "Coffee Foundation & Specialty Knowledge",
    topics: [
      "Coffee origins and processing methods",
      "Arabica vs Robusta understanding",
    ],
  },
  {
    title: "Espresso Mastery",
    topics: [
      "Grinder calibration & dialing-in",
      "Extraction control & troubleshooting",
      "Consistency training",
      "Speed and workflow efficiency",
    ],
  },
  {
    title: "Milk Science & Latte Art",
    topics: [
      "Milk chemistry & texturing",
      "Classic & advanced latte art patterns",
      "Precision pouring techniques",
      "Service speed training",
    ],
  },
  {
    title: "Specialty Brewing Methods",
    topics: [
      "Pour-over techniques",
      "French press & AeroPress",
      "Cold brew & iced beverages",
    ],
  },
  {
    title: "Café Operations & Professional Skills",
    topics: [
      "Hygiene & machine maintenance",
      "Bar workflow management",
      "Customer communication & upselling",
      "POS and service efficiency",
    ],
  },
];

export default function AcademyPage() {
  return (
    <>
      {/* Hero */}
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
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-50 leading-[0.95] mb-6">
              Barista
              <br />
              Certification
              <br />
              <span className="text-accent-400">Program.</span>
            </h1>
            <p className="text-cream-50/50 text-sm md:text-base max-w-lg leading-relaxed mb-14">
              We transform enthusiasts into confident, skilled and industry-ready
              baristas through structured, hands-on training aligned with
              international specialty coffee standards.
            </p>
          </AnimatedSection>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
            {stats.map((stat, idx) => (
              <AnimatedSection key={stat.label} delay={0.3 + idx * 0.05} direction="up" className="h-full">
                <div className="bg-white/10 backdrop-blur-sm border border-cream-50/10 p-4 sm:p-5 h-full">
                  <stat.icon className="w-5 h-5 text-accent-400 mb-3" />
                  <p className="text-cream-50 font-heading text-xl sm:text-2xl mb-1">
                    {stat.value}
                  </p>
                  <p className="text-cream-50/40 text-[11px] uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About the Program */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <AnimatedSection delay={0.1} direction="up">
              <div className="max-w-xl">
                <p className="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4">
                  About the Program
                </p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-coffee-900 leading-tight mb-6">
                  Not just another course.
                </h2>
                <p className="text-coffee-600 text-base leading-relaxed mb-6">
                  Our Barista Certification Program is designed using structured
                  specialty coffee principles inspired by the Specialty Coffee
                  Association framework, combining deep coffee knowledge with
                  intensive hands-on practice.
                </p>
                <p className="text-coffee-500 text-sm leading-relaxed mb-8">
                  Our program follows globally recognized specialty coffee
                  standards and is aligned with the curriculum frameworks of:
                </p>
                <div className="space-y-3">
                  {[
                    "Specialty Coffee Association (SCA)",
                    "Asian Specialty Coffee Association (ASCA)",
                    "Authorized SCA Trainer (AST)",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Award className="w-4 h-4 text-accent-500 shrink-0" />
                      <span className="text-coffee-700 text-sm font-medium">{item}</span>
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

      {/* Who Is This For + Duration */}
      <section className="border-y-4 border-coffee-900 bg-cream-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2">
            {/* Ideal For */}
            <div className="py-12 md:py-16 md:pr-12 md:border-r md:border-coffee-900/10">
              <AnimatedSection delay={0.1} direction="up">
                <p className="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4">
                  Ideal For
                </p>
                <h3 className="font-heading text-2xl md:text-3xl text-coffee-900 leading-tight mb-6">
                  This course is for you if you&apos;re&hellip;
                </h3>
                <ul className="space-y-4">
                  {idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-coffee-700">
                      <ArrowRight className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>

            {/* Duration */}
            <div className="py-12 md:py-16 md:pl-12">
              <AnimatedSection delay={0.2} direction="up">
                <p className="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4">
                  Course Duration
                </p>
                <h3 className="font-heading text-2xl md:text-3xl text-coffee-900 leading-tight mb-6">
                  Two paths, one goal.
                </h3>
                <div className="space-y-6">
                  <div className="border-2 border-coffee-900 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-accent-500" />
                      <h4 className="font-heading text-lg text-coffee-900">1 Week Intensive</h4>
                    </div>
                    <p className="text-coffee-500 text-sm">Fast-track certification for focused learners.</p>
                  </div>
                  <div className="border-2 border-coffee-900 p-6 shadow-[4px_4px_0_0_theme(colors.coffee.900)]">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-accent-500" />
                      <h4 className="font-heading text-lg text-coffee-900">1 Month Advanced</h4>
                    </div>
                    <p className="text-coffee-500 text-sm">Deep professional program with extended practice.</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3 bg-cream-100 p-4">
                  <Wrench className="w-5 h-5 text-coffee-400 shrink-0" />
                  <p className="text-coffee-600 text-sm">
                    <span className="font-bold">80% Practical</span> | 20% Theory — trained in a real café-simulated environment.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
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

      {/* Full Curriculum */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <AnimatedSection delay={0.1} direction="up">
            <div className="max-w-2xl mb-16">
              <p className="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4">
                What You Will Learn
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-coffee-900 leading-tight">
                Full Curriculum.
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {curriculum.map((module, idx) => (
              <AnimatedSection key={module.title} delay={0.1 + idx * 0.05} direction="up">
                <div className="border-2 border-coffee-900 p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <span className="font-heading text-3xl text-coffee-200 shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-lg md:text-xl text-coffee-900 uppercase tracking-wider pt-1">
                      {module.title}
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 pl-12">
                    {module.topics.map((topic) => (
                      <div key={topic} className="flex items-start gap-2 text-sm text-coffee-700">
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
                Certification
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-cream-50 leading-tight mb-6">
                Arabica Barista<br />
                Certification.
              </h2>
              <p className="text-cream-50/60 text-sm leading-relaxed mb-6">
                Upon successful completion, students receive the Arabica Barista
                Certification, reflecting advanced practical competency and
                specialty coffee knowledge aligned with SCA, ASCA & AST standards.
              </p>
              <p className="text-cream-50/40 text-sm leading-relaxed">
                Your certification is recognized by cafés and employers worldwide —
                opening doors to careers across Nepal and abroad.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Arabica */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <AnimatedSection delay={0.1} direction="up">
            <div className="max-w-2xl mb-12">
              <p className="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4">
                Why Choose Arabica
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-coffee-900 leading-tight">
                Built different.
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {whyUs.map((item, idx) => (
              <AnimatedSection key={item.title} delay={0.1 + idx * 0.05} direction="up">
                <div className="border-2 border-coffee-900 p-8 shadow-[4px_4px_0_0_theme(colors.coffee.900)] h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-5 h-5 text-accent-500 shrink-0" />
                    <h3 className="font-heading text-lg text-coffee-900 uppercase tracking-wider">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-coffee-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y-4 border-coffee-900 bg-cream-50">
        <div className="max-w-5xl mx-auto px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {[
                { step: "01", title: "Call Us", desc: "Learn about upcoming sessions, duration options, and availability." },
                { step: "02", title: "Enroll", desc: "Reserve your spot. We'll schedule your session and prep materials." },
                { step: "03", title: "Certify", desc: "Complete training, earn your Arabica Barista Certification." },
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
              Ready to start?
            </h2>
            <p className="text-coffee-600 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Whether you&apos;re a complete beginner or planning to open your
              own café — give us a call and we&apos;ll get you started.
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
