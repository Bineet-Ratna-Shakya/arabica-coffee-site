import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold uppercase tracking-[0.1em] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-coffee-900",
  {
    variants: {
      variant: {
        default:
          "bg-coffee-900 text-cream-50 shadow-[4px_4px_0_0_theme(colors.coffee.400)] hover:bg-coffee-800 hover:shadow-[2px_2px_0_0_theme(colors.coffee.400)] hover:translate-x-[2px] hover:translate-y-[2px]",
        secondary:
          "bg-cream-200 text-coffee-900 shadow-[4px_4px_0_0_theme(colors.coffee.900)] hover:bg-cream-300 hover:shadow-[2px_2px_0_0_theme(colors.coffee.900)] hover:translate-x-[2px] hover:translate-y-[2px]",
        outline:
          "bg-transparent text-coffee-900 hover:bg-coffee-900 hover:text-cream-50",
        ghost:
          "border-transparent text-coffee-900 hover:border-coffee-900 hover:bg-cream-100",
        link:
          "border-transparent text-coffee-900 underline-offset-4 hover:underline bg-transparent",
        brutal:
          "bg-cream-50 text-coffee-900 shadow-[4px_4px_0_0_theme(colors.coffee.900)] hover:shadow-[2px_2px_0_0_theme(colors.coffee.900)] hover:translate-x-[2px] hover:translate-y-[2px]",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
