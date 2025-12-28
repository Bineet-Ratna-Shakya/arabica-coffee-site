"use client";

import { useEffect } from "react";
import { SectionContainer } from "@/components/shared/section-container";
import { Heading } from "@/components/shared/heading";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[60vh] flex items-center">
      <SectionContainer className="text-center">
        <div className="max-w-md mx-auto">
          <div className="text-6xl mb-4">☕</div>
          <Heading as="h1" size="lg" className="mb-4">
            Something Went Wrong
          </Heading>
          <p className="text-lg text-coffee-600 mb-8">
            We spilled some coffee on our servers. Please try again, and if the
            problem persists, let us know.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={reset}>Try Again</Button>
            <Button variant="outline" onClick={() => window.location.href = "/"}>
              Go Home
            </Button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
