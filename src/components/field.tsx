import type { ReactNode } from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type FieldProps = {
  number: number;
  label: string;
  htmlFor?: string;
  error?: string;
  children: ReactNode;
};

export function Field({ number, label, htmlFor, error, children }: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", error && "field-has-error")} data-error={error ? "true" : undefined}>
      <Label htmlFor={htmlFor}>
        <span className="font-display text-lg leading-none tracking-wide text-accent">
          {String(number).padStart(2, "0")}
        </span>
        <span>{label}</span>
      </Label>
      {children}
      {error ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
