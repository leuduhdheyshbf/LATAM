import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { GUILD_MARK, GUILD_NAME, GUILD_TAGLINE } from "@/lib/recruitment";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const hidden = reduce ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 16, filter: "blur(4px)" };
  const visible = { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <header className="relative flex flex-col items-center px-5 pb-6 pt-10 text-center sm:pt-14">
      <div className="hero-glow" aria-hidden="true" />

      <motion.img
        src="/latam-logo.webp"
        alt={`Brasão da guilda ${GUILD_NAME} ${GUILD_MARK}`}
        className="hero-logo"
        width={636}
        height={640}
        fetchPriority="high"
        decoding="async"
        initial={reduce ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease }}
      />

      <motion.p
        className="live-badge mt-6"
        initial={hidden}
        animate={visible}
        transition={{ duration: 0.45, delay: 0.12, ease }}
      >
        <span className="live-dot" />
        Recrutamento aberto
      </motion.p>

      <motion.h1
        className="font-display mt-5 max-w-2xl text-5xl leading-[0.92] tracking-wide text-silver sm:text-7xl"
        initial={hidden}
        animate={visible}
        transition={{ duration: 0.5, delay: 0.2, ease }}
      >
        {GUILD_NAME} <span className="text-accent">{GUILD_MARK}</span>
      </motion.h1>

      <motion.p
        className="font-display mt-3 text-2xl tracking-wide text-foreground/90 sm:text-3xl"
        initial={hidden}
        animate={visible}
        transition={{ duration: 0.5, delay: 0.28, ease }}
      >
        Formulário de recrutamento
      </motion.p>

      <motion.p
        className="mt-4 max-w-md text-base leading-normal text-muted-foreground"
        initial={hidden}
        animate={visible}
        transition={{ duration: 0.5, delay: 0.36, ease }}
      >
        {GUILD_TAGLINE}. Preencha com informações verdadeiras — a liderança analisa o perfil e chama no
        WhatsApp.
      </motion.p>

      <motion.div
        className="mt-8 flex w-full max-w-md flex-col items-center gap-3 sm:flex-row sm:justify-center"
        initial={hidden}
        animate={visible}
        transition={{ duration: 0.5, delay: 0.44, ease }}
      >
        <Link to="/candidatura" className="cta-jump w-full sm:w-auto">
          Candidatar-se
          <ArrowRight className="size-4" strokeWidth={2.25} />
        </Link>
        <a href="#processo" className="cta-ghost w-full sm:w-auto">
          <ArrowDown className="size-4" />
          Como funciona
        </a>
      </motion.div>
    </header>
  );
}
