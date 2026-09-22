import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Hero } from "@/components/hero";
import { Pillars } from "@/components/pillars";
import { Process } from "@/components/process";
import { Requirements } from "@/components/requirements";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const reduce = useReducedMotion();

  return (
    <main className="page-bg">
      <SiteHeader />
      <Hero />
      <Process />
      <Pillars />
      <Requirements />

      <motion.section
        className="mx-auto mt-16 flex max-w-3xl flex-col items-center px-5 pb-8 pt-4 text-center"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45 }}
      >
        <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">Vagas abertas</p>
        <h2 className="font-display mt-2 text-4xl tracking-wide text-silver sm:text-5xl">
          Pronto para vestir o brasão?
        </h2>
        <p className="mt-3 max-w-md text-sm text-muted-foreground">
          Candidatura rápida, em três etapas. A liderança responde pelo WhatsApp.
        </p>
        <Link to="/candidatura" className="cta-jump mt-6">
          Preencher candidatura
          <ArrowRight className="size-4" />
        </Link>
      </motion.section>

      <SiteFooter />
    </main>
  );
}
