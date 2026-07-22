import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { getIcon } from "@/lib/icons";
import { servicesDetail } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Leistungen – IT-Betrieb, Infrastruktur & Software",
  description:
    "IT-Lösungen, IT-Sicherheit, Software & JTL-Module und Entwicklung – die Leistungen von PComplett-IT für Unternehmen in Hannover und der Region.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Leistungen für den laufenden IT-Betrieb"
        subtitle="Fünf Kompetenzfelder, die wir einzeln oder kombiniert übernehmen – abgestimmt auf die Anforderungen Ihres Betriebs."
        breadcrumbs={[{ label: "Start", href: "/" }, { label: "Leistungen" }]}
      />

      <section className="section-y">
        <div className="container-page">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicesDetail.map((service, index) => {
              const Icon = getIcon(service.icon);
              return (
                <Reveal as="li" key={service.slug} delay={(index % 3) * 80}>
                  <Link
                    href={`/leistungen/${service.slug}`}
                    className="group flex h-full flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_18px_44px_-24px_rgba(13,14,17,0.35)]"
                  >
                    <span className="inline-flex size-12 items-center justify-center rounded-lg bg-brand-subtle text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-brand-foreground">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
                      {service.title}
                    </h2>
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.tagline}
                    </p>
                    <span className="inline-flex items-center gap-2 pt-1 text-sm font-semibold text-brand">
                      Mehr erfahren
                      <ArrowRight
                        className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
