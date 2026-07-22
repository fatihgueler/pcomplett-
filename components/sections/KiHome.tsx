import Link from "next/link";
import { Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { kiHome } from "@/lib/content";

/**
 * KI-Baustein der Startseite – bewusst untergeordnet (ein Anwendungsfall).
 * KI ist nicht das Hauptmerkmal des Unternehmens.
 */
export function KiHome() {
  return (
    <section
      id="ki"
      aria-labelledby="ki-home-heading"
      className="section-y scroll-mt-24"
    >
      <div className="container-page">
        <Reveal className="flex flex-col gap-6 rounded-2xl border border-border bg-accent-subtle p-8 md:flex-row md:items-center md:justify-between md:gap-12 md:p-12">
          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              <Sparkles className="size-4" aria-hidden />
              {kiHome.eyebrow}
            </span>
            <h2
              id="ki-home-heading"
              className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl"
            >
              {kiHome.heading}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              {kiHome.text}
            </p>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-accent">
              <ShieldCheck className="size-4" aria-hidden />
              Lokal, ohne Cloud – Ihre Daten bleiben im Haus.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="shrink-0">
            <Link href={kiHome.cta.href}>
              {kiHome.cta.label}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
