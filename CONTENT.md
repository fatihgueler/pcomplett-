# Offene Inhalte & Platzhalter

Diese Website enthält bewusst **Platzhalter im Format `{{NAME}}`**, wo echte
Daten fehlen. Bitte alle folgenden Stellen ersetzen, bevor die Seite live geht.
Ein globales Suchen nach `{{` findet alle offenen Stellen.

## 1. Marke, Logo & Fotos

| Platzhalter | Bedeutung | Datei(en) |
|-------------|-----------|-----------|
| `{{BRAND_RED_HEX}}` | Echtes Markenrot (aktuell Fallback `#C1121F`) | `app/globals.css` (`--brand`), `app/icon.tsx`, `app/opengraph-image.tsx` |
| `{{LOGO}}` | Neues Logo statt Text-Wortmarke | `components/layout/Logo.tsx` (Wortmarke), `app/icon.tsx` + `app/opengraph-image.tsx` (Favicon/OG) |
| `{{FOTO_1}}` | Foto Privatkunden-/Service-Bereich | `components/sections/ServicePrivat.tsx` |

> **Logo tauschen an einer Stelle:** Die Wortmarke steckt in
> `components/layout/Logo.tsx`. Favicon und OG-Bild werden aus `app/icon.tsx`
> bzw. `app/opengraph-image.tsx` generiert – dort das „P“/den Schriftzug durch
> das echte Logo ersetzen. Farbe zentral in `app/globals.css` (`--brand`).
> Fotos immer über `next/image` mit `alt`-Text einbinden (Platzhalter:
> `components/ui/media-placeholder.tsx`).

## 2. Unternehmens- & Kontaktdaten — `lib/site.ts` (+ `public/llms.txt`)

`{{FIRMEN_RECHTSNAME}}`, `{{STRASSE_NR}}`, `{{PLZ}}`, `{{STADT}}`,
`{{TELEFON}}`, `{{EMAIL}}`. Zusätzlich prüfen: `siteConfig.url`,
`siteConfig.openingHours`, `siteConfig.legalName` (künftig „… IT GmbH“).

## 3. Vertrauen, Partner & Referenzen — `lib/content.ts`

| Platzhalter | Bedeutung |
|-------------|-----------|
| `{{JAHRE_ERFAHRUNG}}` | Kennzahl, z. B. „20“ |
| `{{ANZAHL_KUNDEN}}` | Kennzahl, z. B. „150“ |
| `{{WEITERE_PARTNER_1}}`, `{{WEITERE_PARTNER_2}}` | Weitere Partner (Starface & Jeester sind gesetzt) |
| `{{TESTIMONIAL_1}}`–`{{TESTIMONIAL_3}}` | Kundenstimmen (mind. 1 Handwerks-/Kleinbetrieb – bei T1 vorgemerkt) |
| `{{KUNDE_1_NAME}}`–`{{KUNDE_3_NAME}}` / `{{KUNDE_x_FIRMA}}` | Namen & Firmen der Zitatgebenden |

## 4. Privatkunden-Leistungen — `lib/content.ts`

`{{B2C_LEISTUNGEN}}` markiert den Block `servicePrivat.items`. Es sind bereits
sinnvolle Fallback-Inhalte gesetzt (PC-Service, Reparatur, Beratung) – bei
Bedarf anpassen.

## 5. Rechtsseiten (Pflicht!) — juristisch prüfen lassen

**Impressum** (`app/impressum/page.tsx`): `{{FIRMEN_RECHTSNAME}}`,
`{{STRASSE_NR}}`, `{{PLZ}}`, `{{STADT}}`, `{{LAND}}`,
`{{VERTRETUNGSBERECHTIGTE_PERSON}}`, `{{TELEFON}}`, `{{EMAIL}}`,
`{{REGISTERGERICHT}}`, `{{REGISTERNUMMER}}`, `{{UMSATZSTEUER_ID}}`,
`{{VERANTWORTLICHE_PERSON}}`.

**Datenschutz** (`app/datenschutz/page.tsx`):
`{{DATENSCHUTZBEAUFTRAGTER_ODER_HINWEIS_ENTFAELLT}}`, `{{HOSTING_ANBIETER}}`,
`{{AUFSICHTSBEHOERDE_BUNDESLAND}}`, `{{STAND_DATUM}}`.

**AGB** (`app/agb/page.tsx`): sämtliche `{{AGB_*}}`-Abschnitte.

> Impressum, Datenschutz und AGB müssen rechtssicher sein. Empfohlen:
> Generator von **e-recht24.de** oder anwaltliche Prüfung.

## 6. Funktionale Anbindungen (technisch, `.env`)

| Variable | Zweck | Status |
|----------|-------|--------|
| `ANTHROPIC_API_KEY` | KI-Chatbot (Claude API) | Ohne Key zeigt das Widget einen Hinweis (kein Fehler) |
| `CHATBOT_MODEL` | Chat-Modell (optional) | Standard: `claude-sonnet-4-6` |
| `TICKET_PROVIDER` u. a. | Ticketsystem für Kontaktanfragen | Aktuell Mock-Adapter (`lib/tickets.ts`) |
| `NEWSLETTER_PROVIDER` u. a. | Newsletter Double-Opt-in | Aktuell Stub (`app/api/newsletter/route.ts`) |
| `RESEND_API_KEY`, `CONTACT_EMAIL` | Optionaler E-Mail-Versand | Optional |

Details in `.env.example` und `DEPLOYMENT.md`. Der Einbau echter externer
Dienste wurde bewusst offen gelassen und benötigt eine Freigabe.

## 7. SEO/Local

Für lokales SEO kann in `app/layout.tsx` und `public/llms.txt` der Standort
`{{STADT}}` ergänzt/eingesetzt werden (Title-Tag, Keywords, llms.txt).
