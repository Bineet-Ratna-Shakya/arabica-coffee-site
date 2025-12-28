"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate submission
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 via-cream-100 to-coffee-100" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23946F4A' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <SectionContainer className="relative">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-coffee-900 mb-4">
            Stay in the Loop
          </h2>
          <p className="text-lg text-coffee-600 mb-8">
            Subscribe to our newsletter for exclusive offers, new menu items,
            and coffee tips delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              aria-label="Email address"
            />
            <Button type="submit" className="shrink-0" disabled={isSubmitted}>
              {isSubmitted ? (
                <motion.span
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle className="h-4 w-4" />
                  Subscribed!
                </motion.span>
              ) : (
                <span className="flex items-center gap-2">
                  Subscribe
                  <Send className="h-4 w-4" />
                </span>
              )}
            </Button>
          </form>

          <p className="mt-4 text-xs text-coffee-400">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </AnimatedSection>
      </SectionContainer>
    </section>
  );
}
