import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { KontaktFormular } from "@/components/KontaktFormular";
import { contact } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const details = [
  {
    icon: Phone,
    label: "Telefon",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
];

export function Kontakt() {
  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-heading"
      className="section-y scroll-mt-24 bg-muted/50"
    >
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Kontaktdaten */}
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow={contact.eyebrow}
            title={contact.heading}
            intro={contact.intro}
          />

          <ul className="flex flex-col gap-4">
            {details.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-brand/40"
                >
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
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-subtle text-brand">
                <MapPin className="size-5" aria-hidden />
              </span>
              <span className="flex flex-col">
                <span className="text-xs font-medium uppercase tracking-wide text-subtle-foreground">
                  Adresse
                </span>
                <span className="font-medium text-foreground">
                  {siteConfig.contact.street}, {siteConfig.contact.postalCode}{" "}
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
        </div>

        {/* Formular */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <KontaktFormular />
          <p className="mt-5 text-xs leading-relaxed text-subtle-foreground">
            {contact.formNote}
          </p>
        </div>
      </div>
    </section>
  );
}
