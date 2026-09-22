import { Link } from "@tanstack/react-router";
import { GUILD_MARK, GUILD_NAME } from "@/lib/recruitment";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="mx-auto flex h-14 max-w-5xl items-center px-5">
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
      </div>
    </header>
  );
}
