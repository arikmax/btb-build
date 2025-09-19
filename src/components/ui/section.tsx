import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "gray" | "dark";
  size?: "default" | "large" | "small";
}

export const Section = ({ 
  children, 
  className, 
  variant = "default",
  size = "default" 
}: SectionProps) => {
  const variantClasses = {
    default: "bg-background",
    gray: "bg-muted/30",
    dark: "bg-primary text-primary-foreground"
  };
  
  const sizeClasses = {
    default: "py-16 md:py-20",
    large: "py-20 md:py-24", 
    small: "py-12 md:py-16"
  };

  return (
    <section className={cn(
      variantClasses[variant],
      sizeClasses[size],
      className
    )}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};