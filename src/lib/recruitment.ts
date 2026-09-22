import { z } from "zod";

export const GUILD_NAME = "LATAM";
export const GUILD_MARK = "友";
export const GUILD_TAGLINE = "Foco total na partida sem ter medo de perder";

export const PILLARS = [
  { title: "Disciplina", body: "Foco total na partida sem ter medo de perder." },
  { title: "Equipe", body: "Jogamos juntos, vencemos juntos." },
  { title: "Evolução", body: "Melhoramos a cada rodada." },
  { title: "Respeito", body: "Tratamento justo e direto com todos." },
] as const;

export const PROCESS = [
  {
    step: "01",
    title: "Preencha o formulário",
    body: "Dados reais, nick, ID da conta e disponibilidade. Leva menos de dois minutos.",
  },
  {
    step: "02",
    title: "Análise da liderança",
    body: "Avaliamos patente, função e se o perfil encaixa no jeito da LATAM 友.",
  },
  {
    step: "03",
    title: "Chamada no WhatsApp",
    body: "Se for aprovado, a liderança entra em contato e te coloca no time.",
  },
] as const;

export const REQUIREMENTS = [
  "Idade entre 12 e 80 anos",
  "ID da conta Free Fire válido",
  "Informações verdadeiras — a gente confere",
  "Disponibilidade mínima para jogar com a equipe",
  "Sem toxicidade. Respeito é regra, não pedido",
] as const;

export const FUNCOES = [
  { value: "rush", label: "Rush" },
  { value: "suporte", label: "Suporte" },
  { value: "fuzileiro", label: "Fuzileiro" },
  { value: "granadeiro", label: "Granadeiro" },
  { value: "full_gas", label: "Full Gás" },
  { value: "cura", label: "Cura" },
  { value: "flexivel", label: "Flexível" },
] as const;

export const PATENTES_LATAM = [
  { value: "ouro_platina", label: "Ouro–Platina" },
  { value: "platina_diamente", label: "Platina–Diamante" },
  { value: "diamente_mestre", label: "Diamante–Mestre de Honra" },
  { value: "elite", label: "Elite+" },
  { value: "outra", label: "Outra" },
] as const;

export const SIM_NAO = [
  { value: "sim", label: "Sim" },
  { value: "nao", label: "Não" },
] as const;

export const HORAS_DISPONIBILIDADE = [
  { value: "1-2h", label: "1–2 horas" },
  { value: "2-4h", label: "2–4 horas" },
  { value: "4+h", label: "4+ horas" },
] as const;

export const FORM_STEPS = [
  {
    id: "jogador",
    title: "Jogador",
    heading: "Quem é você",
    copy: "Dados da conta e da pessoa por trás do nick.",
    fields: ["nome", "idade", "nick", "idConta", "cidadeEstado", "whatsapp"] as const,
  },
  {
    id: "perfil",
    title: "Perfil",
    heading: "Como você joga",
    copy: "Função, patente e se já rodou competitivo.",
    fields: ["funcao", "patenteAtual", "experienciaCompetitiva"] as const,
  },
  {
    id: "agenda",
    title: "Agenda",
    heading: "Quando você joga",
    copy: "A liderança usa isso para montar treinos.",
    fields: ["tempoDisponivel", "horarioDisponivel"] as const,
  },
] as const;

const required = (message: string) => z.string().trim().min(1, message);

export const recruitmentSchema = z.object({
  nome: required("Informe seu nome").min(2, "Informe seu nome completo"),
  idade: required("Informe sua idade")
    .regex(/^\d{1,3}$/, "Informe uma idade válida")
    .refine((value) => {
      const age = Number(value);
      return age >= 12 && age <= 80;
    }, "A idade deve ser entre 12 e 80 anos"),
  nick: required("Informe seu nickname no jogo").min(2, "Informe seu nickname"),
  idConta: required("Informe o ID da sua conta").regex(
    /^\d{6,15}$/,
    "O ID da conta deve ter de 6 a 15 dígitos",
  ),
  cidadeEstado: required("Informe sua cidade/estado").min(3, "Informe cidade e estado"),
  whatsapp: required("Informe seu WhatsApp").min(10, "Informe um WhatsApp válido"),
  funcao: required("Selecione sua principal função"),
  patenteAtual: required("Selecione sua patente atual"),
  experienciaCompetitiva: required("Responda sobre experiência competitiva"),
  experienciaDescricao: z.string().optional(),
  tempoDisponivel: required("Selecione quanto tempo fica disponível por dia"),
  horarioDisponivel: required("Informe seu horário disponível para jogar"),
});

export type RecruitmentInput = z.input<typeof recruitmentSchema>;
export type RecruitmentValues = z.output<typeof recruitmentSchema>;

export const defaultValues: RecruitmentInput = {
  nome: "",
  idade: "",
  nick: "",
  idConta: "",
  cidadeEstado: "",
  whatsapp: "",
  funcao: "",
  patenteAtual: "",
  experienciaCompetitiva: "",
  experienciaDescricao: "",
  tempoDisponivel: "",
  horarioDisponivel: "",
};

export const DRAFT_KEY = "latam-recruitment-draft";

export function loadDraft(): RecruitmentInput {
  if (typeof window === "undefined") return defaultValues;
  try {
    const raw = sessionStorage.getItem(DRAFT_KEY);
    if (!raw) return defaultValues;
    const parsed = JSON.parse(raw) as Partial<RecruitmentInput>;
    return { ...defaultValues, ...parsed };
  } catch {
    return defaultValues;
  }
}

export function saveDraft(values: RecruitmentInput) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(DRAFT_KEY, JSON.stringify(values));
  } catch {
    /* quota / private mode */
  }
}

export function clearDraft() {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(DRAFT_KEY);
  } catch {
    /* ignore */
  }
}

export function labelOf(
  options: readonly { value: string; label: string }[],
  value: string,
): string {
  return options.find((option) => option.value === value)?.label ?? value;
}

export function formatApplicationMessage(values: RecruitmentValues): string {
  return [
    `*${GUILD_NAME} — Candidatura*`,
    "",
    "*Dados do jogador*",
    `Nome: ${values.nome}`,
    `Idade: ${values.idade}`,
    `Cidade/Estado: ${values.cidadeEstado}`,
    `Nickname: ${values.nick}`,
    `ID da conta: ${values.idConta}`,
    `WhatsApp: ${values.whatsapp}`,
    "",
    "*Perfil no jogo*",
    `Função: ${labelOf(FUNCOES, values.funcao)}`,
    `Patente atual: ${labelOf(PATENTES_LATAM, values.patenteAtual)}`,
    `Experiência competitiva: ${labelOf(SIM_NAO, values.experienciaCompetitiva)}`,
    values.experienciaDescricao ? `Descrição: ${values.experienciaDescricao}` : "",
    "",
    "*Disponibilidade*",
    `Tempo por dia: ${labelOf(HORAS_DISPONIBILIDADE, values.tempoDisponivel)}`,
    `Horário: ${values.horarioDisponivel}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export const FIELD_LABELS: Record<keyof RecruitmentValues, string> = {
  nome: "Nome",
  idade: "Idade",
  nick: "Nickname do jogo",
  idConta: "ID da conta",
  cidadeEstado: "Cidade/Estado",
  whatsapp: "WhatsApp",
  funcao: "Principal função",
  patenteAtual: "Patente atual",
  experienciaCompetitiva: "Experiência em competitivo",
  experienciaDescricao: "Descrição da experiência",
  tempoDisponivel: "Tempo disponível por dia",
  horarioDisponivel: "Horário disponível",
};

export function displayValue(key: keyof RecruitmentValues, values: RecruitmentValues): string {
  switch (key) {
    case "funcao":
      return labelOf(FUNCOES, values.funcao);
    case "patenteAtual":
      return labelOf(PATENTES_LATAM, values.patenteAtual);
    case "experienciaCompetitiva":
      return labelOf(SIM_NAO, values.experienciaCompetitiva);
    case "tempoDisponivel":
      return labelOf(HORAS_DISPONIBILIDADE, values.tempoDisponivel);
    default:
      return values[key] ?? "";
  }
}

export const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw0ht83Y1DOMCS9woV8iXKK9K94Toy6ohIKSn3WN3WNkvOXcnyCK_bvSPNJcT2ZSSNy/exec";

export async function submitRecruitment(values: RecruitmentValues): Promise<void> {
  const payload: RecruitmentValues = {
    nome: values.nome,
    idade: values.idade,
    nick: values.nick,
    idConta: values.idConta,
    cidadeEstado: values.cidadeEstado,
    whatsapp: values.whatsapp,
    funcao: values.funcao,
    patenteAtual: values.patenteAtual,
    experienciaCompetitiva: values.experienciaCompetitiva,
    experienciaDescricao: values.experienciaDescricao ?? "",
    tempoDisponivel: values.tempoDisponivel,
    horarioDisponivel: values.horarioDisponivel,
  };

  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 20000);
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("Tempo esgotado. Confira a conexão e tente de novo.");
    }
    throw new Error("Erro ao enviar. Tente novamente em instantes.");
  } finally {
    window.clearTimeout(timer);
  }
}
