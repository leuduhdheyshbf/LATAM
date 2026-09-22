import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as GUILD_TAGLINE, c as PILLARS, f as SiteFooter, i as GUILD_NAME, l as PROCESS, p as SiteHeader, u as REQUIREMENTS } from "./site-header-BXTqbP9P.mjs";
import { f as ArrowDown, l as Check, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-8MT-qE_C.js
var import_jsx_runtime = require_jsx_runtime();
var ease = [
	.22,
	1,
	.36,
	1
];
function Hero() {
	const reduce = useReducedMotion();
	const hidden = reduce ? {
		opacity: 1,
		y: 0,
		filter: "blur(0px)"
	} : {
		opacity: 0,
		y: 16,
		filter: "blur(4px)"
	};
	const visible = {
		opacity: 1,
		y: 0,
		filter: "blur(0px)"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative flex flex-col items-center px-5 pb-6 pt-10 text-center sm:pt-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: "/latam-logo.webp",
				alt: `Brasão da guilda ${GUILD_NAME} 友`,
				className: "hero-logo",
				width: 636,
				height: 640,
				fetchPriority: "high",
				decoding: "async",
				initial: reduce ? false : {
					opacity: 0,
					scale: .96
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: .7,
					ease
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
				className: "live-badge mt-6",
				initial: hidden,
				animate: visible,
				transition: {
					duration: .45,
					delay: .12,
					ease
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot" }), "Recrutamento aberto"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
				className: "font-display mt-5 max-w-2xl text-5xl leading-[0.92] tracking-wide text-silver sm:text-7xl",
				initial: hidden,
				animate: visible,
				transition: {
					duration: .5,
					delay: .2,
					ease
				},
				children: [
					GUILD_NAME,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: "友"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				className: "font-display mt-3 text-2xl tracking-wide text-foreground/90 sm:text-3xl",
				initial: hidden,
				animate: visible,
				transition: {
					duration: .5,
					delay: .28,
					ease
				},
				children: "Formulário de recrutamento"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
				className: "mt-4 max-w-md text-base leading-normal text-muted-foreground",
				initial: hidden,
				animate: visible,
				transition: {
					duration: .5,
					delay: .36,
					ease
				},
				children: [GUILD_TAGLINE, ". Preencha com informações verdadeiras — a liderança analisa o perfil e chama no WhatsApp."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "mt-8 flex w-full max-w-md flex-col items-center gap-3 sm:flex-row sm:justify-center",
				initial: hidden,
				animate: visible,
				transition: {
					duration: .5,
					delay: .44,
					ease
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/candidatura",
					className: "cta-jump w-full sm:w-auto",
					children: ["Candidatar-se", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "size-4",
						strokeWidth: 2.25
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#processo",
					className: "cta-ghost w-full sm:w-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" }), "Como funciona"]
				})]
			})
		]
	});
}
function Pillars() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto mt-16 max-w-3xl px-5",
		"aria-labelledby": "pilares-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-[0.18em] text-accent uppercase",
				children: "A guilda"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "pilares-title",
				className: "font-display mt-2 text-4xl tracking-wide text-silver",
				children: "O que a LATAM cobra"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "mt-6 grid gap-3 sm:grid-cols-2",
				initial: reduce ? false : "hidden",
				whileInView: "visible",
				viewport: {
					once: true,
					amount: .3
				},
				variants: {
					hidden: {},
					visible: { transition: { staggerChildren: .08 } }
				},
				children: PILLARS.map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					className: "pillar-card",
					variants: {
						hidden: {
							opacity: 0,
							y: 12,
							filter: "blur(4px)"
						},
						visible: {
							opacity: 1,
							y: 0,
							filter: "blur(0px)",
							transition: { duration: .4 }
						}
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl tracking-wide text-silver",
						children: pillar.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-normal text-muted-foreground",
						children: pillar.body
					})]
				}, pillar.title))
			})
		]
	});
}
function Process() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "processo",
		className: "mx-auto mt-20 max-w-3xl scroll-mt-20 px-5",
		"aria-labelledby": "processo-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-[0.18em] text-accent uppercase",
				children: "Processo"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "processo-title",
				className: "font-display mt-2 text-4xl tracking-wide text-silver",
				children: "Três passos até o time"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ol, {
				className: "mt-6 grid gap-3 sm:grid-cols-3",
				initial: reduce ? false : "hidden",
				whileInView: "visible",
				viewport: {
					once: true,
					amount: .25
				},
				variants: {
					hidden: {},
					visible: { transition: { staggerChildren: .1 } }
				},
				children: PROCESS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
					className: "process-card",
					variants: {
						hidden: {
							opacity: 0,
							y: 12,
							filter: "blur(4px)"
						},
						visible: {
							opacity: 1,
							y: 0,
							filter: "blur(0px)",
							transition: { duration: .4 }
						}
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl tracking-wide text-accent",
							children: item.step
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-sm font-semibold text-foreground",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-normal text-muted-foreground",
							children: item.body
						})
					]
				}, item.step))
			})
		]
	});
}
function Requirements() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto mt-20 max-w-3xl px-5",
		"aria-labelledby": "requisitos-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-[0.18em] text-accent uppercase",
				children: "Requisitos"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "requisitos-title",
				className: "font-display mt-2 text-4xl tracking-wide text-silver",
				children: "Antes de se candidatar"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
				className: "section-card mt-6 flex flex-col gap-3",
				initial: reduce ? false : {
					opacity: 0,
					y: 12
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					amount: .3
				},
				transition: { duration: .4 },
				children: REQUIREMENTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-3 text-sm leading-normal text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "size-3",
							strokeWidth: 2.5
						})
					}), item]
				}, item))
			})
		]
	});
}
function Home() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillars, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Requirements, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
				className: "mx-auto mt-16 flex max-w-3xl flex-col items-center px-5 pb-8 pt-4 text-center",
				initial: reduce ? false : {
					opacity: 0,
					y: 16
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					amount: .4
				},
				transition: { duration: .45 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-[0.18em] text-accent uppercase",
						children: "Vagas abertas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-2 text-4xl tracking-wide text-silver sm:text-5xl",
						children: "Pronto para vestir o brasão?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-sm text-muted-foreground",
						children: "Candidatura rápida, em três etapas. A liderança responde pelo WhatsApp."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/candidatura",
						className: "cta-jump mt-6",
						children: ["Preencher candidatura", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
