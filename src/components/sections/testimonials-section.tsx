import Link from "next/link";
import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  return (
    <section className="bg-cream-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-accent-500 text-xs font-bold uppercase tracking-[0.3em] mb-3">
              Testimonials
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-coffee-900 leading-tight">
              Our Regulars
            </h2>
          </div>
          <p className="text-coffee-500 text-sm max-w-sm leading-relaxed">
            Stories from the people who make Arabica their second home.
          </p>
        </div>

        <div className="relative border-2 border-coffee-900 p-8 md:p-12 shadow-[6px_6px_0_0_theme(colors.coffee.900)]">
          <div className="flex flex-col items-center text-center max-w-md mx-auto">
            <Coffee className="w-10 h-10 text-accent-500 mb-6" />
            <h3 className="font-heading text-2xl md:text-3xl text-coffee-900 mb-4">
              Coming Soon
            </h3>
            <p className="text-coffee-600 leading-relaxed mb-8">
              We&apos;re gathering stories from our customers. Check back soon to read what they have to say.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">Visit Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
