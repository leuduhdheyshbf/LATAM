import { createFileRoute } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";
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
        <a href="#" className="cta-ghost mt-6">
          <ArrowUp className="size-4" />
          Voltar para o topo
        </a>
      </motion.section>

      <SiteFooter />
    </main>
  );
}
