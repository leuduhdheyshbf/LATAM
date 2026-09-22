import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Option = { value: string; label: string };

type OptionCardsProps = {
  name: string;
  value: string;
  options: readonly Option[];
  onChange: (value: string) => void;
  columns?: "two" | "stack";
};

export function OptionCards({
  name,
  value,
  options,
  onChange,
  columns = "two",
}: OptionCardsProps) {
  return (
    <div
      role="radiogroup"
      aria-label={name}
      className={cn("grid gap-2", columns === "stack" ? "grid-cols-1" : "grid-cols-2")}
    >
      {options.map((option) => {
        const selected = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selected}
            className={cn("option-card", selected && "option-card-selected")}
            onClick={() => onChange(option.value)}
          >
            <span className={cn("option-dot", selected && "option-dot-selected")}>
              <Check className="size-2.5" strokeWidth={3} />
            </span>
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
