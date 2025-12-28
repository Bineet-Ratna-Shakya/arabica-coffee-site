import Link from "next/link";
import { SectionContainer } from "@/components/shared/section-container";
import { Heading } from "@/components/shared/heading";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center">
      <SectionContainer className="text-center">
        <div className="max-w-md mx-auto">
          <div className="text-8xl font-heading font-bold text-coffee-200 mb-4">
            404
          </div>
          <Heading as="h1" size="lg" className="mb-4">
            Page Not Found
          </Heading>
          <p className="text-lg text-coffee-600 mb-8">
            Oops! It seems the page you're looking for has gone missing. Perhaps
            it's out getting coffee?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild>
              <Link href="/">Go Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/menu">View Menu</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
