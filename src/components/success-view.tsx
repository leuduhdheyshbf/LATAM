import { Check, Copy, RotateCcw } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  displayValue,
  FIELD_LABELS,
  formatApplicationMessage,
  GUILD_NAME,
  type RecruitmentValues,
} from "@/lib/recruitment";

const SUMMARY_KEYS: (keyof RecruitmentValues)[] = [
  "nome",
  "idade",
  "cidadeEstado",
  "nick",
  "idConta",
  "funcao",
  "patenteAtual",
  "experienciaCompetitiva",
  "experienciaDescricao",
  "tempoDisponivel",
  "horarioDisponivel",
];

type SuccessViewProps = {
  values: RecruitmentValues;
  onReset: () => void;
};

export function SuccessView({ values, onReset }: SuccessViewProps) {
  const reduce = useReducedMotion();
  const message = formatApplicationMessage(values);

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      toast.success("Candidatura copiada");
    } catch {
      toast.error("Não foi possível copiar. Selecione o texto e copie.");
    }
  }

  return (
    <section id="formulario" className="mx-auto w-full max-w-xl px-5 pb-20 pt-10">
      <motion.div
        className="section-card text-center"
        initial={reduce ? false : { opacity: 0, y: 12, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.4 }}
      >
        <div className="success-mark mx-auto">
          <Check className="size-7" strokeWidth={2.25} />
        </div>
        <h2 className="font-display mt-5 text-4xl tracking-wide text-silver">Candidatura registrada</h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-normal text-muted-foreground">
          A liderança da {GUILD_NAME} vai analisar seu perfil e entrar em contato pelo WhatsApp.
        </p>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Button variant="secondary" size="lg" className="w-full sm:w-auto" onClick={copyMessage}>
            <Copy className="size-4" />
            Copiar texto
          </Button>
        </div>
      </motion.div>

      <dl className="summary-list mt-5">
        {SUMMARY_KEYS.filter((key) => key !== "experienciaDescricao" || values.experienciaDescricao).map(
          (key) => (
            <div key={key} className="summary-row">
              <dt>{FIELD_LABELS[key]}</dt>
              <dd>{displayValue(key, values)}</dd>
            </div>
          ),
        )}
      </dl>

      <div className="mt-6 flex justify-center">
        <Button variant="ghost" onClick={onReset}>
          <RotateCcw className="size-4" />
          Enviar outra candidatura
        </Button>
      </div>
    </section>
  );
}
