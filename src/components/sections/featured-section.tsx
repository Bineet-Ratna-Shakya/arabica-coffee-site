import Image from "next/image";
import { Coffee, Leaf, Heart, Droplets } from "lucide-react";

const features = [
  { icon: Coffee, title: "Slow Coffee", desc: "Hand-crafted with care" },
  { icon: Leaf, title: "SCA Academy", desc: "Certified training" },
  { icon: Heart, title: "Community Hub", desc: "Where coffee lovers meet" },
  { icon: Droplets, title: "Clean Ingredients", desc: "Pure & natural" },
];

export function FeaturedSection() {
  return (
    <section className="bg-cream-50">
      {/* Split layout section */}
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        {/* Left side - Text content */}
        <div className="flex flex-col justify-center px-5 sm:px-8 lg:px-16 py-12 sm:py-16 order-2 lg:order-1">
          <div className="max-w-lg">
            <p className="text-accent-500 text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Our Philosophy
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-coffee-900 leading-[0.95] mb-6">
              Minimal
              <br />
              Interiors,
              <br />
              Maximum
              <br />
              <span className="text-accent-500">Flavor</span>
            </h2>
            <p className="text-coffee-600 text-lg leading-relaxed mb-10">
              Arabica Beans and Academy Pvt. Ltd. is a specialty coffee house and barista training academy located in Bagbazar, Kathmandu. The caf&eacute; offers a cozy, modern, and comfortable environment suitable for individuals, friends, families, professionals, and tourists.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-coffee-900 text-cream-50 shrink-0">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-coffee-900 block">
                      {feature.title}
                    </span>
                    <span className="text-xs text-coffee-500">
                      {feature.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative min-h-[50vh] lg:min-h-full order-1 lg:order-2">
          <Image
            src="/images/IMG_2057.JPG.jpeg"
            alt="Arabica coffee shop seating area"
            fill
            className="object-cover"
            sizes="50vw"
          />
          {/* Floating stat card */}
          <div className="absolute bottom-8 left-8 bg-white p-5 shadow-lg max-w-[200px] hidden sm:block">
            <div className="flex gap-1 my-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-coffee-900" />
              ))}
            </div>
            <div className="text-xs text-coffee-600">Loved by our customers</div>
          </div>
        </div>
      </div>
    </section>
  );
}
