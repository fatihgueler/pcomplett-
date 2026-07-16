# PComplett – Website (Relaunch)

Moderne, vollständig responsive Website für das IT-Systemhaus **PComplett**.
Positioniert PComplett als kompetenten IT-Partner für kleine und mittlere
Unternehmen und generiert Leads über mehrere Call-to-Actions und ein
Kontaktformular.

## Tech-Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** (Design-Tokens via CSS-Variablen)
- **shadcn/ui**-Stil UI-Primitives (im Projekt, keine Runtime-Dependency)
- **lucide-react** (Icons), **zod** (Validierung)
- Effekte: **CSS-Transitions + IntersectionObserver** (kein Framer Motion) –
  respektiert `prefers-reduced-motion`

## Lokal starten

```bash
npm install
npm run dev        # http://localhost:3000
```

Weitere Skripte:

```bash
npm run build      # Produktions-Build
npm run start      # Produktions-Server (nach build)
npm run lint       # ESLint
```

> Node.js ≥ 20.19 empfohlen.

## Projektstruktur

```
app/
  layout.tsx            Root-Layout: Fonts, globale Metadaten, JSON-LD, Header/Footer
  page.tsx              Startseite (komponiert alle Sektionen)
  globals.css           Design-Tokens (Farben, Spacing, Typo) + Effekt-Utilities
  sitemap.ts / robots.ts  SEO
  icon.tsx / opengraph-image.tsx  Favicon & OG-Bild (dynamisch generiert)
  api/kontakt/route.ts  Kontaktformular-Backend (Stub, siehe CONTENT.md)
  impressum|datenschutz|agb/page.tsx  Rechtsseiten
components/
  layout/               Header, Footer, Logo, LegalPage
  sections/             Hero, Leistungen, Vertrauen, Partner, CtaBand, Kontakt
  ui/                   Button, Card, Input, Textarea, Label, SectionHeading
  seo/JsonLd.tsx        Schema.org LocalBusiness/ProfessionalService
  Reveal.tsx            Scroll-Reveal (IntersectionObserver)
  KontaktFormular.tsx   Formular mit Client-Validierung (zod)
lib/
  content.ts            ← ALLE Texte zentral (hier Inhalte ändern)
  site.ts               Kontakt-/Metadaten-Konfiguration
  contact-schema.ts     Zod-Schema (Client + Server)
  utils.ts              cn()-Helper
```

## Inhalte ändern

- **Texte**: `lib/content.ts`
- **Kontakt-/Firmendaten & Metadaten**: `lib/site.ts`
- **Farben/Spacing/Typografie**: `app/globals.css` (Design-Tokens)
- **Offene Platzhalter** (`{{...}}`): siehe **[CONTENT.md](./CONTENT.md)**

## Neue Sektion hinzufügen

1. Komponente unter `components/sections/` anlegen (Muster: bestehende Sektionen).
2. Texte in `lib/content.ts` ergänzen und importieren.
3. In `app/page.tsx` an gewünschter Stelle einfügen.
4. Für Scroll-Effekt Inhalte in `<Reveal>` wrappen.

## Deployment

Vercel-ready. Schritt-für-Schritt-Anleitung in **[DEPLOYMENT.md](./DEPLOYMENT.md)**.
