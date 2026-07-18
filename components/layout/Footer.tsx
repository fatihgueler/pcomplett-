import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
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
        </nav>

        {/* Kontakt */}
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-ink">Kontakt</h2>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-brand"
          >
            <Phone className="size-4 text-brand" aria-hidden />
            {siteConfig.contact.phone}
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-brand"
          >
            <Mail className="size-4 text-brand" aria-hidden />
            {siteConfig.contact.email}
          </a>
          <p className="inline-flex items-start gap-2.5 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
            <span>
              {siteConfig.contact.street}
              <br />
              {siteConfig.contact.postalCode}{" "}
              {siteConfig.contact.addressLocality}
            </span>
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
