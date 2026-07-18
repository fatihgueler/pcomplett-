import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/Reveal";
import { StatGrid } from "@/components/ui/stat-grid";
import { PartnerMarquee } from "@/components/ui/partner-marquee";
import { CtaBand } from "@/components/sections/CtaBand";
import { trust } from "@/lib/content";

export const metadata: Metadata = {
  title: "Referenzen – ausgewählte Projekte",
  description:
    "Ausgewählte Referenzprojekte von PComplett: Warenwirtschaft, Automatisierung, Fachsoftware und Telekommunikation für namhafte Auftraggeber.",
  alternates: { canonical: "/referenzen" },
};

export default function ReferenzenPage() {
  return (
    <>
      <PageHero
        eyebrow="Referenzen"
        title="Projekte, für die man uns kennt"
        subtitle="Seit über 30 Jahren realisieren wir IT- und Software-Projekte – vom Handwerksbetrieb bis zu namhaften Auftraggebern. Eine Auswahl."
        breadcrumbs={[{ label: "Start", href: "/" }, { label: "Referenzen" }]}
      />

      <section className="section-y">
        <div className="container-page flex flex-col gap-12">
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {trust.testimonials.map((ref, index) => (
              <Reveal
                as="li"
                key={index}
                delay={(index % 3) * 80}
                className="flex h-full flex-col gap-5 rounded-lg border border-border bg-card p-6"
              >
                <Quote className="size-7 text-brand" aria-hidden />
                <p className="flex-1 text-base leading-relaxed text-foreground">
                  {ref.quote}
                </p>
                <footer className="mt-1 border-t border-border pt-4">
                  <p className="font-semibold text-ink">{ref.author}</p>
                  <p className="text-sm text-muted-foreground">{ref.role}</p>
                </footer>
              </Reveal>
            ))}
          </ul>

          {/* Partner */}
          <Reveal className="flex flex-col gap-6">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-subtle-foreground">
              {trust.partnerHeading}
            </span>
            <PartnerMarquee partners={trust.partners} />
          </Reveal>

          <Reveal>
            <StatGrid stats={trust.stats} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
