import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stoerung } from "@/lib/content";

/**
 * Dezenter Störungs-/Notfall-Hinweis, der zum Rückrufservice führt
 * (ersetzt die frühere Anruf-Box, ohne anklickbare Kontaktdaten).
 */
export function Stoerung() {
  return (
    <section aria-labelledby="stoerung-heading" className="section-y">
      <div className="container-page">
        <div className="flex flex-col items-start gap-5 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-subtle text-brand">
              <AlertTriangle className="size-6" aria-hidden />
            </span>
            <div className="flex flex-col gap-1.5">
              <h2
                id="stoerung-heading"
                className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl"
              >
                {stoerung.heading}
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                {stoerung.text}
              </p>
            </div>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <Link href={stoerung.cta.href}>
              {stoerung.cta.label}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
