import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
  variant?: "default" | "gradient" | "accent";
}

export const Heading = ({ 
  level, 
  children, 
  className, 
  variant = "default" 
}: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const baseClasses = {
    1: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
    2: "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight",
    3: "text-2xl md:text-3xl font-bold leading-tight",
    4: "text-xl md:text-2xl font-semibold leading-tight",
    5: "text-lg md:text-xl font-semibold leading-tight",
    6: "text-base md:text-lg font-semibold leading-tight"
  };
  
  const variantClasses = {
    default: "text-foreground",
    gradient: "text-gradient",
    accent: "text-accent"
  };

  return (
    <Tag className={cn(
      baseClasses[level],
      variantClasses[variant],
      className
    )}>
      {children}
    </Tag>
  );
};