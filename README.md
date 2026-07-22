# PComplett – Website (Relaunch)

Moderne, vollständig responsive Landing Page mit Unterseiten für das
**IT-Systemhaus PComplett** (künftig „… IT GmbH“). Positioniert PComplett als
professionellen IT-Partner **ausschließlich für Unternehmen (B2B)**, generiert
Leads über Rückrufservice/Kontaktformular und ist für Google **und** KI-Suchen
(ChatGPT, Claude, Perplexity) optimiert.

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
  api/ticket/route.ts   Kontakt → Ticket-Adapter (Turnstile-Prüfung + lib/tickets.ts)
  api/kontakt/route.ts  Legacy-Kontakt-Endpoint (Ticket-Adapter)
  api/rueckruf/route.ts Rückrufservice (typisierter Payload, Backend-TODO)
  api/chat/route.ts     Chatbot → Claude API (Fallback ohne Key)
  impressum|datenschutz|agb/page.tsx  Rechtsseiten
components/
  layout/               Header, Footer, Logo, LegalPage
  sections/             Hero (Karussell), Leistungen, Erklaerung, Prozess,
                        KiHome, Vertrauen, Rueckruf, Faq, CtaBand
  ui/                   Button, Card, Input, Textarea, Label, SectionHeading,
                        MediaPlaceholder, Carousel, ContactMedia, Turnstile,
                        Leaflet-Karte (map-lazy / leaflet-map)
  seo/JsonLd.tsx        Schema.org LocalBusiness/ProfessionalService
  Reveal.tsx            Scroll-Reveal (IntersectionObserver)
  KontaktFormular.tsx / RueckrufFormular.tsx / Chatbot.tsx
lib/
  content.ts            ← ALLE Texte zentral (hier Inhalte ändern)
  site.ts               Kontakt-/Metadaten-/Geo-Konfiguration
  contact-schema.ts / rueckruf-schema.ts   Zod-Schemata (Client + Server)
  tickets.ts            Ticket-Adapter (Interface, Mock- & HTTP-Adapter)
  turnstile.ts          Serverseitige Turnstile-Verifikation
  chat-prompt.ts        System-Prompt des Chatbots aus den Leistungstexten
  use-reduced-motion.ts prefers-reduced-motion-Hook (Hero-Karussell)
  utils.ts              cn()-Helper
public/
  llms.txt              Maschinenlesbare Zusammenfassung für KI-Suchmaschinen
```

## Inhalte ändern

- **Texte**: `lib/content.ts` · **Firmendaten/Metadaten**: `lib/site.ts`
- **Farben/Spacing/Typografie**: `app/globals.css` (Design-Tokens)
- **Offene Platzhalter** (`{{...}}`): siehe **[CONTENT.md](./CONTENT.md)**

## Funktionale Anbindungen

- **Kontaktformular („Anliegen") → Ticketsystem:** `app/api/ticket/route.ts`
  prüft das Turnstile-Captcha, validiert serverseitig und übergibt den
  typisierten Payload über `lib/tickets.ts` (`TicketAdapter`-Interface, Mock-
  und generischer HTTP-Adapter via `TICKET_API_URL`/`TICKET_API_KEY`).
- **Rückrufservice:** `app/api/rueckruf/route.ts` validiert die Rückrufbitte
  (Name, Firma, Telefon, Wunschtermin); die Zustellung ist als klarer
  Backend-TODO vorbereitet.
- **Captcha:** Cloudflare Turnstile (DSGVO-freundlich, kein reCAPTCHA) –
  `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY`.
- **Karte:** Leaflet + OpenStreetMap (kein Google Maps), lazy geladen.
- **Spam-Schutz:** E-Mail/Telefon erscheinen nirgends als Text/Link, sondern
  nur als Bild (`public/kontakt/*.svg`, Komponente `ContactMedia`).
- **Chatbot:** `app/api/chat/route.ts` ruft die Claude API serverseitig auf
  (`ANTHROPIC_API_KEY`, per ENV überschreibbar). Ohne Key zeigt das Widget einen
  Hinweis statt eines Fehlers.

## Neue Sektion hinzufügen

1. Komponente unter `components/sections/` anlegen (Muster: bestehende Sektionen).
2. Texte in `lib/content.ts` ergänzen und importieren.
3. In `app/page.tsx` einfügen; Inhalte für den Scroll-Effekt in `<Reveal>` wrappen.

## Deployment

Vercel-ready. Anleitung in **[DEPLOYMENT.md](./DEPLOYMENT.md)**.
