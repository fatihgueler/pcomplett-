# Design System — PComplett-IT (MASTER)

Source of Truth für Tokens und Komponenten-Specs. Implementierung liegt in
`app/globals.css` (Tokens) und `components/ui/*` (Primitives) — dieses
Dokument beschreibt, was dort steht, damit eine neue Session/ein neuer
Entwickler ohne Repo-Archäologie weiterarbeiten kann. Bei Widersprüchen gilt
immer der Code.

Ausführlichere Markenregeln (Voice, Logo, Bildsprache) siehe
[`../docs/brand-guidelines.md`](../docs/brand-guidelines.md). Dieses Dokument
fokussiert auf **Implementierungs-Tokens und Komponenten**.

## 1. Token-Architektur (drei Ebenen)

### Ebene 1 — Primitive (Rohwerte, `:root` in `globals.css`)

```css
--brand: #c1121f;         --ink: #0f172a;
--brand-hover: #9e0f1a;   --background: #f8fafc;
--brand-active: #820c15;  --muted: #eef2f6;
--brand-subtle: #fdeef0;  --muted-foreground: #475569;
--accent: #1e293b;        --subtle-foreground: #64748b;
--accent-subtle: #eff6ff; --border: #e2e8f0;
                           --border-strong: #cbd5e1;
--radius: 0.5rem;
--radius-sm: 0.375rem;
--radius-lg: 0.875rem;
```

### Ebene 2 — Semantisch (`@theme inline`, Tailwind-Utilities)

Mappt Primitive auf sprechende Utility-Namen: `bg-brand`, `text-muted-foreground`,
`border-border`, `rounded-lg` (= `--radius`), `font-display` / `font-sans`
(= IBM Plex Sans), `font-mono` (= IBM Plex Mono). **Nie** Hex-Werte direkt in
Komponenten schreiben — immer über diese Utilities.

### Ebene 3 — Komponente (in `components/ui/*` fest verdrahtet)

Button-Varianten, Card-Radius etc. — siehe Abschnitt 3.

## 2. Spacing- & Layout-Rhythmus

| Token/Klasse | Wert | Verwendung |
|---|---|---|
| `.container-page` | `max-width: 76rem`, responsives Padding (1.25rem → 2rem ab `md`) | Horizontaler Content-Rahmen, auf jeder Seite |
| `.section-y` | `clamp(3.5rem, 2.5rem + 5vw, 7rem)` vertikal | Abstand zwischen Sektionen |
| Karten-Innenabstand | `p-5` / `p-6` (20px/24px) | Standard für Card-Content |
| Grid-Gap | `gap-5` (20px) Standard, `gap-16` bei Zwei-Spalten-Layouts | Konsistent über alle Listen/Grids |

Breakpoints (Tailwind-Standard, **eine** Abweichung dokumentiert):
`sm 640 · md 768 · lg 1024 · xl 1280`. Header-Navigation wechselt bewusst erst
bei `lg` (nicht `md`) — siehe Fix in `components/layout/Header.tsx`
(verhinderte Overflow im Tablet-Bereich 768–1024px).

## 3. Komponenten-Specs

### Button (`components/ui/button.tsx`)

| Variante | Verwendung | Merkmale |
|---|---|---|
| `primary` | Primäre CTA | `bg-brand`, `btn-sheen`, hover `-translate-y-0.5` |
| `outline` | Sekundäre Aktion | Transparenter Hintergrund, Border, Hover-Farbwechsel zu Brand |
| `ghost` | Tertiär, zurückhaltend | Kein Border, nur Hover-Background |
| `link` | Inline-Textlink | Unterstrichen bei Hover |

Größen: `sm` (h-9), `md` (h-11, Standard), `lg` (h-12), `icon` (11×11, quadratisch).
Fokus-Ring immer `ring-2` in `--ring` (= Marken-Rot), Radius `rounded-md`.

### Card (`components/ui/card.tsx`)

`rounded-lg border border-border bg-card`. Header/Content-Innenabstand `p-6`.
Die meisten Sektionen nutzen die Card-Optik direkt inline (nicht über die
`Card`-Komponente) mit denselben Klassen — Radius/Border/Background bleiben
konsistent `rounded-lg border-border bg-card`.

### Input / Textarea (`components/ui/input.tsx`, `textarea.tsx`)

Höhe `h-11` (Input), Radius `rounded-md`, Border `border-border-strong`,
Fokus: Border wird `brand`, `ring-2` in `--brand-ring`. Fehlerzustand über
`aria-invalid="true"` (nicht per zusätzlicher CSS-Klasse) — triggert
automatisch Brand-Ring als Fehlerfarbe.

### SectionHeading (`components/ui/section-heading.tsx`)

Eyebrow immer **Mono-Font**, 12px, Versalien, Tracking `0.2em`, mit 24px
Linie davor. Titel `font-display` (Plex Sans), 700, responsive 36–44px.

### PageHero (`components/ui/page-hero.tsx`)

Einheitlicher Unterseiten-Kopf: Breadcrumbs + BreadcrumbList-JSON-LD, Eyebrow,
H1, optionales Subtitle. Enthält `BlueprintLines` (siehe unten) bei 7%
Deckkraft.

### BlueprintLines (`components/BlueprintLines.tsx`)

Dekoratives SVG, deutet einen PC an (Monitor/Standfuß/Tower als
Leiterbahnen), zeichnet sich per `stroke-dashoffset` beim Scrollen in den
Viewport. Einsatz: PageHero (7% Deckkraft), CtaBand (15%), TrustStrip (15%).
**Nicht** im Homepage-Hero (dort hat das Bild-Karussell Vorrang).

### Reveal (`components/Reveal.tsx`)

Einmaliger Fade+Slide-up via IntersectionObserver, `threshold 0.15`.
Wichtig: In `@media print` wird `.reveal` auf `opacity: 1` erzwungen, da
Print keinen Scroll-Trigger auslöst.

## 4. Farbkontrast-Referenz (WCAG)

| Kombination | Ratio | Level |
|---|---|---|
| `--foreground` auf `--background` | ~16:1 | AAA |
| `--muted-foreground` auf `--background` | ~7:1 | AAA |
| `--brand` auf `--background` (Weiß) | ~5,9:1 | AA |
| `--subtle-foreground` auf `--background` | ~4,9:1 | AA |

## 5. Motion-Tokens

| Kontext | Dauer | Easing |
|---|---|---|
| Hover-States (Buttons, Karten) | 150–250ms | `ease` / `ease-out` |
| Reveal (Scroll-Fade) | 600ms | `cubic-bezier(0.16,1,0.3,1)` |
| Blueprint-Zeichnen | 1,8s | `cubic-bezier(0.16,1,0.3,1)` |
| Prozess-Fortschrittslinie | 1,4s | `ease-out` |

Alle Animationen respektieren `prefers-reduced-motion: reduce` (siehe
`@media (prefers-reduced-motion: reduce)`-Block in `globals.css` — schaltet
Animationsdauer global auf `0.001ms`).

## 6. Änderungen vornehmen

1. Farbe/Radius ändern → **nur** in `app/globals.css` (`:root`), nie in
   einzelnen Komponenten.
2. Neue Komponenten-Variante → in `components/ui/*` ergänzen, hier
   dokumentieren.
3. Nach Änderungen: `docs/brand-guidelines.md` Abschnitt „Quick Reference"
   und Farbtabelle gegenprüfen, damit Doku und Code synchron bleiben.
