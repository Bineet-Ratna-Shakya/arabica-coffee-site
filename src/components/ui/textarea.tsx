import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full border-2 border-coffee-900 bg-cream-50 px-4 py-3 text-base text-coffee-900 font-mono transition-all duration-200 placeholder:text-coffee-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee-900 focus-visible:ring-offset-2 focus-visible:border-coffee-700 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
