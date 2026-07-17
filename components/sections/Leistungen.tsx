import Link from "next/link";
import { Sparkles, ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { getIcon } from "@/lib/icons";
import { services } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Leistungen() {
  return (
    <section
      id="leistungen"
      aria-labelledby="leistungen-heading"
      className="section-y scroll-mt-24"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Leistungen für Unternehmen"
          title="Von KI bis Infrastruktur – aus einer Hand"
          intro="Fünf Kompetenzfelder, ein Ansprechpartner. Wir kombinieren sie passgenau zu einer Lösung, die zu Ihrem Betrieb passt."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = getIcon(service.icon);
            const isFeatured = index === 0;
            return (
              <Reveal
                as="li"
                key={service.slug}
                delay={(index % 3) * 80}
                className={cn(isFeatured && "sm:col-span-2 lg:col-span-1")}
              >
                <Link
                  href={`/leistungen/${service.slug}`}
                  className={cn(
                    "group relative flex h-full flex-col gap-4 rounded-lg border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_44px_-24px_rgba(13,14,17,0.35)]",
                    isFeatured
                      ? "border-brand/40 bg-brand-subtle"
                      : "border-border bg-card hover:border-brand/40",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "inline-flex size-12 items-center justify-center rounded-lg transition-colors duration-200",
                        isFeatured
                          ? "bg-brand text-brand-foreground"
                          : "bg-brand-subtle text-brand group-hover:bg-brand group-hover:text-brand-foreground",
                      )}
                    >
                      <Icon className="size-6" aria-hidden />
                    </span>
                    {isFeatured ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-2.5 py-1 text-xs font-medium text-brand-foreground">
                        <Sparkles className="size-3" aria-hidden />
                        Unser Schwerpunkt
                      </span>
                    ) : (
                      <ArrowUpRight
                        className="size-5 text-subtle-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand group-hover:opacity-100"
                        aria-hidden
                      />
                    )}
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-brand">
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

        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/leistungen">Alle Leistungen im Überblick</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
