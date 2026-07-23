import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlueprintLines } from "@/components/BlueprintLines";

export const metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

/**
 * Markenkonsistente 404-Seite. Fängt kaputte/veraltete Links ruhig auf und
 * führt zurück zur Startseite oder zum Rückrufservice.
 */
export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden border-b border-border bg-ink">
      <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-[0.08]" />
      <BlueprintLines className="pointer-events-none absolute -right-8 top-1/2 hidden h-72 w-auto -translate-y-1/2 text-white/20 md:block" />

      <div className="container-page relative flex flex-col items-start gap-6 py-20">
        <span className="inline-flex items-center gap-2 rounded-sm border-l-2 border-brand bg-white/5 px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-white/90">
          <span aria-hidden className="size-1.5 rounded-full bg-brand" />
          Fehler 404
        </span>

        <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
          Diese Seite existiert nicht mehr.
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-white/80">
          Der Link ist veraltet oder die Adresse wurde falsch eingegeben. Nutzen
          Sie die Startseite oder fordern Sie direkt einen Rückruf an.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="size-4" aria-hidden />
              Zur Startseite
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 bg-white/10 text-white hover:border-white hover:bg-white/15 hover:text-white"
          >
            <Link href="/kontakt">
              Kontakt aufnehmen
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
