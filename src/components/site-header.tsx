import { Link, useLocation } from "@tanstack/react-router";
import { GUILD_MARK, GUILD_NAME } from "@/lib/recruitment";

export function SiteHeader() {
  const { pathname } = useLocation();
  const onForm = pathname.startsWith("/candidatura");

  return (
    <header className="site-header">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-5">
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <img
            src="/latam-mark.webp"
            alt=""
            width={32}
            height={32}
            className="size-8"
            decoding="async"
          />
          <span className="font-display text-xl tracking-[0.14em] text-silver">
            {GUILD_NAME} <span className="tracking-normal text-accent">{GUILD_MARK}</span>
          </span>
        </Link>

        {onForm ? (
          <Link to="/" className="cta-ghost min-h-11 px-4 text-sm">
            Início
          </Link>
        ) : (
          <Link to="/candidatura" className="cta-jump min-h-11 px-4 text-sm">
            Candidatar-se
          </Link>
        )}
      </div>
    </header>
  );
}
