import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { RecruitmentForm } from "@/components/recruitment-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SuccessView } from "@/components/success-view";
import { clearDraft, submitRecruitment, type RecruitmentValues } from "@/lib/recruitment";

export const Route = createFileRoute("/candidatura")({ component: Candidatura });

function Candidatura() {
  const [submitted, setSubmitted] = useState<RecruitmentValues | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(values: RecruitmentValues) {
    setSubmitError(null);
    try {
      await submitRecruitment(values);
      clearDraft();
      setSubmitted(values);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Erro ao enviar formulário. Tente novamente.");
    }
  }

  return (
    <main className="page-bg min-h-screen">
      <SiteHeader />
      {submitted ? (
        <SuccessView values={submitted} onReset={() => setSubmitted(null)} />
      ) : (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <RecruitmentForm onSubmitted={handleSubmit} />
        </motion.div>
      )}
      {submitError ? (
        <div
          role="alert"
          className="fixed top-16 left-1/2 z-50 max-w-[min(24rem,calc(100vw-2rem))] -translate-x-1/2 rounded-md bg-destructive px-4 py-2 text-center text-sm text-background shadow-lg"
        >
          {submitError}
        </div>
      ) : null}
      <SiteFooter />
    </main>
  );
}
