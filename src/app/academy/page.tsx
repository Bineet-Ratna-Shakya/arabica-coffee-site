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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/animated-section";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Academy",
  description:
    "SCA-certified barista training academy at Arabica, Bagbazar, Kathmandu. Hands-on barista training in a real café environment.",
};

const stats = [
  { icon: GraduationCap, value: "SCA", label: "Certified Partner" },
  { icon: Coffee, value: "40+", label: "Hands-on Hours" },
  { icon: Award, value: "98%", label: "Success Rate" },
  { icon: Users, value: "500+", label: "Trained Baristas" },
];

const whyUs = [
  {
    title: "SCA-Certified Curriculum",
    desc: "Our programs follow the Specialty Coffee Association standards — recognized worldwide.",
  },
  {
    title: "Real Café Environment",
    desc: "Train on the same equipment, with the same pressure, in a working specialty café.",
  },
  {
    title: "Small Batch Classes",
    desc: "Maximum 6 students per session. Everyone gets hands-on time, every single day.",
  },
  {
    title: "Job Placement Support",
    desc: "Our graduates work in top cafés across Nepal and abroad. We help connect you.",
  },
];

const courseTopics = [
  "Espresso extraction & dialing in",
  "Milk texturing & latte art",
  "Grind science & dose calibration",
  "Workflow & hygiene standards",
  "Sensory evaluation & cupping",
  "SCA exam preparation",
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
              The Academy
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-50 leading-[0.95] mb-6">
              Master the
              <br />
              art of <span className="text-accent-400">coffee.</span>
            </h1>
            <p className="text-cream-50/50 text-sm md:text-base max-w-md leading-relaxed mb-14">
              SCA-certified barista training in the heart of Kathmandu.
              From first pour to professional certification.
            </p>
          </AnimatedSection>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {stats.map((stat, idx) => (
              <AnimatedSection key={stat.label} delay={0.3 + idx * 0.05} direction="up">
                <div className="bg-white/10 backdrop-blur-sm border border-cream-50/10 p-5">
                  <stat.icon className="w-5 h-5 text-accent-400 mb-3" />
                  <p className="text-cream-50 font-heading text-2xl mb-1">
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

      {/* Why Train With Us */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            <AnimatedSection delay={0.1} direction="up">
              <div className="max-w-xl">
                <p className="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4">
                  Why Arabica
                </p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-coffee-900 leading-tight mb-6">
                  Not just another course.
                </h2>
                <p className="text-coffee-600 text-lg leading-relaxed">
                  We train baristas in a real, working café — not a classroom.
                  Every session is hands-on, every instructor is SCA-certified,
                  and every student gets the attention they deserve.
                </p>
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

      {/* Barista Training Course */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <AnimatedSection delay={0.1} direction="up">
            <div className="max-w-2xl mb-16">
              <p className="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4">
                Our Program
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-coffee-900 leading-tight">
                Barista Training.
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} direction="up">
            <div className="border-2 border-coffee-900 shadow-[4px_4px_0_0_theme(colors.coffee.900)]">
              <div className="grid md:grid-cols-2">
                {/* Course image */}
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <Image
                    src="/images/IMG_2073.JPG.jpeg"
                    alt="Arabica training facility with professional espresso machines"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Course details */}
                <div className="p-8 md:p-10">
                  <h3 className="font-heading text-2xl md:text-3xl text-coffee-900 leading-tight mb-4">
                    SCA-Certified Barista Skills
                  </h3>
                  <p className="text-coffee-600 text-sm leading-relaxed mb-8">
                    The complete barista training program — from foundation to
                    intermediate. Learn espresso extraction, milk science, latte
                    art, and sensory evaluation from SCA-certified trainers in
                    our dedicated training facility.
                  </p>

                  <p className="text-xs text-coffee-400 uppercase tracking-[0.2em] mb-4">
                    What you&apos;ll learn
                  </p>
                  <ul className="space-y-3 mb-8">
                    {courseTopics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2 text-sm text-coffee-700">
                        <ArrowRight className="w-3.5 h-3.5 text-accent-500 mt-0.5 shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-coffee-100">
                    <p className="text-coffee-500 text-sm mb-4">
                      For schedule, pricing, and enrollment details:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild>
                        <a href={`tel:${siteConfig.contact.phone}`}>
                          <Phone className="w-4 h-4 mr-2" />
                          Call Us
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/contact">Send a Message</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SCA Certifications */}
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
                Credentials
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-cream-50 leading-tight mb-6">
                SCA-certified.<br />
                Globally recognized.
              </h2>
              <p className="text-cream-50/60 text-sm leading-relaxed mb-6">
                Our training programs are certified by the Specialty Coffee
                Association — the global standard for coffee education. When you
                train with us, your certification is recognized by cafés and
                employers worldwide.
              </p>
              <p className="text-cream-50/40 text-sm leading-relaxed">
                Have questions about certification levels or requirements?
                Give us a call — we&apos;re happy to walk you through everything.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y-4 border-coffee-900 bg-cream-50">
        <div className="max-w-5xl mx-auto px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {[
                { step: "01", title: "Call Us", desc: "Give us a call to learn about upcoming sessions and availability." },
                { step: "02", title: "Enroll", desc: "Reserve your spot. We'll schedule your session and prep materials." },
                { step: "03", title: "Certify", desc: "Complete training, pass the exam, and earn your SCA certification." },
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
              Whether you&apos;re a complete beginner or a working barista
              looking for SCA certification — give us a call and we&apos;ll
              get you started.
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
