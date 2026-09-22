import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Clock, Loader2, Send, Trophy, Users } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Field } from "@/components/field";
import { SectionCard } from "@/components/section-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { OptionCards } from "@/components/ui/option-cards";
import { Textarea } from "@/components/ui/textarea";
import {
  defaultValues,
  FORM_STEPS,
  FUNCOES,
  HORAS_DISPONIBILIDADE,
  PATENTES_LATAM,
  SIM_NAO,
  loadDraft,
  recruitmentSchema,
  saveDraft,
  type RecruitmentInput,
  type RecruitmentValues,
} from "@/lib/recruitment";
import { cn } from "@/lib/utils";

type RecruitmentFormProps = {
  onSubmitted: (values: RecruitmentValues) => Promise<void> | void;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function RecruitmentForm({ onSubmitted }: RecruitmentFormProps) {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    setValue,
    trigger,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RecruitmentInput, unknown, RecruitmentValues>({
    resolver: zodResolver(recruitmentSchema),
    defaultValues,
    mode: "onSubmit",
    shouldUnregister: false,
  });

  const values = watch();

  useEffect(() => {
    reset(loadDraft());
    setHydrated(true);
  }, [reset]);

  useEffect(() => {
    if (!hydrated) return;
    saveDraft(values);
  }, [hydrated, values]);


  function onInvalid() {
    requestAnimationFrame(() => {
      const first = document.querySelector("[data-error='true']");
      first?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    });
  }

  async function goNext() {
    const fields = [...FORM_STEPS[step].fields];
    const ok = await trigger(fields);
    if (!ok) {
      onInvalid();
      return;
    }
    setStep((current) => Math.min(current + 1, FORM_STEPS.length - 1));
  }

  function goBack() {
    setStep((current) => Math.max(current - 1, 0));
  }

  const progress = (step + 1) / FORM_STEPS.length;
  const current = FORM_STEPS[step];

  return (
    <form
      id="formulario"
      className="mx-auto flex w-full max-w-xl flex-col gap-5 px-5 pb-20 pt-8"
      onSubmit={(event) => {
        if (step < FORM_STEPS.length - 1) {
          event.preventDefault();
          void goNext();
          return;
        }
        void handleSubmit(onSubmitted, onInvalid)(event);
      }}
      noValidate
    >
      <div>
        <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">Candidatura</p>
        <h1 className="font-display mt-2 text-4xl tracking-wide text-silver">{current.heading}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{current.copy}</p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs font-medium tracking-wide text-subtle uppercase">
          <span>
            Passo {String(step + 1).padStart(2, "0")} de {String(FORM_STEPS.length).padStart(2, "0")}
          </span>
          <span>{current.title}</span>
        </div>
        <div className="progress-track" aria-hidden="true">
          <div className="progress-fill" style={{ transform: `scaleX(${progress})` }} />
        </div>
        <ol className="flex gap-2">
          {FORM_STEPS.map((item, index) => (
            <li key={item.id} className="flex-1">
              <button
                type="button"
                disabled={index > step}
                onClick={() => index < step && setStep(index)}
                className={cn(
                  "w-full rounded-md py-2 text-center text-[11px] font-semibold tracking-wide uppercase transition-[color,background-color] duration-[var(--motion-quick)]",
                  index === step
                    ? "bg-accent/10 text-accent"
                    : index < step
                      ? "text-silver"
                      : "text-subtle",
                )}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ol>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current.id}
          initial={reduce ? false : { opacity: 0, x: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={reduce ? undefined : { opacity: 0, x: -12, filter: "blur(4px)" }}
          transition={{ duration: reduce ? 0 : 0.28, ease }}
        >
          {step === 0 ? (
            <SectionCard id="dados" eyebrow="01" title="Informações do jogador" icon={Users}>
              <Field number={1} label="Nome" htmlFor="nome" error={errors.nome?.message}>
                <Input id="nome" autoComplete="name" placeholder="Seu nome completo" {...register("nome")} />
              </Field>
              <Field number={2} label="Idade" htmlFor="idade" error={errors.idade?.message}>
                <Input
                  id="idade"
                  inputMode="numeric"
                  maxLength={3}
                  placeholder="Sua idade"
                  {...register("idade")}
                />
              </Field>
              <Field number={3} label="Nickname do jogo" htmlFor="nick" error={errors.nick?.message}>
                <Input id="nick" placeholder="Seu nickname no jogo" {...register("nick")} />
              </Field>
              <Field number={4} label="ID da conta" htmlFor="idConta" error={errors.idConta?.message}>
                <Input
                  id="idConta"
                  inputMode="numeric"
                  maxLength={15}
                  placeholder="ID da sua conta"
                  {...register("idConta", {
                    onChange: (event) => {
                      const digits = event.target.value.replace(/\D/g, "").slice(0, 15);
                      setValue("idConta", digits, { shouldValidate: false });
                    },
                  })}
                />
              </Field>
              <Field
                number={5}
                label="Cidade/Estado"
                htmlFor="cidadeEstado"
                error={errors.cidadeEstado?.message}
              >
                <Input
                  id="cidadeEstado"
                  placeholder="Ex: São Paulo - SP"
                  {...register("cidadeEstado")}
                />
              </Field>
            </SectionCard>
          ) : null}

          {step === 1 ? (
            <SectionCard id="perfil" eyebrow="02" title="Perfil no jogo" icon={Trophy}>
              <Field
                number={6}
                label="Qual sua principal função?"
                htmlFor="funcao"
                error={errors.funcao?.message}
              >
                <Controller
                  name="funcao"
                  control={control}
                  render={({ field }) => (
                    <OptionCards
                      name={field.name}
                      value={field.value}
                      onChange={field.onChange}
                      options={FUNCOES}
                    />
                  )}
                />
              </Field>
              <Field
                number={7}
                label="Qual sua patente atual?"
                htmlFor="patenteAtual"
                error={errors.patenteAtual?.message}
              >
                <Controller
                  name="patenteAtual"
                  control={control}
                  render={({ field }) => (
                    <OptionCards
                      name={field.name}
                      value={field.value}
                      onChange={field.onChange}
                      options={PATENTES_LATAM}
                    />
                  )}
                />
              </Field>
              <Field
                number={8}
                label="Já teve experiência em competitivo, guildas ou campeonatos?"
                error={errors.experienciaCompetitiva?.message}
              >
                <Controller
                  name="experienciaCompetitiva"
                  control={control}
                  render={({ field }) => (
                    <OptionCards
                      name={field.name}
                      value={field.value}
                      onChange={field.onChange}
                      options={SIM_NAO}
                    />
                  )}
                />
              </Field>
              <Field
                number={9}
                label="Se sim, conte brevemente sua experiência."
                htmlFor="experienciaDescricao"
                error={errors.experienciaDescricao?.message}
              >
                <Textarea
                  id="experienciaDescricao"
                  rows={4}
                  maxLength={800}
                  placeholder="Competições, guildas anteriores, campeonatos..."
                  {...register("experienciaDescricao")}
                />
              </Field>
            </SectionCard>
          ) : null}

          {step === 2 ? (
            <SectionCard id="disponibilidade" eyebrow="03" title="Disponibilidade" icon={Clock}>
              <Field
                number={10}
                label="Quanto tempo você costuma ficar disponível para jogar por dia?"
                error={errors.tempoDisponivel?.message}
              >
                <Controller
                  name="tempoDisponivel"
                  control={control}
                  render={({ field }) => (
                    <OptionCards
                      name={field.name}
                      value={field.value}
                      onChange={field.onChange}
                      options={HORAS_DISPONIBILIDADE}
                      columns="stack"
                    />
                  )}
                />
              </Field>
              <Field
                number={11}
                label="Qual seu horário normalmente disponível para jogar?"
                htmlFor="horarioDisponivel"
                error={errors.horarioDisponivel?.message}
              >
                <Input
                  id="horarioDisponivel"
                  placeholder="Ex: 19h às 23h"
                  {...register("horarioDisponivel")}
                />
              </Field>
            </SectionCard>
          ) : null}
        </motion.div>
      </AnimatePresence>

      <div className="submit-panel">
        <div className="flex flex-col gap-2 sm:flex-row">
          {step > 0 ? (
            <Button
              type="button"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              onClick={goBack}
              disabled={isSubmitting}
            >
              <ArrowLeft className="size-4" />
              Voltar
            </Button>
          ) : null}

          {step < FORM_STEPS.length - 1 ? (
            <Button type="button" size="lg" className="w-full flex-1" onClick={goNext}>
              Continuar
              <ArrowRight className="size-4" />
            </Button>
          ) : (
            <Button type="submit" size="lg" className="w-full flex-1" disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
              {isSubmitting ? "Enviando..." : "Enviar candidatura"}
            </Button>
          )}
        </div>
        {step === FORM_STEPS.length - 1 ? (
          <p className="mt-3 text-center text-sm leading-normal text-muted-foreground">
            Após o envio, aguarde o contato da liderança.
          </p>
        ) : null}
      </div>
    </form>
  );
}
