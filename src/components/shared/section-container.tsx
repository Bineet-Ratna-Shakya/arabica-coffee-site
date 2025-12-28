import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
  size?: "default" | "narrow" | "wide" | "full";
  padding?: "default" | "large" | "none";
}

export function SectionContainer({
  children,
  className,
  id,
  as: Component = "section",
  size = "default",
  padding = "default",
}: SectionContainerProps) {
  const sizeClasses = {
    default: "max-w-7xl",
    narrow: "max-w-4xl",
    wide: "max-w-[1400px]",
    full: "max-w-full",
  };

  const paddingClasses = {
    default: "py-16 md:py-24",
    large: "py-24 md:py-32",
    none: "",
  };

  return (
    <Component
      id={id}
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </Component>
  );
}
