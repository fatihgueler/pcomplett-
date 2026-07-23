import type { Metadata } from "next";
import Link from "next/link";
import { Download, Check, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { PrintButton } from "@/components/PrintButton";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactMedia } from "@/components/ui/contact-media";
import { LogoMark } from "@/components/layout/LogoMark";
import { getIcon } from "@/lib/icons";
import { homeLeistungen, trust, servicevertraege } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Firmenprofil",
  description:
    "Firmenprofil von PComplett-IT: Leistungen, Serviceverträge, Referenzen und Kontakt auf einen Blick – als Web-Ansicht oder PDF-Download für Ihre Unterlagen.",
  alternates: { canonical: "/firmenprofil" },
};

const stand = new Date("2026-07-23").toLocaleDateString("de-DE", {
  year: "numeric",
  month: "long",
});

export default function FirmenprofilPage() {
  return (
    <>
      {/* Kopf: bewusst hell statt dunklem Hero – druckfreundlich */}
      <section className="border-b border-border bg-muted/40">
        <div className="container-page flex flex-col gap-6 py-14 md:py-20">
          <div className="flex items-center gap-3">
            <LogoMark className="h-10 w-10 shrink-0" />
            <span className="font-display text-xl font-bold tracking-tight text-ink">
              PComplett<span className="text-brand">-IT</span>
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand">
              <span aria-hidden className="h-px w-6 bg-brand" />
              Firmenprofil
            </span>
            <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              IT-Systemhaus für Unternehmen in Hannover
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <p className="text-sm text-subtle-foreground">Stand: {stand}</p>
          </div>

          <div className="no-print flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <a href="/downloads/pcomplett-it-firmenprofil.pdf" download>
                <Download className="size-4" aria-hidden />
                Als PDF herunterladen
              </a>
            </Button>
            <PrintButton />
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Leistungen"
            title="Was wir für Ihr Unternehmen übernehmen"
            intro="Sieben Kompetenzfelder, die wir einzeln oder kombiniert übernehmen."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeLeistungen.map((modul, index) => {
              const Icon = getIcon(modul.icon);
              return (
                <Reveal
                  as="li"
                  key={modul.title}
                  delay={(index % 3) * 60}
                  className="flex flex-col gap-2 rounded-lg border border-border bg-card p-5"
                >
                  <span className="inline-flex size-9 items-center justify-center rounded-lg bg-brand-subtle text-brand">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <h3 className="font-display text-base font-semibold text-ink">
                    {modul.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {modul.description}
                  </p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Vertrauens-Merkmale */}
      <section className="section-y bg-muted/50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Warum PComplett-IT"
            title="Verlässlich für Unternehmen"
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trust.points.map((point) => {
              const Icon = getIcon(point.icon);
              return (
                <li
                  key={point.title}
                  className="flex flex-col gap-2 rounded-lg border border-border bg-card p-5"
                >
                  <Icon className="size-5 text-brand" aria-hidden />
                  <h3 className="font-display text-base font-semibold text-ink">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {point.text}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Serviceverträge */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Serviceverträge"
            title="Betreuung in drei Stufen"
            intro={servicevertraege.note}
          />
          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {servicevertraege.tiers.map((tier) => (
              <li
                key={tier.name}
                className="flex flex-col gap-3 rounded-lg border border-border bg-card p-5"
              >
                <h3 className="font-display text-lg font-bold text-ink">
                  {tier.name}
                </h3>
                <p className="text-sm text-muted-foreground">{tier.tagline}</p>
                <p className="text-xs font-medium uppercase tracking-wide text-brand">
                  Reaktionszeit: {tier.reaction}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-brand" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Referenzen */}
      <section className="section-y bg-muted/50">
        <div className="container-page">
          <SectionHeading eyebrow="Referenzen" title="Ausgewählte Projekte" />
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {trust.testimonials.map((t, i) => (
              <li
                key={i}
                className="flex flex-col gap-3 rounded-lg border border-border bg-card p-5"
              >
                <p className="text-sm leading-relaxed text-foreground">{t.quote}</p>
                <div className="border-t border-border pt-3">
                  <p className="font-semibold text-ink">{t.author}</p>
                  <p className="text-xs text-subtle-foreground">{t.role}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-subtle-foreground">
              {trust.partnerHeading}
            </span>
            <p className="text-base text-foreground">
              {trust.partners.map((p) => p.name).join(" · ")}
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Kontakt" title="Sprechen wir über Ihr Vorhaben" />
          <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
            <div className="flex flex-col gap-4">
              <ContactMedia kind="telefon" label="Telefon" />
              <ContactMedia kind="email-service" label="E-Mail" />
              <p className="text-sm text-muted-foreground">
                {siteConfig.contact.street}
                <br />
                {siteConfig.contact.postalCode} {siteConfig.contact.addressLocality}
                <br />
                {siteConfig.openingHours}
              </p>
            </div>
            <Button asChild size="lg" className="no-print shrink-0">
              <Link href="/kontakt">
                Rückruf anfordern
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
