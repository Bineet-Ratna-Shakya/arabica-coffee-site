import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HelpCircle, Coffee, Clock, Wifi, Gift, Users, Leaf, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { faqItems } from "@/lib/data";
import { siteConfig } from "@/lib/constants";
import { FAQSchema } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Arabica Beans & Academy — hours, menu options, WiFi, private events, barista training, and more.",
  keywords: [
    "coffee shop FAQ",
    "cafe questions",
    "dairy free options",
    "WiFi coffee shop",
    "private events Kathmandu",
    "barista training FAQ",
    "coffee beans",
    "gluten free options",
  ],
  openGraph: {
    title: `FAQ | ${siteConfig.name}`,
    description:
      "Find answers to common questions about our coffee shop, menu, training programs, and more.",
    url: `${siteConfig.url}/faq`,
  },
};

function getIconForQuestion(question: string) {
  const q = question.toLowerCase();
  if (q.includes("hour") || q.includes("open")) return Clock;
  if (q.includes("wifi") || q.includes("laptop") || q.includes("work")) return Wifi;
  if (q.includes("event") || q.includes("book")) return Users;
  if (q.includes("bean") || q.includes("coffee")) return Coffee;
  if (q.includes("gift")) return Gift;
  if (q.includes("gluten") || q.includes("dairy") || q.includes("milk")) return Leaf;
  return HelpCircle;
}

export default function FAQPage() {
  const faqs = faqItems.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      {/* FAQ Schema for rich results */}
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="min-h-[70vh] bg-cream-50">
        <div className="grid lg:grid-cols-2 min-h-[70vh]">
          {/* Left side - Image */}
          <div className="relative min-h-[40vh] lg:min-h-full order-2 lg:order-1">
            <Image
              src="/images/gallery/shop-interior-1.webp"
              alt="Arabica coffee shop"
              fill
              className="object-cover"
              priority
              sizes="50vw"
            />

            {/* Floating card */}
            <div className="absolute top-8 left-8 bg-white p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-accent-500" />
                <div>
                  <div className="text-2xl font-bold text-coffee-900">{faqItems.length}</div>
                  <div className="text-xs text-coffee-600">Questions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-20 order-1 lg:order-2">
            <div className="max-w-lg">
              {/* Breadcrumbs */}
              <Breadcrumbs
                items={[{ name: "FAQ", href: "/faq" }]}
                className="mb-6"
              />

              <p className="text-accent-500 text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Help Center
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-coffee-900 leading-[0.95] mb-6">
                Common
                <br />
                <span className="text-accent-500">Questions</span>
              </h1>
              <p className="text-coffee-600 text-lg leading-relaxed">
                Everything you need to know about visiting Arabica, our menu options, private events, and barista training programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="space-y-0 divide-y divide-cream-200">
            {faqItems.map((item) => {
              const Icon = getIconForQuestion(item.question);
              return (
                <article
                  key={item.id}
                  className="py-8 first:pt-0 last:pb-0"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-cream-100 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-coffee-700" />
                    </div>
                    <div className="flex-1">
                      <h2
                        className="font-heading text-xl text-coffee-900 mb-3"
                        itemProp="name"
                      >
                        {item.question}
                      </h2>
                      <div
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                      >
                        <p
                          className="text-coffee-600 leading-relaxed"
                          itemProp="text"
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="bg-cream-100 py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-coffee-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-coffee-600 text-lg mb-8 max-w-xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Our team is happy to help with any questions about our coffee, training programs, or events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`tel:${siteConfig.contact.phone}`}>
                Call {siteConfig.contact.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-cream-50 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="font-heading text-2xl text-coffee-900 mb-8 text-center">
            Explore More
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/menu"
              className="group p-6 bg-white hover:bg-coffee-900 transition-colors"
            >
              <Coffee className="w-8 h-8 text-accent-500 mb-4 group-hover:text-accent-400" />
              <h3 className="font-heading text-lg text-coffee-900 group-hover:text-cream-50 mb-2">
                Our Menu
              </h3>
              <p className="text-sm text-coffee-600 group-hover:text-cream-300">
                Explore our full selection of coffees, drinks, and pastries.
              </p>
            </Link>

            <Link
              href="/about"
              className="group p-6 bg-white hover:bg-coffee-900 transition-colors"
            >
              <Users className="w-8 h-8 text-accent-500 mb-4 group-hover:text-accent-400" />
              <h3 className="font-heading text-lg text-coffee-900 group-hover:text-cream-50 mb-2">
                About Us
              </h3>
              <p className="text-sm text-coffee-600 group-hover:text-cream-300">
                Learn about our story, team, and coffee philosophy.
              </p>
            </Link>

            <Link
              href="/gallery"
              className="group p-6 bg-white hover:bg-coffee-900 transition-colors"
            >
              <MapPin className="w-8 h-8 text-accent-500 mb-4 group-hover:text-accent-400" />
              <h3 className="font-heading text-lg text-coffee-900 group-hover:text-cream-50 mb-2">
                The Space
              </h3>
              <p className="text-sm text-coffee-600 group-hover:text-cream-300">
                Take a visual tour of our cozy coffee shop.
              </p>
            </Link>

            <Link
              href="/contact"
              className="group p-6 bg-white hover:bg-coffee-900 transition-colors"
            >
              <Clock className="w-8 h-8 text-accent-500 mb-4 group-hover:text-accent-400" />
              <h3 className="font-heading text-lg text-coffee-900 group-hover:text-cream-50 mb-2">
                Visit Us
              </h3>
              <p className="text-sm text-coffee-600 group-hover:text-cream-300">
                Find our location, hours, and contact details.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
