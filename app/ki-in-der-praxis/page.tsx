import type { Metadata } from "next";
import Link from "next/link";
import { AudioLines, ShieldCheck, ServerOff, Lock, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/CtaBand";
import { kiPraxis } from "@/lib/content";

export const metadata: Metadata = {
  title: "KI in der Praxis – Sprache-zu-Text mit lokaler KI",
  description:
    "PComplett-IT wandelt Sprache mit lokal laufender KI (Whisper) automatisch in Text um – ohne Cloud, ohne Datenabfluss, datenschutzkonform.",
  alternates: { canonical: "/ki-in-der-praxis" },
};

const datenschutz = [
  {
    icon: ServerOff,
    title: "Keine Cloud",
    text: "Die KI läuft lokal bei Ihnen im Haus – Aufnahmen verlassen Ihr Netzwerk nicht.",
  },
  {
    icon: Lock,
    title: "Daten bleiben intern",
    text: "Vertrauliche Gespräche und Notizen werden nicht an externe Dienste übertragen.",
  },
  {
    icon: ShieldCheck,
    title: "DSGVO-konform",
    text: "Datenminimierung von Anfang an – passend zu Ihren Anforderungen an Vertraulichkeit.",
  },
];

export default function KiInDerPraxisPage() {
  const useCase = kiPraxis.cases[0];

  return (
    <>
      <PageHero
        eyebrow={kiPraxis.eyebrow}
        title={kiPraxis.heading}
        subtitle={kiPraxis.intro}
        icon={AudioLines}
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "KI in der Praxis" },
        ]}
      />

      <section className="section-y">
        <div className="container-page flex flex-col gap-8">
          {/* Der eine Anwendungsfall */}
          <Reveal className="grid gap-6 rounded-2xl border border-border bg-card p-6 sm:p-8 md:grid-cols-[auto_1fr] md:gap-8">
            <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-brand-subtle text-brand">
              <AudioLines className="size-7" aria-hidden />
            </span>
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                {useCase.title}
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {useCase.problem}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {useCase.solution}
                </p>
                <p className="rounded-lg bg-brand-subtle p-4 text-sm font-medium leading-relaxed text-ink">
                  {useCase.result}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Warum lokal? Datenschutz im Fokus */}
          <div className="flex flex-col gap-6 rounded-2xl border border-border bg-accent-subtle p-6 sm:p-8">
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                <ShieldCheck className="size-4" aria-hidden />
                Datenschutz im Fokus
              </span>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                Warum wir die KI lokal betreiben
              </h2>
            </div>
            <ul className="grid gap-5 sm:grid-cols-3">
              {datenschutz.map((item, index) => (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={index * 70}
                  className="flex flex-col gap-2 rounded-lg border border-border bg-card p-5"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-accent-subtle text-accent">
                    <item.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal className="flex justify-center">
            <Button asChild size="lg">
              <Link href={kiPraxis.cta.href}>
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
