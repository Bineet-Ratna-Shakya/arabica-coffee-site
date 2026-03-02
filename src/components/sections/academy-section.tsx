import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Coffee, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: GraduationCap, title: "SCA Certified", value: "100%" },
  { icon: Coffee, title: "Hands-on Hours", value: "40+" },
  { icon: Award, title: "Success Rate", value: "98%" },
  { icon: Users, title: "Trained Baristas", value: "500+" },
];

export function AcademySection() {
  return (
    <section className="bg-cream-100">
      {/* Split layout */}
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        {/* Left side - Image */}
        <div className="relative min-h-[50vh] lg:min-h-full">
          <Image
            src="/images/IMG_2068.JPG.jpeg"
            alt="Arabica Barista Coffee School training area"
            fill
            className="object-cover"
            sizes="50vw"
          />

          {/* Floating certification badge */}
          <div className="absolute top-8 right-8 bg-white p-4 shadow-lg hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-coffee-900 flex items-center justify-center">
                <Award className="w-6 h-6 text-cream-50" />
              </div>
              <div>
                <div className="font-bold text-coffee-900 text-sm">SCA</div>
                <div className="text-xs text-coffee-600">Certified Partner</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="flex flex-col justify-center px-5 sm:px-8 lg:px-16 py-12 sm:py-16 text-coffee-900">
          <div className="max-w-lg">
            <p className="text-accent-500 text-sm font-bold uppercase tracking-[0.2em] mb-4">
              The Academy
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-6">
              Master
              <br />
              The Art of
              <br />
              <span className="text-accent-500">Coffee</span>
            </h2>
            <p className="text-coffee-600 text-lg leading-relaxed mb-10">
              SCA-certified barista training program. From beginner to professional, learn from Nepal&apos;s finest coffee educators.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {highlights.map((item) => (
                <div key={item.title}>
                  <div className="text-3xl font-bold text-coffee-900 mb-1">{item.value}</div>
                  <div className="text-sm text-coffee-500 flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    {item.title}
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Enroll Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
