# Inhalte & offene Punkte

Die Website ist mit den echten Daten von pcomplett.de befüllt. Nach dem
Relaunch-Overhaul gibt es bewusst einige `{{…}}`-Platzhalter für Inhalte, die
der Kunde noch liefert (Werbeslogan, Bilder, it-Adresse, Aktionen, Keys) –
vollständige Liste unten.

## Bereits eingesetzt (echte Daten)

- **Kontakt:** Telefon 0511 760 773 0 · Fax 0511 760 773 49 · service@pcomplett.de · Hannover
- **Firma:** PComplett, Inhaber Frank Bernhardt, Am Listholze 31A, 30177 Hannover · USt-IdNr. DE169516345
- **Datenschutzbeauftragter:** Marc Schümann (Tel. 0511 760 773 12)
- **Partner:** Starface, Yeastar, Jeester, HP, Fujitsu
- **Kennzahlen:** 30+ Jahre Erfahrung (gegründet 1994), 5+ namhafte Referenzen
- **Referenzen:** ThyssenKrupp Stahlbau, TUI, Deutsche Messe AG, HIS GmbH, J+S Druckfarben
- **Rechtsseiten:** /impressum, /datenschutz (inkl. KI-Chatbot, OpenStreetMap & Turnstile), /agb — befüllt

## Noch offen (Platzhalter / echte Assets / Freigaben)

Zielgruppe ist ausschließlich B2B; Kontaktdaten erscheinen nur als Bild.

| Platzhalter / Punkt | Ort | Hinweis |
|---------------------|-----|---------|
| `{{WERBESLOGAN}}` | `lib/content.ts` (`hero.slogan`) | zentrale Hero-Aussage festlegen |
| `{{HERO_BILD_1}}` … `{{HERO_BILD_4}}` | `public/hero/hero-1..4.svg` | 16:9-Platzhalter 1:1 durch echte Bilder ersetzen |
| `{{BILD_BETREUUNG/SERVERRAUM/TELEFONIE/VOR_ORT}}` | Erklär-Karussell (`lib/content.ts`) | Fotos für die Erklär-Sektion |
| `{{BILD_TEAM/BUERO/WERKSTATT}}` | `app/ueber-uns/page.tsx` | Team-/Büro-Fotos |
| `{{KONTAKT_EMAIL}}` (it-Adresse) | `public/kontakt/email-kontakt.svg` | SVG-Bild mit echter it-Adresse ersetzen |
| `{{KARTE_KOORDINATEN}}` | `lib/site.ts` (`geo`) | exakte Koordinaten der Firmenadresse bestätigen |
| `{{TICKET_API_URL}}` / `{{TICKET_API_KEY}}` | `.env` | Ticketsystem-Anbindung (Kontakt) |
| `{{RUECKRUF_WEBHOOK_URL}}` | `.env` / `app/api/rueckruf/route.ts` | Zustellung der Rückrufbitte |
| `{{TURNSTILE_SITE_KEY}}` / `{{TURNSTILE_SECRET_KEY}}` | `.env` | Cloudflare Turnstile aktivieren |
| `{{AKTION_TITEL/TEXT/ZEITRAUM_1..2}}` | `lib/blog.ts` (`aktionen`) | echte Werbeaktionen eintragen |
| `{{LOGO_STARFACE/YEASTAR/JEESTER}}` | `components/ui/brand-logos.tsx` | echte Partner-Logos als SVG ergänzen |
| Firmenlogo | `public/logo/*` (3 Entwürfe) | finale Variante wählen/freigeben |
| Markenrot `{{BRAND_RED_HEX}}` | `app/globals.css` (`--brand`) | aktuell Fallback `#C1121F` |

## KI-Chat aktivieren

`ANTHROPIC_API_KEY` in `.env.local` (lokal) bzw. in den Vercel-Environment-
Variablen (Produktion) eintragen, dann Server neu starten. Modell:
`claude-sonnet-5` (per `CHATBOT_MODEL` änderbar). Ohne Key zeigt das Widget einen
freundlichen Hinweis statt eines Fehlers.

## Rechtlicher Hinweis

Impressum, Datenschutz und AGB sind mit echten Daten befüllt, sollten aber vor
dem Livegang rechtlich geprüft werden. Bei Gründung der geplanten **IT GmbH**
sind Firmierung, Vertretung (Geschäftsführer), Handelsregister/HRB und USt-IdNr.
zu aktualisieren.
