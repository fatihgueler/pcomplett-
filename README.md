# PComplett – Website (Relaunch)

Moderne, vollständig responsive Landing Page mit Unterseiten für das
**IT- & KI-Systemhaus PComplett** (künftig „… IT GmbH“). Positioniert PComplett
als zeitgemäßen IT- und KI-Partner für **Unternehmen und Privatkunden**,
generiert Leads und ist für Google **und** KI-Suchen (ChatGPT, Claude,
Perplexity) optimiert.

## Tech-Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** (Design-Tokens via CSS-Variablen)
- **shadcn/ui**-Stil UI-Primitives (im Projekt, keine Runtime-Dependency)
- **lucide-react** (Icons), **zod** (Validierung)
- **Claude API** für den Chatbot (serverseitig, per `fetch` – kein SDK)
- Effekte: **CSS-Transitions + IntersectionObserver** (kein Framer Motion) –
  respektiert `prefers-reduced-motion`

## Lokal starten

```bash
npm install
npm run dev        # http://localhost:3000
```

Weitere Skripte: `npm run build`, `npm run start`, `npm run lint`.
Node.js ≥ 20.19 empfohlen. Umgebungsvariablen: `.env.example` → `.env.local`.

## Projektstruktur

```
app/
  layout.tsx            Root-Layout: Fonts, Metadaten, JSON-LD, Header/Footer/Chatbot
  page.tsx              Startseite (komponiert alle Sektionen)
  globals.css           Design-Tokens + Effekt-Utilities
  sitemap.ts / robots.ts
  icon.tsx / opengraph-image.tsx   Favicon & OG-Bild (dynamisch generiert)
  api/kontakt/route.ts  Kontakt → Ticket-Adapter (lib/tickets.ts)
  api/newsletter/route.ts  Newsletter Double-Opt-in (Stub)
  api/chat/route.ts     Chatbot → Claude API (Fallback ohne Key)
  impressum|datenschutz|agb/page.tsx  Rechtsseiten
components/
  layout/               Header, Footer, Logo, LegalPage
  sections/             Hero, EntryCards, Leistungen, KiPraxis, ServicePrivat,
                        Vertrauen, CtaBand, Kontakt, Newsletter
  ui/                   Button, Card, Input, Textarea, Label, SectionHeading,
                        MediaPlaceholder
  seo/JsonLd.tsx        Schema.org LocalBusiness/ProfessionalService
  Reveal.tsx            Scroll-Reveal (IntersectionObserver)
  KontaktFormular.tsx / NewsletterForm.tsx / Chatbot.tsx
lib/
  content.ts            ← ALLE Texte zentral (hier Inhalte ändern)
  site.ts               Kontakt-/Metadaten-Konfiguration
  contact-schema.ts / newsletter-schema.ts   Zod-Schemata (Client + Server)
  tickets.ts            Ticket-Adapter (Interface + Mock-Adapter)
  chat-prompt.ts        System-Prompt des Chatbots aus den Leistungstexten
  utils.ts              cn()-Helper
public/
  llms.txt              Maschinenlesbare Zusammenfassung für KI-Suchmaschinen
```

## Inhalte ändern

- **Texte**: `lib/content.ts` · **Firmendaten/Metadaten**: `lib/site.ts`
- **Farben/Spacing/Typografie**: `app/globals.css` (Design-Tokens)
- **Offene Platzhalter** (`{{...}}`): siehe **[CONTENT.md](./CONTENT.md)**

## Funktionale Anbindungen

- **Kontaktformular → Ticketsystem:** Adapter-Muster in `lib/tickets.ts`
  (`TicketAdapter`-Interface + Mock-Adapter). Ein echter Adapter
  (Zammad/Freshdesk/osTicket) wird ergänzt, ohne die API-Route zu ändern.
- **Chatbot:** `app/api/chat/route.ts` ruft die Claude API serverseitig auf
  (`ANTHROPIC_API_KEY`, Modell `claude-sonnet-4-6`, per ENV überschreibbar).
  Ohne Key zeigt das Widget einen freundlichen Hinweis statt eines Fehlers.
  Der System-Prompt wird aus den Leistungstexten generiert (`lib/chat-prompt.ts`).
- **Newsletter:** `app/api/newsletter/route.ts` ist ein Double-Opt-in-Stub mit
  TODO für Resend/Brevo.

## Neue Sektion hinzufügen

1. Komponente unter `components/sections/` anlegen (Muster: bestehende Sektionen).
2. Texte in `lib/content.ts` ergänzen und importieren.
3. In `app/page.tsx` einfügen; Inhalte für den Scroll-Effekt in `<Reveal>` wrappen.

## Deployment

Vercel-ready. Anleitung in **[DEPLOYMENT.md](./DEPLOYMENT.md)**.
