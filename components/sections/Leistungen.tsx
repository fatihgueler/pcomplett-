import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { getIcon } from "@/lib/icons";
import { homeLeistungen } from "@/lib/content";

/**
 * Leistungsmodule der Startseite – die Haupteinnahmequellen prominent beworben:
 * Serviceverträge, Serveraufbau, Netzwerke, Arbeitsplätze, Telefonanlagen,
 * IT-Sicherheit & Hardware sowie Hardware & Software.
 */
export function Leistungen() {
  return (
    <section
      id="leistungen"
      aria-labelledby="leistungen-heading"
      className="section-y scroll-mt-24"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Unsere Leistungen"
          title="Professionelle IT-Betreuung für Unternehmen"
          intro="Von der laufenden Betreuung über Serveraufbau und Netzwerke bis zur Telefonanlage – ein Ansprechpartner für Ihre komplette IT."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homeLeistungen.map((modul, index) => {
            const Icon = getIcon(modul.icon);
            return (
              <Reveal
                as="li"
                key={modul.title}
                delay={(index % 3) * 80}
                className="group flex h-full flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/40"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-lg bg-brand-subtle text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-brand-foreground">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                  {modul.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {modul.description}
                </p>
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="#rueckruf">
              Rückruf anfordern
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/leistungen">Alle Leistungen im Detail</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
