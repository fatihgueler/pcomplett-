import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  onClick?: () => void;
};

/**
 * Wortmarke als Platzhalter-Logo.
 * {{LOGO}} – bei Vorliegen einer echten Logo-Datei durch next/image ersetzen.
 */
export function Logo({ className, onClick }: Props) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="PComplett – Startseite"
      className={cn(
        "group inline-flex items-baseline gap-0.5 font-display text-xl font-bold tracking-tight text-ink",
        className,
      )}
    >
      <span>PComplett</span>
      <span
        aria-hidden
        className="text-brand transition-transform duration-200 group-hover:translate-y-[-2px]"
      >
        .
      </span>
    </Link>
  );
}
