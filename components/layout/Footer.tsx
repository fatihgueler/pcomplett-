import Link from "next/link";
import { MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { ContactMedia } from "@/components/ui/contact-media";
import { siteConfig } from "@/lib/site";
import { footer, navLinks } from "@/lib/content";

export function Footer() {
  const year = 2026; // statisch, damit SSG deterministisch bleibt

  return (
    <footer className="border-t border-border bg-muted/60">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Marke + Tagline */}
        <div className="flex flex-col gap-4">
          <Logo showTagline />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {footer.tagline}
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer-Navigation" className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-ink">Navigation</h2>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/ki-in-der-praxis"
            className="text-sm text-muted-foreground transition-colors hover:text-brand"
          >
            KI in der Praxis
          </Link>
          <Link
            href="/fernwartung"
            className="text-sm text-muted-foreground transition-colors hover:text-brand"
          >
            Fernwartung
          </Link>
          <Link
            href="/karriere"
            className="text-sm text-muted-foreground transition-colors hover:text-brand"
          >
            Karriere
          </Link>
          <Link
            href="/firmenprofil"
            className="text-sm text-muted-foreground transition-colors hover:text-brand"
          >
            Firmenprofil (PDF)
          </Link>
        </nav>

        {/* Kontakt – E-Mail/Telefon aus Spam-Schutz nur als Bild, nicht verlinkt */}
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-ink">Kontakt</h2>
          <ContactMedia kind="telefon" label="Telefon" />
          <ContactMedia kind="email-service" label="E-Mail" />
          <p className="mt-1 inline-flex items-start gap-2.5 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
            <span>
              {siteConfig.contact.street}
              <br />
              {siteConfig.contact.postalCode}{" "}
              {siteConfig.contact.addressLocality}
            </span>
          </p>
          <p className="text-sm text-muted-foreground">
            Schnellster Weg:{" "}
            <Link href="/#rueckruf" className="font-medium text-brand hover:underline">
              Rückruf anfordern
            </Link>
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-4 py-6 text-sm text-subtle-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Alle Rechte vorbehalten.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
