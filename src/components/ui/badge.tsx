import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-coffee-700 text-cream-50",
        secondary:
          "border-transparent bg-cream-200 text-coffee-700",
        outline: 
          "border-coffee-300 text-coffee-700",
        gold:
          "border-transparent bg-gold-500 text-coffee-950",
        new:
          "border-transparent bg-green-600 text-white",
        popular:
          "border-transparent bg-red-500 text-white",
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
