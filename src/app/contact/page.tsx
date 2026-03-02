"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Send,
  CheckCircle,
  Coffee,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/constants";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// --- Schemas ---

const generalSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const academySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  course: z.string().min(1, "Please select a course"),
  experience: z.string().min(1, "Please select your experience level"),
  message: z.string().optional(),
});

type GeneralFormData = z.infer<typeof generalSchema>;
type AcademyFormData = z.infer<typeof academySchema>;
type FormType = "general" | "academy";

const courses = [
  "SCA-Certified Barista Skills",
];

const experienceLevels = [
  "Complete Beginner",
  "Home Brewer",
  "Some Caf\u00e9 Experience",
  "Professional Barista",
];

// --- Sub-components ---

function SuccessMessage({ type }: { type: FormType }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="w-12 h-12 bg-accent-500 flex items-center justify-center mb-4">
        <CheckCircle className="h-6 w-6 text-cream-50" />
      </div>
      <h3 className="font-heading text-xl text-coffee-900 mb-1">
        {type === "general" ? "Message Sent!" : "Inquiry Sent!"}
      </h3>
      <p className="text-coffee-500 text-sm">
        {type === "general"
          ? "We\u2019ll get back to you soon."
          : "Our team will reach out with course details shortly."}
      </p>
    </div>
  );
}

function GeneralForm({ onSuccess }: { onSuccess: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<GeneralFormData>({ resolver: zodResolver(generalSchema) });

  const onSubmit = async (data: GeneralFormData) => {
    const subject = encodeURIComponent(`Contact from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
    );
    window.open(`mailto:arabicaacademy27@gmail.com?subject=${subject}&body=${body}`, "_self");
    reset();
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="gen-name">Name *</Label>
          <Input id="gen-name" placeholder="Your name" {...register("name")} aria-invalid={errors.name ? "true" : "false"} />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="gen-email">Email *</Label>
          <Input id="gen-email" type="email" placeholder="your@email.com" {...register("email")} aria-invalid={errors.email ? "true" : "false"} />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="gen-message">Message *</Label>
        <Textarea id="gen-message" placeholder="How can we help you?" rows={4} {...register("message")} aria-invalid={errors.message ? "true" : "false"} />
        {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : (<>Send Message <Send className="ml-2 h-4 w-4" /></>)}
      </Button>
    </form>
  );
}

function AcademyForm({ onSuccess }: { onSuccess: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AcademyFormData>({ resolver: zodResolver(academySchema) });

  const onSubmit = async (data: AcademyFormData) => {
    const subject = encodeURIComponent(`Academy Inquiry from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nCourse: ${data.course}\nExperience: ${data.experience}${data.message ? `\n\n${data.message}` : ""}`
    );
    window.open(`mailto:arabicaacademy27@gmail.com?subject=${subject}&body=${body}`, "_self");
    reset();
    onSuccess();
  };

  const selectClasses =
    "flex h-10 w-full border border-coffee-300 bg-white px-3 py-2 text-sm text-coffee-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee-500 focus-visible:ring-offset-2";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="acad-name">Name *</Label>
          <Input id="acad-name" placeholder="Your name" {...register("name")} aria-invalid={errors.name ? "true" : "false"} />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="acad-email">Email *</Label>
          <Input id="acad-email" type="email" placeholder="your@email.com" {...register("email")} aria-invalid={errors.email ? "true" : "false"} />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="acad-course">Course *</Label>
          <select id="acad-course" className={selectClasses} defaultValue="" {...register("course")} aria-invalid={errors.course ? "true" : "false"}>
            <option value="" disabled>Select a course</option>
            {courses.map((c) => (<option key={c} value={c}>{c}</option>))}
          </select>
          {errors.course && <p className="text-xs text-red-500">{errors.course.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="acad-experience">Experience *</Label>
          <select id="acad-experience" className={selectClasses} defaultValue="" {...register("experience")} aria-invalid={errors.experience ? "true" : "false"}>
            <option value="" disabled>Select level</option>
            {experienceLevels.map((lvl) => (<option key={lvl} value={lvl}>{lvl}</option>))}
          </select>
          {errors.experience && <p className="text-xs text-red-500">{errors.experience.message}</p>}
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="acad-message">Anything else? (optional)</Label>
        <Textarea id="acad-message" placeholder="Goals, preferred schedule, questions..." rows={3} {...register("message")} />
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : (<>Submit Inquiry <Send className="ml-2 h-4 w-4" /></>)}
      </Button>
    </form>
  );
}

// --- Page ---

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<FormType>("general");
  const [submitted, setSubmitted] = useState<FormType | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleSuccess = (type: FormType) => {
    setSubmitted(type);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setSubmitted(null), 5000);
  };

  return (
    <section className="relative bg-cream-50 min-h-screen flex items-center justify-center py-28 px-6 overflow-hidden">
      {/* Step and Repeat Logo Backdrop */}
      <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-8 p-8 opacity-[0.04]" aria-hidden="true">
        {Array.from({ length: 64 }).map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt=""
              width={80}
              height={27}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-xl">
        {/* Tab Switcher */}
        <div className="flex mb-8 border-2 border-coffee-900">
          <button
            type="button"
            onClick={() => { setActiveTab("general"); setSubmitted(null); }}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold uppercase tracking-wide transition-colors",
              activeTab === "general"
                ? "bg-coffee-900 text-cream-50"
                : "bg-transparent text-coffee-700 hover:bg-coffee-100"
            )}
          >
            <Coffee className="w-4 h-4" />
            General
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab("academy"); setSubmitted(null); }}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold uppercase tracking-wide transition-colors border-l-2 border-coffee-900",
              activeTab === "academy"
                ? "bg-coffee-900 text-cream-50"
                : "bg-transparent text-coffee-700 hover:bg-coffee-100"
            )}
          >
            <GraduationCap className="w-4 h-4" />
            Academy
          </button>
        </div>

        {/* Form */}
        {submitted ? (
          <SuccessMessage type={submitted} />
        ) : activeTab === "general" ? (
          <GeneralForm onSuccess={() => handleSuccess("general")} />
        ) : (
          <AcademyForm onSuccess={() => handleSuccess("academy")} />
        )}

        {/* Contact details */}
        <div className="mt-10 pt-8 border-t border-coffee-200 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-coffee-500">
          <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 hover:text-coffee-900 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            {siteConfig.contact.phoneDisplay}
          </a>
          <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-coffee-900 transition-colors">
            <Mail className="w-3.5 h-3.5" />
            {siteConfig.contact.email}
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            {siteConfig.contact.address.street}, {siteConfig.contact.address.city}
          </span>
        </div>
      </div>
    </section>
  );
}
