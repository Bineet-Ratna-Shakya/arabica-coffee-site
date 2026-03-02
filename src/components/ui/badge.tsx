import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border-2 border-coffee-900 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] focus:outline-none focus:ring-2 focus:ring-coffee-900 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-coffee-900 text-cream-50",
        secondary:
          "bg-cream-200 text-coffee-900",
        outline:
          "bg-transparent text-coffee-900",
        accent:
          "bg-cream-300 text-coffee-900",
        new:
          "bg-coffee-900 text-cream-50",
        popular:
          "bg-coffee-900 text-cream-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
