import type { Metadata } from "next";
import { Quote, ImageIcon } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/Reveal";
import { TrustStrip } from "@/components/ui/trust-strip";
import { CtaBand } from "@/components/sections/CtaBand";
import { brandLogoMap } from "@/components/ui/brand-logos";
import { trust } from "@/lib/content";

export const metadata: Metadata = {
  title: "Referenzen – ausgewählte Projekte & Partner",
  description:
    "Ausgewählte Referenzprojekte von PComplett: Warenwirtschaft, Automatisierung, Fachsoftware und Telekommunikation. Technologie-Partner u. a. HP, Fujitsu, Starface und Yeastar.",
  alternates: { canonical: "/referenzen" },
};

// Fehlende Logos, die noch als echte SVG geliefert werden müssen.
const fehlendeLogos = trust.partners
  .filter((p) => !p.icon)
  .map((p) => `{{LOGO_${p.name.toUpperCase()}}}`);

export default function ReferenzenPage() {
  return (
    <>
      <PageHero
        eyebrow="Referenzen"
        title="Projekte, für die man uns kennt"
        subtitle="Seit über 30 Jahren realisieren wir IT-, Software- und Telefonie-Projekte für Unternehmen – vom Handwerksbetrieb bis zu namhaften Auftraggebern. Eine Auswahl."
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

          <Reveal>
            <TrustStrip points={trust.points} />
          </Reveal>
        </div>
      </section>

      {/* Partner-Logo-Raster */}
      <section className="section-y bg-muted/50">
        <div className="container-page flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              {trust.partnerHeading}
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Bewährte Technologie-Partner
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              Für Telefonanlagen setzen wir u. a. auf Starface und Yeastar,
              für Hardware auf HP und Fujitsu – herstellerunabhängig kombiniert.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {trust.partners.map((partner) => {
              const Logo = partner.icon ? brandLogoMap[partner.icon] : undefined;
              return (
                <Reveal
                  as="li"
                  key={partner.name}
                  className="flex aspect-[3/2] items-center justify-center rounded-lg border border-border bg-card p-6"
                >
                  {Logo ? (
                    <Logo className="h-9 w-auto text-ink" />
                  ) : (
                    <div
                      role="img"
                      aria-label={`Platzhalter für Logo: ${partner.name}`}
                      className="flex flex-col items-center gap-1.5 text-subtle-foreground"
                    >
                      <ImageIcon className="size-6" aria-hidden />
                      <span className="font-display text-lg font-semibold text-ink">
                        {partner.name}
                      </span>
                      <span className="text-[0.65rem] font-medium uppercase tracking-wide">
                        Logo folgt
                      </span>
                    </div>
                  )}
                </Reveal>
              );
            })}
          </ul>

          {fehlendeLogos.length > 0 ? (
            <p className="text-sm text-subtle-foreground">
              Noch als echtes Logo (SVG) zu liefern:{" "}
              <span className="font-medium text-foreground">
                {fehlendeLogos.join(", ")}
              </span>
            </p>
          ) : null}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
