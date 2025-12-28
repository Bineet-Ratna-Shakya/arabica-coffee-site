import { SectionContainer } from "@/components/shared/section-container";

export default function Loading() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <SectionContainer className="text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="relative h-16 w-16">
            <div className="absolute inset-0 rounded-full border-4 border-cream-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-coffee-600 border-t-transparent animate-spin"></div>
          </div>
          <p className="text-coffee-600 font-medium">Brewing your page...</p>
        </div>
      </SectionContainer>
    </section>
  );
}
