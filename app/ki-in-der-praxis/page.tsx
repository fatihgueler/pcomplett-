import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/CtaBand";
import { getIcon } from "@/lib/icons";
import { kiPraxis } from "@/lib/content";

export const metadata: Metadata = {
  title: "KI in der Praxis – echte Automatisierung",
  description:
    "Wie PComplett KI im eigenen Betrieb einsetzt: automatisierte Auftragsbearbeitung, KI-gestützte E-Mail-Bearbeitung und Sprach-zu-Text. Genau das bauen wir auch für Sie.",
  alternates: { canonical: "/ki-in-der-praxis" },
};

export default function KiInDerPraxisPage() {
  return (
    <>
      <PageHero
        eyebrow={kiPraxis.eyebrow}
        title={kiPraxis.heading}
        subtitle={kiPraxis.intro}
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "KI in der Praxis" },
        ]}
      />

      <section className="section-y">
        <div className="container-page flex flex-col gap-6">
          {kiPraxis.cases.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal
                key={item.title}
                delay={index * 60}
                className="grid gap-6 rounded-2xl border border-border bg-card p-6 sm:p-8 md:grid-cols-[auto_1fr] md:gap-8"
              >
                <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-brand-subtle text-brand">
                  <Icon className="size-7" aria-hidden />
                </span>
                <div className="flex flex-col gap-4">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                    {item.title}
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.problem}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.solution}
                    </p>
                    <p className="rounded-lg bg-brand-subtle p-4 text-sm font-medium leading-relaxed text-ink">
                      {item.result}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}

          <Reveal className="mt-4 flex justify-center">
            <Button asChild size="lg">
              <Link href="/kontakt">
                {kiPraxis.cta.label}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
