# Inhalte & offene Punkte

Die Website ist mit den echten Daten von pcomplett.de befüllt. Es sind **keine
sichtbaren `{{…}}`-Platzhalter** mehr auf den Seiten. Offen sind nur noch echte
Assets (Logo, Foto) und ein optionaler Schlüssel für den KI-Chat.

## Bereits eingesetzt (echte Daten)

- **Kontakt:** Telefon 0511 760 773 0 · Fax 0511 760 773 49 · service@pcomplett.de · Hannover
- **Firma:** PComplett, Inhaber Frank Bernhardt, Am Listholze 31A, 30177 Hannover · USt-IdNr. DE169516345
- **Datenschutzbeauftragter:** Marc Schümann (Tel. 0511 760 773 12)
- **Partner:** Starface, Jeester, HP, Fujitsu
- **Kennzahlen:** 30+ Jahre Erfahrung (gegründet 1994), 5+ namhafte Referenzen
- **Referenzen:** ThyssenKrupp Stahlbau, TUI, Deutsche Messe AG, HIS GmbH, J+S Druckfarben
- **Rechtsseiten:** /impressum, /datenschutz (inkl. Newsletter & KI-Chatbot), /agb — befüllt

## Noch offen (echte Assets / Freigaben)

| Punkt | Ort | Hinweis |
|-------|-----|---------|
| Logo | `components/layout/Logo.tsx`, `app/icon.tsx`, `app/opengraph-image.tsx` | Text-Wortmarke → echtes Logo, wenn vorhanden |
| Markenrot `{{BRAND_RED_HEX}}` | `app/globals.css` (`--brand`) | aktuell Fallback `#C1121F` |
| Foto Privatkunden | `components/sections/ServicePrivat.tsx` | Platzhalter „Foto folgt" → echtes Foto via `next/image` |
| Kundenzahl (optional) | `lib/content.ts` (`trust.stats`) | zweite Kachel ist „5+ Referenzen"; bei Bedarf echte Kundenzahl |

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
