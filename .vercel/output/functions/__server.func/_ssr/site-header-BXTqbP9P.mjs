import { f as useLocation, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-header-BXTqbP9P.js
var import_jsx_runtime = require_jsx_runtime();
var GUILD_NAME = "LATAM";
var GUILD_TAGLINE = "Foco total na partida sem ter medo de perder";
var PILLARS = [
	{
		title: "Disciplina",
		body: "Foco total na partida sem ter medo de perder."
	},
	{
		title: "Equipe",
		body: "Jogamos juntos, vencemos juntos."
	},
	{
		title: "Evolução",
		body: "Melhoramos a cada rodada."
	},
	{
		title: "Respeito",
		body: "Tratamento justo e direto com todos."
	}
];
var PROCESS = [
	{
		step: "01",
		title: "Preencha o formulário",
		body: "Dados reais, nick, ID da conta e disponibilidade. Leva menos de dois minutos."
	},
	{
		step: "02",
		title: "Análise da liderança",
		body: "Avaliamos patente, função e se o perfil encaixa no jeito da LATAM 友."
	},
	{
		step: "03",
		title: "Chamada no WhatsApp",
		body: "Se for aprovado, a liderança entra em contato e te coloca no time."
	}
];
var REQUIREMENTS = [
	"Idade entre 12 e 80 anos",
	"ID da conta Free Fire válido",
	"Informações verdadeiras — a gente confere",
	"Disponibilidade mínima para jogar com a equipe",
	"Sem toxicidade. Respeito é regra, não pedido"
];
var FUNCOES = [
	{
		value: "rush",
		label: "Rush"
	},
	{
		value: "suporte",
		label: "Suporte"
	},
	{
		value: "fuzileiro",
		label: "Fuzileiro"
	},
	{
		value: "granadeiro",
		label: "Granadeiro"
	},
	{
		value: "full_gas",
		label: "Full Gás"
	},
	{
		value: "cura",
		label: "Cura"
	},
	{
		value: "flexivel",
		label: "Flexível"
	}
];
var PATENTES_LATAM = [
	{
		value: "ouro_platina",
		label: "Ouro–Platina"
	},
	{
		value: "platina_diamente",
		label: "Platina–Diamante"
	},
	{
		value: "diamente_mestre",
		label: "Diamante–Mestre de Honra"
	},
	{
		value: "elite",
		label: "Elite+"
	},
	{
		value: "outra",
		label: "Outra"
	}
];
var SIM_NAO = [{
	value: "sim",
	label: "Sim"
}, {
	value: "nao",
	label: "Não"
}];
var HORAS_DISPONIBILIDADE = [
	{
		value: "1-2h",
		label: "1–2 horas"
	},
	{
		value: "2-4h",
		label: "2–4 horas"
	},
	{
		value: "4+h",
		label: "4+ horas"
	}
];
var FORM_STEPS = [
	{
		id: "jogador",
		title: "Jogador",
		heading: "Quem é você",
		copy: "Dados da conta e da pessoa por trás do nick.",
		fields: [
			"nome",
			"idade",
			"nick",
			"idConta",
			"cidadeEstado"
		]
	},
	{
		id: "perfil",
		title: "Perfil",
		heading: "Como você joga",
		copy: "Função, patente e se já rodou competitivo.",
		fields: [
			"funcao",
			"patenteAtual",
			"experienciaCompetitiva"
		]
	},
	{
		id: "agenda",
		title: "Agenda",
		heading: "Quando você joga",
		copy: "A liderança usa isso para montar treinos.",
		fields: ["tempoDisponivel", "horarioDisponivel"]
	}
];
var required = (message) => string().trim().min(1, message);
var recruitmentSchema = object({
	nome: required("Informe seu nome").min(2, "Informe seu nome completo"),
	idade: required("Informe sua idade").regex(/^\d{1,3}$/, "Informe uma idade válida").refine((value) => {
		const age = Number(value);
		return age >= 12 && age <= 80;
	}, "A idade deve ser entre 12 e 80 anos"),
	nick: required("Informe seu nickname no jogo").min(2, "Informe seu nickname"),
	idConta: required("Informe o ID da sua conta").regex(/^\d{6,15}$/, "O ID da conta deve ter de 6 a 15 dígitos"),
	cidadeEstado: required("Informe sua cidade/estado").min(3, "Informe cidade e estado"),
	funcao: required("Selecione sua principal função"),
	patenteAtual: required("Selecione sua patente atual"),
	experienciaCompetitiva: required("Responda sobre experiência competitiva"),
	experienciaDescricao: string().optional(),
	tempoDisponivel: required("Selecione quanto tempo fica disponível por dia"),
	horarioDisponivel: required("Informe seu horário disponível para jogar")
});
var defaultValues = {
	nome: "",
	idade: "",
	nick: "",
	idConta: "",
	cidadeEstado: "",
	funcao: "",
	patenteAtual: "",
	experienciaCompetitiva: "",
	experienciaDescricao: "",
	tempoDisponivel: "",
	horarioDisponivel: ""
};
var DRAFT_KEY = "latam-recruitment-draft";
function loadDraft() {
	if (typeof window === "undefined") return defaultValues;
	try {
		const raw = sessionStorage.getItem(DRAFT_KEY);
		if (!raw) return defaultValues;
		const parsed = JSON.parse(raw);
		return {
			...defaultValues,
			...parsed
		};
	} catch {
		return defaultValues;
	}
}
function saveDraft(values) {
	if (typeof window === "undefined") return;
	try {
		sessionStorage.setItem(DRAFT_KEY, JSON.stringify(values));
	} catch {}
}
function clearDraft() {
	if (typeof window === "undefined") return;
	try {
		sessionStorage.removeItem(DRAFT_KEY);
	} catch {}
}
function labelOf(options, value) {
	return options.find((option) => option.value === value)?.label ?? value;
}
function formatApplicationMessage(values) {
	return [
		`*${GUILD_NAME} — Candidatura*`,
		"",
		"*Dados do jogador*",
		`Nome: ${values.nome}`,
		`Idade: ${values.idade}`,
		`Cidade/Estado: ${values.cidadeEstado}`,
		`Nickname: ${values.nick}`,
		`ID da conta: ${values.idConta}`,
		"",
		"*Perfil no jogo*",
		`Função: ${labelOf(FUNCOES, values.funcao)}`,
		`Patente atual: ${labelOf(PATENTES_LATAM, values.patenteAtual)}`,
		`Experiência competitiva: ${labelOf(SIM_NAO, values.experienciaCompetitiva)}`,
		values.experienciaDescricao ? `Descrição: ${values.experienciaDescricao}` : "",
		"",
		"*Disponibilidade*",
		`Tempo por dia: ${labelOf(HORAS_DISPONIBILIDADE, values.tempoDisponivel)}`,
		`Horário: ${values.horarioDisponivel}`
	].filter(Boolean).join("\n");
}
var FIELD_LABELS = {
	nome: "Nome",
	idade: "Idade",
	nick: "Nickname do jogo",
	idConta: "ID da conta",
	cidadeEstado: "Cidade/Estado",
	funcao: "Principal função",
	patenteAtual: "Patente atual",
	experienciaCompetitiva: "Experiência em competitivo",
	experienciaDescricao: "Descrição da experiência",
	tempoDisponivel: "Tempo disponível por dia",
	horarioDisponivel: "Horário disponível"
};
function displayValue(key, values) {
	switch (key) {
		case "funcao": return labelOf(FUNCOES, values.funcao);
		case "patenteAtual": return labelOf(PATENTES_LATAM, values.patenteAtual);
		case "experienciaCompetitiva": return labelOf(SIM_NAO, values.experienciaCompetitiva);
		case "tempoDisponivel": return labelOf(HORAS_DISPONIBILIDADE, values.tempoDisponivel);
		default: return values[key] ?? "";
	}
}
var GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw0ht83Y1DOMCS9woV8iXKK9K94Toy6ohIKSn3WN3WNkvOXcnyCK_bvSPNJcT2ZSSNy/exec";
async function submitRecruitment(values) {
	const payload = {
		nome: values.nome,
		idade: values.idade,
		nick: values.nick,
		idConta: values.idConta,
		cidadeEstado: values.cidadeEstado,
		funcao: values.funcao,
		patenteAtual: values.patenteAtual,
		experienciaCompetitiva: values.experienciaCompetitiva,
		experienciaDescricao: values.experienciaDescricao ?? "",
		tempoDisponivel: values.tempoDisponivel,
		horarioDisponivel: values.horarioDisponivel
	};
	const controller = new AbortController();
	const timer = window.setTimeout(() => controller.abort(), 2e4);
	try {
		await fetch(GOOGLE_SCRIPT_URL, {
			method: "POST",
			headers: { "Content-Type": "text/plain;charset=utf-8" },
			body: JSON.stringify(payload),
			signal: controller.signal
		});
	} catch (error) {
		if (error instanceof DOMException && error.name === "AbortError") throw new Error("Tempo esgotado. Confira a conexão e tente de novo.");
		throw new Error("Erro ao enviar. Tente novamente em instantes.");
	} finally {
		window.clearTimeout(timer);
	}
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "px-5 pb-16 pt-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-brand mx-auto mb-6 max-w-xs" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-display text-2xl tracking-[0.16em] text-silver",
				children: [
					GUILD_NAME,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tracking-normal text-accent",
						children: "友"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: GUILD_TAGLINE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-xs text-subtle",
				children: [GUILD_NAME, " · Recrutamento Free Fire"]
			})
		]
	});
}
function SiteHeader() {
	const { pathname } = useLocation();
	const onForm = pathname.startsWith("/candidatura");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "site-header",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex items-center gap-2.5 no-underline",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/latam-mark.webp",
					alt: "",
					width: 32,
					height: 32,
					className: "size-8",
					decoding: "async"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-display text-xl tracking-[0.14em] text-silver",
					children: [
						GUILD_NAME,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tracking-normal text-accent",
							children: "友"
						})
					]
				})]
			}), onForm ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "cta-ghost min-h-11 px-4 text-sm",
				children: "Início"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/candidatura",
				className: "cta-jump min-h-11 px-4 text-sm",
				children: "Candidatar-se"
			})]
		})
	});
}
//#endregion
export { formatApplicationMessage as _, GUILD_TAGLINE as a, saveDraft as b, PILLARS as c, SIM_NAO as d, SiteFooter as f, displayValue as g, defaultValues as h, GUILD_NAME as i, PROCESS as l, clearDraft as m, FORM_STEPS as n, HORAS_DISPONIBILIDADE as o, SiteHeader as p, FUNCOES as r, PATENTES_LATAM as s, FIELD_LABELS as t, REQUIREMENTS as u, loadDraft as v, submitRecruitment as x, recruitmentSchema as y };
