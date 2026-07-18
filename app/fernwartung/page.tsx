import type { Metadata } from "next";
import { PhoneCall, ShieldCheck, MonitorSmartphone, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { fernwartungPage } from "@/lib/pages";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fernwartung – schnelle IT-Hilfe per Fernzugriff",
  description:
    "Schnelle IT-Hilfe ohne Anfahrt: Mit der Fernwartung von PComplett lösen wir Probleme direkt an Ihrem Bildschirm – sicher und mit Ihrer Zustimmung.",
  alternates: { canonical: "/fernwartung" },
};

const telHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

export default function FernwartungPage() {
  const hasDownload = !fernwartungPage.downloadHref.includes("{{");

  return (
    <>
      <PageHero
        eyebrow={fernwartungPage.eyebrow}
        title={fernwartungPage.heading}
        subtitle={fernwartungPage.intro}
        icon={MonitorSmartphone}
        breadcrumbs={[{ label: "Start", href: "/" }, { label: "Fernwartung" }]}
      />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                So läuft eine Fernwartung ab
              </h2>
              <ol className="grid gap-4 sm:grid-cols-2">
                {fernwartungPage.steps.map((step, index) => (
                  <Reveal
                    as="li"
                    key={step.title}
                    delay={index * 70}
                    className="flex flex-col gap-2 rounded-lg border border-border bg-card p-5"
                  >
                    <h3 className="font-semibold text-ink">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </Reveal>
                ))}
              </ol>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="inline-flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-ink">
                <ShieldCheck className="size-6 text-brand" aria-hidden />
                Sicher &amp; unter Ihrer Kontrolle
              </h2>
              <ul className="flex flex-col gap-3">
                {fernwartungPage.security.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-subtle text-brand">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Aktion */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="glass-strong flex flex-col gap-5 rounded-2xl p-6">
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                <MonitorSmartphone className="size-6" aria-hidden />
              </span>
              <h2 className="font-display text-xl font-semibold text-ink">
                Fernwartung starten
              </h2>
              {hasDownload ? (
                <a
                  href={fernwartungPage.downloadHref}
                  className="btn-sheen relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md bg-brand px-6 py-3 font-medium text-brand-foreground transition-colors hover:bg-brand-hover"
                >
                  {fernwartungPage.downloadLabel}
                </a>
              ) : (
                <p className="rounded-md border border-dashed border-brand/40 bg-brand-subtle px-4 py-3 text-sm text-brand">
                  {fernwartungPage.toolNote}
                </p>
              )}
              <p className="text-sm text-muted-foreground">
                Rufen Sie uns vorher kurz an – dann begleiten wir Sie durch die
                wenigen Schritte:
              </p>
              <a
                href={telHref}
                className="inline-flex items-center gap-2 font-semibold text-brand hover:text-brand-hover"
              >
                <PhoneCall className="size-4" aria-hidden />
                {siteConfig.contact.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
