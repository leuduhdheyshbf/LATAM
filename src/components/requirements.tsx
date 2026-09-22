import { Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { REQUIREMENTS } from "@/lib/recruitment";

export function Requirements() {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto mt-20 max-w-3xl px-5" aria-labelledby="requisitos-title">
      <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">Requisitos</p>
      <h2 id="requisitos-title" className="font-display mt-2 text-4xl tracking-wide text-silver">
        Antes de se candidatar
      </h2>
      <motion.ul
        className="section-card mt-6 flex flex-col gap-3"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
      >
        {REQUIREMENTS.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-normal text-foreground">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Check className="size-3" strokeWidth={2.5} />
            </span>
            {item}
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
