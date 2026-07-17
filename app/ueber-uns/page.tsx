import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/Reveal";
import { StatGrid } from "@/components/ui/stat-grid";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { CtaBand } from "@/components/sections/CtaBand";
import { aboutPage } from "@/lib/pages";
import { trust } from "@/lib/content";

export const metadata: Metadata = {
  title: "Über uns – IT-Systemhaus aus Hannover seit 1994",
  description:
    "PComplett ist seit 1994 Ihr IT-Partner in Hannover. Persönlich, herstellerunabhängig und praxisnah – heute mit dem Schwerpunkt IT und KI.",
  alternates: { canonical: "/ueber-uns" },
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.heading}
        subtitle={aboutPage.intro}
        breadcrumbs={[{ label: "Start", href: "/" }, { label: "Über uns" }]}
      />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col gap-5">
            {aboutPage.story.map((paragraph, index) => (
              <Reveal key={index} delay={index * 70}>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              </Reveal>
            ))}
            <p className="mt-2 font-medium text-ink">{aboutPage.ownerNote}</p>
          </div>
          <Reveal className="order-first lg:order-last">
            {/* TODO(CONTENT): Team-/Bürofoto einsetzen via next/image */}
            <MediaPlaceholder label="Foto folgt" ratio="square" className="w-full" />
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-muted/50">
        <div className="container-page flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Was uns ausmacht
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Werte, auf die Sie sich verlassen können
            </h2>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPage.values.map((value, index) => (
              <Reveal
                as="li"
                key={value.title}
                delay={(index % 4) * 70}
                className="flex flex-col gap-2 rounded-lg border border-border bg-card p-6"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <StatGrid stats={trust.stats} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
