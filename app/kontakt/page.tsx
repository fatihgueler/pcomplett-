import type { Metadata } from "next";
import { MapPin, Clock, Car, TramFront } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/Reveal";
import { KontaktFormular } from "@/components/KontaktFormular";
import { ContactMedia } from "@/components/ui/contact-media";
import { MapLazy } from "@/components/ui/map-lazy";
import { kontaktPage } from "@/lib/pages";
import { contact } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt – Anfrage & Rückruf",
  description:
    "Kontaktieren Sie PComplett-IT in Hannover: Beschreiben Sie Ihr Anliegen über das Formular oder fordern Sie einen Rückruf an. Persönlich und zeitnah – für Unternehmen.",
  alternates: { canonical: "/kontakt" },
};

const anfahrtIcons = [Car, TramFront];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow={kontaktPage.eyebrow}
        title={kontaktPage.heading}
        subtitle={kontaktPage.intro}
        breadcrumbs={[{ label: "Start", href: "/" }, { label: "Kontakt" }]}
      />

      <section id="formular" className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Kontaktdaten (nur als Bild, nicht verlinkt) + Anfahrt */}
          <div className="flex flex-col gap-8">
            <ul className="flex flex-col gap-4">
              {/* E-Mail: it-Adresse als Bild */}
              <li className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
                <ContactMedia kind="email-kontakt" label="E-Mail" />
              </li>
              {/* Telefon & Fax als Bild */}
              <li className="flex flex-wrap items-center gap-6 rounded-lg border border-border bg-card p-4">
                <ContactMedia kind="telefon" label="Telefon" />
                <ContactMedia kind="fax" label="Fax" />
              </li>
              <li className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-subtle text-brand">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-wide text-subtle-foreground">
                    Adresse
                  </span>
                  <span className="font-medium text-foreground">
                    {siteConfig.contact.street}
                    <br />
                    {siteConfig.contact.postalCode}{" "}
                    {siteConfig.contact.addressLocality}
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-subtle text-brand">
                  <Clock className="size-5" aria-hidden />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-wide text-subtle-foreground">
                    Erreichbarkeit
                  </span>
                  <span className="font-medium text-foreground">
                    {siteConfig.openingHours}
                  </span>
                </span>
              </li>
            </ul>

            {/* Karte: Leaflet + OpenStreetMap (kein Google Maps) */}
            <div className="overflow-hidden rounded-2xl border border-border">
              <MapLazy className="h-72 w-full" />
            </div>

            {/* Anfahrt */}
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-semibold text-ink">
                {kontaktPage.anfahrtHeading}
              </h2>
              <div className="flex flex-col gap-4">
                {kontaktPage.anfahrt.map((item, index) => {
                  const Icon = anfahrtIcons[index] ?? Car;
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-brand">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-ink">
                          {item.title}
                        </span>
                        <span className="text-sm leading-relaxed text-muted-foreground">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Formular */}
          <Reveal className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <KontaktFormular />
            <p className="mt-5 text-xs leading-relaxed text-subtle-foreground">
              {contact.formNote}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
