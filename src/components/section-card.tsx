import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

type SectionCardProps = {
  id: string;
  eyebrow: string;
  title: string;
  icon: LucideIcon;
  children: ReactNode;
};

export function SectionCard({ id, eyebrow, title, icon: Icon, children }: SectionCardProps) {
  return (
    <section id={id} className="section-card scroll-mt-8">
      <header className="mb-6 flex items-start gap-4">
        <span className="section-icon">
          <Icon className="size-5" strokeWidth={1.75} />
        </span>
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">{eyebrow}</p>
          <h2 className="font-display mt-1 text-3xl tracking-wide text-silver text-balance">{title}</h2>
        </div>
      </header>
      <div className="flex flex-col gap-5">{children}</div>
    </section>
  );
}
