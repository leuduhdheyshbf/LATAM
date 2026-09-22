import { motion, useReducedMotion } from "motion/react";
import { PILLARS } from "@/lib/recruitment";

export function Pillars() {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto mt-16 max-w-3xl px-5" aria-labelledby="pilares-title">
      <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">A guilda</p>
      <h2 id="pilares-title" className="font-display mt-2 text-4xl tracking-wide text-silver">
        O que a LATAM cobra
      </h2>
      <motion.div
        className="mt-6 grid gap-3 sm:grid-cols-2"
        initial={reduce ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {PILLARS.map((pillar) => (
          <motion.article
            key={pillar.title}
            className="pillar-card"
            variants={{
              hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4 } },
            }}
          >
            <h3 className="font-display text-xl tracking-wide text-silver">{pillar.title}</h3>
            <p className="mt-1 text-sm leading-normal text-muted-foreground">{pillar.body}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
