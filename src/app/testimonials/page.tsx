import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what our customers have to say about their experience at Arabica Coffee.",
};


export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section - Split Layout */}
      <section className="min-h-screen bg-cream-50">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left side - Full image */}
          <div className="relative min-h-[60vh] lg:min-h-screen order-2 lg:order-1">
            <Image
              src="/images/gallery/shop-interior-2.webp"
              alt="Arabica coffee shop interior"
              fill
              className="object-cover"
              priority
              sizes="50vw"
            />
          </div>

          {/* Right side - Text content */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-20 order-1 lg:order-2">
            <div className="max-w-lg">
              <p className="text-accent-500 text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Testimonials
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-coffee-900 leading-[0.95] mb-6">
                Stories
                <br />
                Being
                <br />
                <span className="text-accent-500">Written</span>
              </h1>
              <p className="text-coffee-600 text-lg leading-relaxed mb-10">
                We&apos;re collecting stories from our regulars, neighbours, and first-time visitors. This page will soon be filled with their words.
              </p>

              <div className="flex items-center gap-4 p-6 bg-cream-100 border border-coffee-200">
                <Coffee className="w-8 h-8 text-accent-500 shrink-0" />
                <p className="text-coffee-700 text-sm leading-relaxed">
                  In the meantime, come visit us and be part of the story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <p className="text-accent-500 text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Join Us
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-coffee-900 leading-[0.95] mb-6">
            Write Your
            <br />
            <span className="text-accent-500">Own Story</span>
          </h2>
          <p className="text-coffee-600 text-lg leading-relaxed mb-8">
            Every regular started as a first-time visitor. Come experience what everyone&apos;s talking about.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/menu">View Menu</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Visit Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
