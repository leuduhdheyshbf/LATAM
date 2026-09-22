import type { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("flex items-baseline gap-3 text-sm font-medium text-foreground", className)}
      {...props}
    />
  );
}
