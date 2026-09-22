import { GUILD_MARK, GUILD_NAME, GUILD_TAGLINE } from "@/lib/recruitment";

export function SiteFooter() {
  return (
    <footer className="px-5 pb-16 pt-8 text-center">
      <div className="rule-brand mx-auto mb-6 max-w-xs" />
      <p className="font-display text-2xl tracking-[0.16em] text-silver">
        {GUILD_NAME} <span className="tracking-normal text-accent">{GUILD_MARK}</span>
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{GUILD_TAGLINE}</p>
      <p className="mt-4 text-xs text-subtle">{GUILD_NAME} · Recrutamento Free Fire</p>
    </footer>
  );
}
