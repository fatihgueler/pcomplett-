import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { Button } from "@/components/ui/button";
import { getIcon } from "@/lib/icons";
import { servicesDetail, getServiceDetail } from "@/lib/pages";
import { siteConfig } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicesDetail.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) return {};
  return {
    title: `${service.title} – Leistungen`,
    description: service.tagline,
    alternates: { canonical: `/leistungen/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) notFound();

  const Icon = getIcon(service.icon);
  const others = servicesDetail.filter((s) => s.slug !== service.slug);

  // Service-Schema (GEO/SEO): beschreibt die Leistung maschinenlesbar.
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.tagline,
    serviceType: service.title,
    areaServed: siteConfig.contact.addressLocality,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/leistungen/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PageHero
        eyebrow="Leistung"
        title={service.title}
        subtitle={service.tagline}
        icon={Icon}
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Leistungen", href: "/leistungen" },
          { label: service.title },
        ]}
      />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-10">
            <Reveal>
              <p className="text-lg leading-relaxed text-foreground">
                {service.intro}
              </p>
            </Reveal>

            {/* Ihr Nutzen */}
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                Ihr Nutzen
              </h2>
              <ul className="grid gap-4 sm:grid-cols-3">
                {service.benefits.map((benefit, index) => (
                  <Reveal
                    as="li"
                    key={benefit.title}
                    delay={index * 80}
                    className="flex flex-col gap-2 rounded-lg border border-border bg-card p-5"
                  >
                    <h3 className="font-semibold text-ink">{benefit.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {benefit.text}
                    </p>
                  </Reveal>
                ))}
              </ul>
            </div>

            {/* Das leisten wir */}
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                Das leisten wir
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.leistungen.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-subtle text-brand">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <div className="glass-strong flex flex-col gap-4 rounded-2xl p-6">
              <span className="glass inline-flex size-12 items-center justify-center rounded-xl text-brand">
                <Icon className="size-6" aria-hidden />
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.audience}
              </p>
              <Button asChild className="w-full">
                <Link href="/kontakt">
                  Beratung anfragen
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-subtle-foreground">
                Weitere Leistungen
              </h2>
              <ul className="flex flex-col gap-1">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/leistungen/${s.slug}`}
                      className="group flex items-center justify-between gap-2 rounded-md px-2 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-brand"
                    >
                      {s.title}
                      <ArrowUpRight
                        className="size-4 text-subtle-foreground transition-colors group-hover:text-brand"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
