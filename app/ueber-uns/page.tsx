import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { CtaBand } from "@/components/sections/CtaBand";
import { aboutPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Über uns – IT-Systemhaus aus Hannover seit 1994",
  description:
    "PComplett-IT ist seit 1994 Ihr IT-Partner für Unternehmen in Hannover. Persönlich, herstellerunabhängig und mit dem Schwerpunkt professionelle IT-Betreuung.",
  alternates: { canonical: "/ueber-uns" },
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.heading}
        subtitle={aboutPage.intro}
        breadcrumbs={[{ label: "Start", href: "/" }, { label: "Über uns" }]}
      />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col gap-5">
            {aboutPage.story.map((paragraph, index) => (
              <Reveal key={index} delay={index * 70}>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              </Reveal>
            ))}

            {/* Kompetenzfelder inkl. Telefonanlagen */}
            <Reveal className="mt-2 flex flex-col gap-3">
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
                Unsere Kompetenzen
              </span>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {aboutPage.competences.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground"
                  >
                    <Check className="size-4 text-brand" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="order-first lg:order-last">
            <div className="glass-strong flex flex-col items-start gap-6 rounded-2xl p-8">
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
                Ihr Ansprechpartner
              </span>
              <div className="flex items-center gap-4">
                <MediaPlaceholder
                  label="{{FOTO_ANSPRECHPARTNER}}"
                  ratio="square"
                  className="size-16 shrink-0 rounded-2xl"
                />
                <span className="flex flex-col">
                  <span className="font-display text-lg font-semibold text-ink">
                    Frank Bernhardt
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Inhaber &amp; Geschäftsführung
                  </span>
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                &bdquo;Bei uns sprechen Sie mit Fachleuten, die Ihre IT kennen
                &ndash; direkt und verlässlich.&ldquo;
              </p>
              <Button asChild variant="outline">
                <Link href="/kontakt">Persönlich kennenlernen</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team / Büro – Bildplatzhalter */}
      <section className="section-y bg-muted/50">
        <div className="container-page flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Team &amp; Büro
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Ein eingespieltes Team in Hannover
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <MediaPlaceholder label="{{BILD_TEAM}}" ratio="video" className="w-full" />
            <MediaPlaceholder label="{{BILD_BUERO}}" ratio="video" className="w-full" />
            <MediaPlaceholder label="{{BILD_WERKSTATT}}" ratio="video" className="w-full" />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Was uns ausmacht
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Werte, auf die Sie sich verlassen können
            </h2>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPage.values.map((value, index) => (
              <Reveal
                as="li"
                key={value.title}
                delay={(index % 4) * 70}
                className="flex flex-col gap-2 rounded-lg border border-border bg-card p-6"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </Reveal>
            ))}
          </ul>

          <p className="text-sm text-muted-foreground">
            Für die Weiterleitung intern:{" "}
            <Link href="/firmenprofil" className="font-medium text-brand hover:underline">
              Firmenprofil als PDF herunterladen
            </Link>
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
