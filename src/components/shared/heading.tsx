import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "hero";
  className?: string;
}

export function Heading({
  children,
  as: Component = "h2",
  size = "lg",
  className,
}: HeadingProps) {
  const sizeClasses = {
    xs: "text-lg md:text-xl",
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-5xl",
    "2xl": "text-5xl md:text-6xl",
    hero: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
  };

  return (
    <Component
      className={cn(
        "font-heading font-bold uppercase tracking-[0.05em] text-coffee-900",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Component>
  );
}

// Section header with optional subtitle
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("mb-12 max-w-3xl", alignClasses[align], className)}>
      <Heading as="h2" size="lg" className="mb-4">
        {title}
      </Heading>
      {subtitle && (
        <p className="text-base text-coffee-600">{subtitle}</p>
      )}
    </div>
  );
}
