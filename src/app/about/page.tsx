import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ParallaxImage } from "@/components/effects/parallax";
import { AnimatedSection } from "@/components/shared/animated-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story of Arabica Beans & Academy — a specialty coffee house and SCA-certified barista school born in the heart of Kathmandu.",
};

const values = [
  { num: "01", word: "Patience", line: "Every cup takes exactly as long as it needs. Not a second less." },
  { num: "02", word: "Honesty", line: "No artificial anything. If the bean isn't good, we don't serve it." },
  { num: "03", word: "Craft", line: "Repetition until the hands know what the mind has forgotten." },
  { num: "04", word: "Openness", line: "The door is always open. The bar is always a classroom." },
];

const stats = [
  { number: "1", label: "Location" },
  { number: "500+", label: "Baristas trained" },
  { number: "50K+", label: "Cups poured" },
  { number: "1", label: "Purple house" },
];

const galleryImages = [
  { src: "/images/IMG_2036.JPG.jpeg", alt: "Arabica lounge with leather sofas" },
  { src: "/images/IMG_2024.JPG.jpeg", alt: "Arabica counter — brew bar" },
  { src: "/images/IMG_2067.JPG.jpeg", alt: "Arabica counter with pendant lights" },
];

export default function AboutPage() {
  return (
    <>
      {/* Chapter 0 — The Cover */}
      <section className="relative min-h-screen bg-coffee-900 flex items-center justify-center overflow-hidden">
        <ParallaxImage speed={0.15} className="absolute inset-0">
          <Image
            src="/images/IMG_2058.JPG.jpeg"
            alt="Arabica interior, soft light through windows"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </ParallaxImage>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <AnimatedSection delay={0.2} direction="up" duration={0.8}>
            <p className="text-cream-50/50 text-xs uppercase tracking-[0.4em] mb-8">
              Bagbazar, Kathmandu
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream-50 leading-[0.9] mb-8">
              A story
              <br />
              brewed
              <br />
              <span className="text-accent-400">slowly.</span>
            </h1>
            <p className="text-cream-50/60 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto">
              This is not a brand story. This is what happens when people who love coffee
              refuse to serve it badly.
            </p>
          </AnimatedSection>
        </div>
        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-50/30 text-xs uppercase tracking-[0.3em]">
          scroll
        </div>
      </section>

      {/* Marquee strip */}
      <div className="overflow-hidden border-y-4 border-coffee-900 bg-coffee-900 py-4">
        <div className="marquee-track gap-12 pr-12">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="text-cream-50/80 text-xs font-heading uppercase tracking-[0.3em] whitespace-nowrap shrink-0"
            >
              Specialty Coffee &middot; SCA Academy &middot; Bagbazar, Kathmandu &middot;
            </span>
          ))}
        </div>
      </div>

      {/* Chapter I — The Beginning */}
      <section className="bg-cream-50 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl mx-auto px-8">
          <AnimatedSection delay={0.1} direction="up">
            <p className="text-accent-500 text-xs uppercase tracking-[0.3em] mb-12">
              Chapter I
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-coffee-900 leading-tight mb-10">
              Before the first cup.
            </h2>
            <div className="space-y-6 text-coffee-700 text-lg leading-[1.85]">
              <p>
                There was no grand plan. No investor deck. No five-year roadmap
                pinned to a wall. There was just a question that wouldn&apos;t
                go away:
              </p>
              <blockquote className="border-l-4 border-coffee-900 pl-6 my-10 text-coffee-900 font-heading text-2xl md:text-3xl leading-snug">
                &ldquo;Why does nobody here treat coffee the way it deserves to be treated?&rdquo;
              </blockquote>
              <p>
                Kathmandu was full of cafés. Loud ones, pretty ones, ones that
                sold the idea of coffee more than coffee itself. Milk drowned the espresso.
                Sugar hid the beans. The ritual was missing.
              </p>
              <p>
                So we found a purple house in Bagbazar. Stripped it down to bare walls.
                And started over.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Photo grid — 3 images */}
      <section className="grid grid-cols-3 h-[40vh] md:h-[50vh]">
        {galleryImages.map((img) => (
          <div key={img.src} className="relative overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="33vw"
            />
          </div>
        ))}
      </section>

      {/* Chapter II — The Philosophy */}
      <section className="bg-cream-50 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl mx-auto px-8">
          <AnimatedSection delay={0.1} direction="up">
            <p className="text-accent-500 text-xs uppercase tracking-[0.3em] mb-12">
              Chapter II
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-coffee-900 leading-tight mb-10">
              What we believe.
            </h2>
            <div className="space-y-6 text-coffee-700 text-lg leading-[1.85]">
              <p>
                Coffee is not a product. It is a practice. It asks you to slow down
                in a world that won&apos;t. To notice temperature, weight, time. To care
                about something small enough to hold in both hands.
              </p>
              <p>
                We don&apos;t believe in shortcuts. We don&apos;t believe in artificial
                flavors, in syrup that masks, in speed that sacrifices. We believe a single
                origin pour-over at the right temperature can change the way someone
                sees their morning.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values — brutalist cards */}
      <section className="bg-cream-50 pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <AnimatedSection key={v.num} delay={0.1} direction="up">
                <div className="border-2 border-coffee-900 p-8 shadow-[4px_4px_0_0_theme(colors.coffee.900)] h-full">
                  <span className="text-coffee-200 font-heading text-5xl leading-none block mb-4">
                    {v.num}
                  </span>
                  <h3 className="font-heading text-xl text-coffee-900 uppercase tracking-wider mb-3">
                    {v.word}
                  </h3>
                  <p className="text-coffee-600 text-sm leading-relaxed">{v.line}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image break */}
      <ParallaxImage speed={0.1} className="h-[50vh] md:h-[60vh]">
        <Image
          src="/images/IMG_2029.JPG.jpeg"
          alt="The counter at Arabica — equipment, light, ritual"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </ParallaxImage>

      {/* The Numbers — bold brutalist */}
      <section className="border-y-4 border-coffee-900 bg-coffee-900">
        <div className="max-w-5xl mx-auto px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`py-12 md:py-16 text-center ${idx < stats.length - 1 ? "md:border-r md:border-cream-50/10" : ""}`}
                >
                  <div className="font-heading text-4xl md:text-5xl text-cream-50">{stat.number}</div>
                  <div className="text-xs text-cream-50/40 uppercase tracking-[0.2em] mt-3">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Closing — The Invitation */}
      <section className="bg-cream-50 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <AnimatedSection delay={0.1} direction="up">
            <p className="text-accent-500 text-xs uppercase tracking-[0.3em] mb-12">
              The rest is unwritten
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-coffee-900 leading-tight mb-8">
              Come sit with us.
            </h2>
            <p className="text-coffee-600 text-lg leading-relaxed mb-12 max-w-lg mx-auto">
              We don&apos;t have a grand conclusion. The story is still being written —
              one cup, one student, one quiet morning at a time.
              The best way to understand Arabica is to be here.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Visit Arabica</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/menu">See What We Pour</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
