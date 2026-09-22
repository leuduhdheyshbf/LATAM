import { motion, useReducedMotion } from "motion/react";
import { PROCESS } from "@/lib/recruitment";

export function Process() {
  const reduce = useReducedMotion();

  return (
    <section id="processo" className="mx-auto mt-20 max-w-3xl scroll-mt-20 px-5" aria-labelledby="processo-title">
      <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">Processo</p>
      <h2 id="processo-title" className="font-display mt-2 text-4xl tracking-wide text-silver">
        Três passos até o time
      </h2>
      <motion.ol
        className="mt-6 grid gap-3 sm:grid-cols-3"
        initial={reduce ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {PROCESS.map((item) => (
          <motion.li
            key={item.step}
            className="process-card"
            variants={{
              hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4 } },
            }}
          >
            <p className="font-display text-2xl tracking-wide text-accent">{item.step}</p>
            <h3 className="mt-2 text-sm font-semibold text-foreground">{item.title}</h3>
            <p className="mt-1 text-sm leading-normal text-muted-foreground">{item.body}</p>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}
