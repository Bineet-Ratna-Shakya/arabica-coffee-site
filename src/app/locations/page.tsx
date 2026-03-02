import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Car,
  Wifi,
  Sun,
  AirVent,
  CreditCard,
  Baby,
  Dog,
  Armchair,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import { AnimatedSection } from "@/components/shared/animated-section";

export const metadata: Metadata = {
  title: "Location",
  description:
    "Find Arabica Beans & Academy at Purple House, Bagbazar, Kathmandu. Parking available and open 7 days a week.",
};

const amenities = [
  { icon: Car, label: "Parking Available", desc: "Underground parking in building" },
  { icon: Wifi, label: "Free Wi-Fi", desc: "High-speed internet" },
  { icon: Sun, label: "Outdoor Seating", desc: "Fresh air & sunshine" },
  { icon: AirVent, label: "Air Conditioned", desc: "Climate controlled" },
  { icon: CreditCard, label: "Card Payments", desc: "Visa, Mastercard, eSewa" },
  { icon: Baby, label: "Family Friendly", desc: "High chairs available" },
  { icon: Dog, label: "Pet Friendly", desc: "Outdoor seating for pets" },
  { icon: Armchair, label: "Lounge Seating", desc: "Comfortable work spots" },
];

const hours = [
  { days: "Monday – Friday", time: siteConfig.hours.weekdays },
  { days: "Saturday", time: siteConfig.hours.saturday },
  { days: "Sunday", time: siteConfig.hours.sunday },
];

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-coffee-900 overflow-hidden">
        <Image
          src="/images/purplehouse.png"
          alt="Purple House — Arabica Bagbazar"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 w-full px-6 md:px-8 pt-24 md:pt-32 pb-20 md:pb-24 max-w-6xl mx-auto">
          <AnimatedSection delay={0.2} direction="up" duration={0.8}>
            <p className="text-accent-400 text-xs uppercase tracking-[0.4em] mb-4">
              Visit Us
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-cream-50 leading-[0.95] mb-6">
              Come find your
              <br />
              new favourite spot.
            </h1>
            <p className="text-cream-50/50 text-sm max-w-md leading-relaxed mb-14">
              Purple House, Bagbazar — open 7 days a week with everything you need for a perfect visit.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {amenities.map((amenity, idx) => (
              <AnimatedSection key={amenity.label} delay={0.3 + idx * 0.05} direction="up">
                <div className="bg-white/10 backdrop-blur-sm border border-cream-50/10 p-4">
                  <amenity.icon className="w-5 h-5 text-accent-400 mb-3" />
                  <p className="text-cream-50 text-xs font-bold uppercase tracking-wider mb-1">
                    {amenity.label}
                  </p>
                  <p className="text-cream-50/40 text-[11px] leading-relaxed">
                    {amenity.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location Details + Map */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left — Info */}
            <AnimatedSection delay={0.1} direction="up">
              <div>
                <p className="text-accent-500 text-xs uppercase tracking-[0.3em] mb-4">
                  Location
                </p>
                <h2 className="font-heading text-3xl md:text-4xl text-coffee-900 leading-tight mb-8">
                  How to reach us
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-coffee-900 flex items-center justify-center text-cream-50 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-coffee-900 text-sm">Address</div>
                      <div className="text-coffee-600 text-sm">{siteConfig.contact.address.full}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-coffee-900 flex items-center justify-center text-cream-50 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-coffee-900 text-sm">Phone</div>
                      <div className="text-coffee-600 text-sm">{siteConfig.contact.phoneDisplay}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-coffee-900 flex items-center justify-center text-cream-50 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-coffee-900 text-sm">Email</div>
                      <div className="text-coffee-600 text-sm">{siteConfig.contact.email}</div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="mt-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-coffee-900" />
                    <h3 className="font-heading text-xl text-coffee-900">Opening Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {hours.map((h) => (
                      <div key={h.days} className="flex justify-between border-b border-coffee-200 pb-3">
                        <span className="text-sm text-coffee-700 font-medium">{h.days}</span>
                        <span className="text-sm text-coffee-500">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <Button size="lg" asChild>
                    <Link
                      href={siteConfig.contact.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View in Google Maps
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Right — Map */}
            <AnimatedSection delay={0.2} direction="up">
              <div className="relative w-full h-full min-h-[400px] bg-coffee-100">
                <iframe
                  title="Arabica Beans & Academy Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.8!2d85.3222866!3d27.7057538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900545ab7e1%3A0xbd046ba23082f846!2sPurple%20House!5e0!3m2!1sen!2snp!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 400 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* Interior Image */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <Image
          src="/images/IMG_2037.JPG.jpeg"
          alt="Inside Arabica — Bagbazar"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* CTA */}
      <section className="bg-cream-50 py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <AnimatedSection delay={0.1} direction="up">
            <h2 className="font-heading text-3xl md:text-4xl text-coffee-900 leading-tight italic mb-6">
              Come say hello.
            </h2>
            <p className="text-coffee-600 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Whether you&apos;re here for a quiet espresso, a study session, or just
              to escape the noise — the door is always open.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/menu">View Menu</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
