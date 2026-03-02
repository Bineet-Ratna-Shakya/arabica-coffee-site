"use client";

import { useState, useEffect, useRef } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const subject = encodeURIComponent("Newsletter Subscription");
      const body = encodeURIComponent(`I'd like to subscribe to the Arabica newsletter.\n\nEmail: ${email}`);
      window.open(`mailto:arabicaacademy27@gmail.com?subject=${subject}&body=${body}`, "_self");
      setIsSubmitted(true);
      setEmail("");
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="bg-cream-50 border-y-4 border-coffee-900 py-16">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-coffee-900 mb-4">
          Stay Updated
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
          />
          <Button type="submit" disabled={isSubmitted}>
            {isSubmitted ? (
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Done
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Join
                <Send className="h-4 w-4" />
              </span>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}
