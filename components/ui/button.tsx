import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive/30 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-charcoal text-cream shadow-sm hover:bg-charcoal/90 hover:shadow-md",
        olive:
          "bg-olive text-olive-foreground shadow-sm hover:bg-olive-muted hover:shadow-md",
        outline:
          "border border-border/80 bg-cream/60 text-charcoal backdrop-blur-sm hover:bg-cream hover:border-olive/25",
        ghost: "text-charcoal hover:bg-champagne/80",
        subtleGold:
          "border border-gold-soft/80 bg-cream text-charcoal hover:border-gold/40 hover:bg-ivory-muted",
        link: "text-olive underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-xl px-4 text-xs",
        lg: "h-12 rounded-2xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
