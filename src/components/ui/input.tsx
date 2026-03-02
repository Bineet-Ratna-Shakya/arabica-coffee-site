import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full border-2 border-coffee-900 bg-cream-50 px-4 py-2 text-base text-coffee-900 font-mono transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-bold file:text-coffee-900 file:uppercase placeholder:text-coffee-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee-900 focus-visible:ring-offset-2 focus-visible:border-coffee-700 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
