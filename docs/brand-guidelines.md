# Brand Guidelines — PComplett-IT

Konzeptname: **„Ruhiger Maschinenraum"**. PComplett-IT ist der ruhige,
technische Betrieb im Hintergrund eines Unternehmens — Kunden laufen, weil wir
laufen. Zielgruppe ausschließlich B2B (Geschäftskunden).

Implementierungs-Quelle der Wahrheit ist **`app/globals.css`** (CSS-Variablen
+ Tailwind-`@theme`-Block). Dieses Dokument beschreibt dieselben Werte
lesbar/referenzierbar für Vertrieb, Marketing und Design — bei Abweichungen
gilt immer der Code.

## Quick Reference

- **Primärfarbe (Akzent, CI):** `#C1121F` (Rot)
- **Struktur dunkel:** `#0F172A` (Navy)
- **Hintergrund:** `#F8FAFC`
- **Headline-/Body-Font:** IBM Plex Sans
- **Label-/Kennzahlen-Font:** IBM Plex Mono
- **Tonalität:** sachlich · kompetent · verbindlich

## 1. Farbpalette

### Primärfarbe (einziger Akzent — CI schlägt Buntheit)

| Name | Hex | CSS-Variable | Verwendung |
|---|---|---|---|
| Marken-Rot | `#C1121F` | `--brand` | CTAs, Links, Logo, Akzent-Icons |
| Rot Hover | `#9E0F1A` | `--brand-hover` | Hover-Zustand |
| Rot Aktiv | `#820C15` | `--brand-active` | Aktiv-/Pressed-Zustand |
| Rot zart | `#FDEEF0` | `--brand-subtle` | Hintergrund für Badges, Icon-Flächen |

Grundsatz (siehe `kmu-brand-sprint`): **ein** Akzent schlägt drei. Rot wird
sparsam eingesetzt — das wirkt hochwertiger als flächige Buntheit.

### Struktur (Neutrale, kein zweiter Akzent)

| Name | Hex | CSS-Variable | Verwendung |
|---|---|---|---|
| Navy (Ink) | `#0F172A` | `--ink` | Dunkle Flächen (Hero, CTA-Band, Footer-Panels) |
| Slate (Accent) | `#1E293B` | `--accent` | Sekundäre Struktur, KI-Baustein-Fläche |
| Hintergrund | `#F8FAFC` | `--background` | Seiten-Hintergrund |
| Vordergrund | `#0F172A` | `--foreground` | Fließtext, hoher Kontrast |
| Muted | `#EEF2F6` | `--muted` | Zarter Sektions-Hintergrund |
| Muted Text | `#475569` | `--muted-foreground` | Gedämpfter Fließtext |
| Subtle Text | `#64748B` | `--subtle-foreground` | Labels, Meta-Angaben |
| Border | `#E2E8F0` | `--border` | Standard-Trennlinien |
| Border stark | `#CBD5E1` | `--border-strong` | Betonte Trennlinien, Inputs |

### Barrierefreiheit

- Fließtext auf Weiß/Muted: **≥ 7:1** Kontrast (WCAG AAA für `--muted-foreground`)
- Marken-Rot auf Weiß: **~5,9:1** (WCAG AA für normalen Text)
- Fokus-Ringe: 2px, Marken-Rot (`--ring`), immer sichtbar (nie entfernen)

## 2. Typografie

### Font-Stack

```css
--font-sans: "IBM Plex Sans", system-ui, sans-serif;   /* Headlines & Body */
--font-mono: "IBM Plex Mono", ui-monospace, monospace; /* Labels, Eyebrows, Kennzahlen */
```

Self-hosted via `next/font/google` (DSGVO-konform, kein externer Font-Request).
Bewusst **kein** Inter/Roboto/Arial/Space Grotesk — die Kombination Plex
Sans/Mono ist die typografische Signatur der Marke.

### Type Scale (Desktop / Mobile)

| Element | Font | Gewicht | Größe (Desktop/Mobile) |
|---|---|---|---|
| H1 (Hero) | Plex Sans | 700 | 60px / 36px |
| H1 (Seitenkopf) | Plex Sans | 700 | 48px / 36px |
| H2 (Section) | Plex Sans | 700 | 44px / 30px |
| H3 (Karte) | Plex Sans | 600 | 18–20px |
| Body | Plex Sans | 400 | 16–18px, Zeilenhöhe 1,6 |
| Eyebrow/Label | Plex Mono | 500 | 12px, Versalien, Tracking 0,2em |
| Kennzahlen/Reaktionszeiten | Plex Mono | 500–600 | kontextabhängig |

## 3. Logo

Drei Varianten unter `public/logo/` (Details siehe `public/logo/README.md`):

| Datei | Variante | Einsatz |
|---|---|---|
| `pcomplett-wortmarke-gmbh.svg` | Wortmarke mit „GmbH" | Rechtsverbindliche Dokumente (Briefbogen, Rechnungen) |
| `pcomplett-wortmarke.svg` | Wortmarke ohne Rechtsform | Website-Header, allgemeine Kommunikation (Standard) |
| `pcomplett-bildmarke.svg` | Reines Symbol | Favicon, App-Icon, Social-Avatar, kleine Flächen |

### Schutzraum & Mindestgröße

- Schutzraum: mindestens die Höhe der Bildmarke auf allen Seiten
- Mindestgröße digital: 32px Höhe (Bildmarke), 120px Breite (Wortmarke)
- Mindestgröße Druck: 15mm Breite (Wortmarke)

### Don'ts

- Nicht drehen, stauchen oder verzerren
- Keine Farben außerhalb der Markenpalette (Rot `#C1121F` oder Einfarbig
  Navy/Weiß für Negativvarianten)
- Keine Schatten, Verläufe oder 3D-Effekte hinzufügen
- Nicht auf unruhigem/kontrastarmem Hintergrund platzieren

## 4. Tonalität

### Markenpersönlichkeit

- **Sachlich:** Aussagen statt Behauptungen, Fakten statt Superlative.
- **Kompetent:** Fachlich präzise, ohne zu erklären, was der Leser schon weiß.
- **Verbindlich:** Klare Zusagen (Reaktionszeiten, Zuständigkeiten), keine
  vagen Versprechen.

### Voice-Tabelle

| Merkmal | Wir sind | Wir sind NICHT |
|---|---|---|
| Ton | ruhig, kalkuliert | marktschreierisch, werblich |
| Zielgruppe | ausschließlich B2B | privatkundig/Consumer |
| Sprache | präzises Wirtschaftsdeutsch | Umgangssprache, Floskeln |
| Bewegung/Animation | dezent, funktional | verspielt, dekorativ überladen |

### Verbotene/vermiedene Begriffe

| Begriff | Grund | Ersatz |
|---|---|---|
| „Fachchinesisch" | umgangssprachlich, unprofessionell | „ohne Fachjargon", „verständlich" |
| „unkompliziert", „kein Problem" | zu locker für B2B-Entscheider | „strukturiert", „zuverlässig" |
| „wir kümmern uns" (isoliert) | vage, wenig konkret | „wir sichern den laufenden Betrieb" |
| „aus einer Hand" (mehrfach) | Wiederholung/Floskel | kontextspezifische Formulierung |
| „Warteschleife", „Callcenter" | negative Assoziation, wirkt privatkundig | „fester Ansprechpartner" |

## 5. Bildsprache

### Fotografie (sobald echte Fotos vorliegen — aktuell Platzhalter)

- Reale Arbeitsumgebung (Serverraum, Büro, Team) statt Stockfoto-Klischees
  (kein Handschlag-vor-Glaswand-Bild)
- Natürliches Licht, technische/neutrale Umgebung
- Keine gestellten Lächel-Posen — Fokus auf Tätigkeit/Kompetenz

### Icons

- Bibliothek: **lucide-react** (ein Icon-System, keine Mischung)
- Strichstärke: 2px durchgängig
- Raster: 24px Basis, `size-4`/`size-5`/`size-6` Tailwind-Stufen
- Dekorative Icons erhalten `aria-hidden="true"`

### Illustrative Elemente

- **Blueprint-Linien** (`components/BlueprintLines.tsx`): technische
  Leiterbahn-Ästhetik, deutet Hardware (PC) an, sehr zurückhaltende Deckkraft
- Kein Gradient-Text, kein Glassmorphism, kein bunter Aurora-Hintergrund
  (bewusst entfernt — siehe Commit „redesign(brand)")

## Versionshinweis

Dieses Dokument spiegelt den Stand nach dem B2B-Relaunch. Änderungen an
Farben/Fonts ausschließlich in `app/globals.css` vornehmen und danach hier
nachziehen, damit Code und Dokument nicht auseinanderlaufen.
