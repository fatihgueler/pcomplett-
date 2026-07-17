import type { Metadata } from "next";
import { Phone, Printer, Mail, MapPin, Clock, Car, TramFront } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/Reveal";
import { KontaktFormular } from "@/components/KontaktFormular";
import { kontaktPage } from "@/lib/pages";
import { contact } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt – Beratung anfragen",
  description:
    "Kontaktieren Sie PComplett in Hannover: Telefon 0511 760 773 0, service@pcomplett.de. Beratung für IT, KI und PC-Service – persönlich und zeitnah.",
  alternates: { canonical: "/kontakt" },
};

const details = [
  {
    icon: Phone,
    label: "Telefon",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
  },
  { icon: Printer, label: "Fax", value: siteConfig.contact.fax },
  {
    icon: Mail,
    label: "E-Mail",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
];

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
          {/* Kontaktdaten + Anfahrt */}
          <div className="flex flex-col gap-8">
            <ul className="flex flex-col gap-4">
              {details.map((item) => {
                const inner = (
                  <>
                    <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-subtle text-brand">
                      <item.icon className="size-5" aria-hidden />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs font-medium uppercase tracking-wide text-subtle-foreground">
                        {item.label}
                      </span>
                      <span className="font-medium text-foreground transition-colors group-hover:text-brand">
                        {item.value}
                      </span>
                    </span>
                  </>
                );
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-brand/40"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
                        {inner}
                      </div>
                    )}
                  </li>
                );
              })}
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
