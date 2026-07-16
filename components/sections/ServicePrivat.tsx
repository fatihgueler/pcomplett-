import Link from "next/link";
import { Cog, HardDrive, UserRound, ArrowRight, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { servicePrivat } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = { Cog, HardDrive, UserRound };

export function ServicePrivat() {
  return (
    <section
      id="service-privat"
      aria-labelledby="service-privat-heading"
      className="section-y scroll-mt-24"
    >
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow={servicePrivat.eyebrow}
            title={servicePrivat.heading}
            intro={servicePrivat.intro}
          />

          <ul className="flex flex-col gap-4">
            {servicePrivat.items.map((item, index) => {
              const Icon = iconMap[item.icon] ?? Cog;
              return (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={index * 80}
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-4"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-subtle text-brand">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="font-semibold text-ink">{item.title}</span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </span>
                  </span>
                </Reveal>
              );
            })}
          </ul>

          <div>
            <Button asChild variant="outline" size="lg">
              <Link href="/#kontakt">
                Termin vereinbaren
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>

        <Reveal className="order-first lg:order-last">
          {/* TODO(CONTENT): Foto einsetzen ({{FOTO_1}}, z.B. Werkstatt/Service-Situation) via next/image */}
          <MediaPlaceholder label="{{FOTO_1}}" ratio="portrait" className="w-full" />
        </Reveal>
      </div>
    </section>
  );
}
