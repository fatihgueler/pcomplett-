import Link from "next/link";
import { cn } from "@/lib/utils";
import { LogoMark } from "./LogoMark";

type Props = {
  className?: string;
  onClick?: () => void;
  /** Untertitel „IT & KI-Lösungen · Hannover" anzeigen (z. B. im Footer). */
  showTagline?: boolean;
};

export function Logo({ className, onClick, showTagline = false }: Props) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="PComplett-IT – Startseite"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <LogoMark className="h-9 w-9 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5" />
      <span className="flex flex-col leading-tight">
        <span className="font-display text-xl font-bold tracking-tight text-ink">
          PComplett<span className="text-brand">-IT</span>
        </span>
        {showTagline ? (
          <span className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-subtle-foreground">
            IT &amp; KI-Lösungen · Hannover
          </span>
        ) : null}
      </span>
    </Link>
  );
}
