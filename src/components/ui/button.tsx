import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-primary-foreground shadow-[0_10px_30px_rgba(8,112,184,0.15)] hover:bg-primary/90 hover:scale-[1.02]",
      secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90 hover:scale-[1.02]",
      accent: "bg-accent text-accent-foreground shadow-sm hover:bg-accent/90 hover:scale-[1.02]",
      outline: "border-2 border-border bg-transparent hover:bg-muted hover:border-primary/20",
      ghost: "hover:bg-muted",
      link: "text-primary underline-offset-4 hover:underline",
    };

    const sizes = {
      sm: "h-10 px-4 text-xs font-semibold uppercase tracking-wider",
      md: "h-12 px-8 text-sm font-bold",
      lg: "h-16 px-12 text-base font-black",
      icon: "h-12 w-12",
    };

    const buttonClassName = cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95",
      variants[variant],
      sizes[size],
      className
    );

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;

      return React.cloneElement(child, {
        className: cn(buttonClassName, child.props.className),
      });
    }

    return (
      <button
        ref={ref}
        className={buttonClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
