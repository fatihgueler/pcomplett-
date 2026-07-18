import Link from "next/link";
import { FileText, Mail, AudioLines, ArrowRight, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { kiPraxis } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = { FileText, Mail, AudioLines };

export function KiPraxis() {
  return (
    <section
      id="ki-praxis"
      aria-labelledby="ki-praxis-heading"
      className="section-y scroll-mt-24 bg-muted/50"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow={kiPraxis.eyebrow}
          title={kiPraxis.heading}
          intro={kiPraxis.intro}
        />

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {kiPraxis.cases.map((item, index) => {
            const Icon = iconMap[item.icon] ?? FileText;
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 90}
                className="flex h-full flex-col gap-4 rounded-lg border border-border bg-card p-6"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-subtle text-brand">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <div className="flex flex-col gap-2 text-sm leading-relaxed">
                  <p className="text-muted-foreground">{item.problem}</p>
                  <p className="text-muted-foreground">{item.solution}</p>
                  <p className="font-medium text-ink">{item.result}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href={kiPraxis.cta.href}>
              {kiPraxis.cta.label}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/ki-in-der-praxis">Alle KI-Beispiele ansehen</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
