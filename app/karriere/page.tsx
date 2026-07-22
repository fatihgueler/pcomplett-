import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/CtaBand";
import { ContactMedia } from "@/components/ui/contact-media";
import { karrierePage } from "@/lib/pages";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Karriere – IT-Systemhaus Hannover",
  description:
    "Werden Sie Teil von PComplett-IT in Hannover: kurze Wege, moderne Technik und echte Verantwortung. Initiativbewerbungen sind jederzeit willkommen.",
  alternates: { canonical: "/karriere" },
};

export default function KarrierePage() {
  const { openPositions } = karrierePage;

  // JobPosting-Structured-Data – nur wenn tatsächlich Stellen gelistet sind.
  const jobPostingsJsonLd = openPositions.map((position) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: position.title,
    employmentType: position.type,
    hiringOrganization: {
      "@type": "Organization",
      name: siteConfig.legalName,
      sameAs: siteConfig.url,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.contact.addressLocality,
        postalCode: siteConfig.contact.postalCode,
        addressCountry: siteConfig.contact.addressCountry,
      },
    },
  }));

  return (
    <>
      {jobPostingsJsonLd.map((jsonLd, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ))}
      <PageHero
        eyebrow={karrierePage.eyebrow}
        title={karrierePage.heading}
        subtitle={karrierePage.intro}
        icon={Briefcase}
        breadcrumbs={[{ label: "Start", href: "/" }, { label: "Karriere" }]}
      />

      <section className="section-y">
        <div className="container-page flex flex-col gap-12">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {karrierePage.benefits.map((benefit, index) => (
              <Reveal
                as="li"
                key={benefit.title}
                delay={(index % 4) * 70}
                className="flex flex-col gap-2 rounded-lg border border-border bg-card p-6"
              >
                <h2 className="font-display text-lg font-semibold text-ink">
                  {benefit.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.text}
                </p>
              </Reveal>
            ))}
          </ul>

          <div className="flex flex-col gap-5">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
              Offene Stellen
            </h2>
            {openPositions.length > 0 ? (
              <ul className="flex flex-col gap-3">
                {openPositions.map((position) => (
                  <li
                    key={position.title}
                    className="flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-5"
                  >
                    <span className="font-semibold text-ink">
                      {position.title}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {position.type}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-start gap-5 rounded-2xl border border-border bg-muted/50 p-8">
                <p className="max-w-2xl leading-relaxed text-muted-foreground">
                  {karrierePage.initiativ}
                </p>
                <ContactMedia kind="email-service" label="Bewerbung an" />
                <Button asChild>
                  <Link href="/kontakt">
                    Initiativ bewerben
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
