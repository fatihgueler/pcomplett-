import Link from "next/link";
import { Check, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { servicevertraege } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Serviceverträge in drei Stufen – bewusst OHNE Preise (nur Leistungsumfang).
 * Reaktionszeiten sind Platzhalter und werden individuell festgelegt.
 */
export function Servicevertraege() {
  return (
    <section
      id="servicevertraege"
      aria-labelledby="servicevertraege-heading"
      className="section-y scroll-mt-24 bg-muted/50"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow={servicevertraege.eyebrow}
          title={servicevertraege.heading}
          intro={servicevertraege.intro}
        />

        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {servicevertraege.tiers.map((tier, index) => (
            <Reveal
              as="li"
              key={tier.name}
              delay={index * 80}
              className={cn(
                "relative flex h-full flex-col gap-5 rounded-2xl border bg-card p-7",
                tier.featured
                  ? "border-brand shadow-[0_18px_44px_-24px_rgba(13,14,17,0.35)]"
                  : "border-border",
              )}
            >
              {tier.featured ? (
                <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-xs font-medium text-brand-foreground">
                  <Star className="size-3" aria-hidden />
                  Empfohlen
                </span>
              ) : null}

              <div className="flex flex-col gap-1">
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                  {tier.name}
                </h3>
                <p className="text-sm text-muted-foreground">{tier.tagline}</p>
              </div>

              <div className="flex flex-col gap-1 rounded-lg bg-muted/70 px-4 py-3">
                <span className="text-xs font-medium uppercase tracking-wide text-subtle-foreground">
                  {servicevertraege.reactionLabel}
                </span>
                <span className="font-semibold text-ink">{tier.reaction}</span>
              </div>

              <ul className="flex flex-1 flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-subtle text-brand">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button asChild variant={tier.featured ? "primary" : "outline"} className="w-full">
                <Link href="#rueckruf">Angebot anfragen</Link>
              </Button>
            </Reveal>
          ))}
        </ul>

        <p className="mt-6 text-center text-sm text-subtle-foreground">
          {servicevertraege.note}
        </p>
      </div>
    </section>
  );
}
