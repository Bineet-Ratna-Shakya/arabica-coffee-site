"use client";

import Image from "next/image";

function LogoSet({ prefix }: { prefix: string }) {
  return (
    <>
      {Array.from({ length: 10 }).map((_, idx) => (
        <Image
          key={`${prefix}-${idx}`}
          src="/images/logo.png"
          alt="Arabica"
          width={100}
          height={33}
          className="h-6 w-auto opacity-80 shrink-0"
        />
      ))}
    </>
  );
}

export function BrandStrip() {
  return (
    <div className="relative overflow-hidden border-y-4 border-coffee-900 bg-white py-3">
      <div className="marquee-track gap-10 pr-10">
        <LogoSet prefix="a" />
        <LogoSet prefix="b" />
      </div>
    </div>
  );
}
