import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-xl border border-border/80 bg-cream px-4 py-3 text-sm text-charcoal shadow-sm transition-colors placeholder:text-taupe/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive/25 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
