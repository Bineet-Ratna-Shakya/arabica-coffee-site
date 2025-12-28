"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Heading } from "@/components/shared/heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/constants";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-coffee-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <SectionContainer className="relative text-center">
          <AnimatedSection>
            <Heading as="h1" size="hero" className="text-cream-50 mb-6">
              Contact Us
            </Heading>
            <p className="text-xl text-cream-200 max-w-3xl mx-auto">
              We'd love to hear from you. Drop by, give us a call, or send us a
              message.
            </p>
          </AnimatedSection>
        </SectionContainer>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <AnimatedSection direction="left">
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold text-coffee-800 mb-6">
                    Send Us a Message
                  </h2>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-coffee-800 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-coffee-600">
                        Thank you for reaching out. We'll get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          {...register("name")}
                          aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name && (
                          <p className="text-sm text-red-600">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          {...register("email")}
                          aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-600">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (optional)</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          {...register("phone")}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="How can we help you?"
                          rows={5}
                          {...register("message")}
                          aria-invalid={errors.message ? "true" : "false"}
                        />
                        {errors.message && (
                          <p className="text-sm text-red-600">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-8">
                {/* Info Cards */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-6 w-6 text-gold-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-coffee-800 mb-1">
                          Address
                        </h3>
                        <p className="text-sm text-coffee-600">
                          {siteConfig.contact.address}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                        <Phone className="h-6 w-6 text-gold-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-coffee-800 mb-1">
                          Phone
                        </h3>
                        <a
                          href={`tel:${siteConfig.contact.phone}`}
                          className="text-sm text-coffee-600 hover:text-coffee-800"
                        >
                          {siteConfig.contact.phone}
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                        <Mail className="h-6 w-6 text-gold-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-coffee-800 mb-1">
                          Email
                        </h3>
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="text-sm text-coffee-600 hover:text-coffee-800"
                        >
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                        <Clock className="h-6 w-6 text-gold-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-coffee-800 mb-1">
                          Hours
                        </h3>
                        <p className="text-sm text-coffee-600">
                          Mon-Fri: {siteConfig.hours.weekdays}
                          <br />
                          Sat: {siteConfig.hours.saturday}
                          <br />
                          Sun: {siteConfig.hours.sunday}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Map */}
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7066465813897!2d-118.2436849!3d34.0522342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b85dea2a93%3A0x1ff47c3ceb7bb2d5!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Arabica Coffee Location"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
