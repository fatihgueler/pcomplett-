# Brand: PComplett-IT — „Ruhiger Maschinenraum"

Interne Design-Richtung für den Relaunch. Leitbild: PComplett ist der ruhige,
technische Maschinenraum im Hintergrund – Unternehmen laufen, weil wir laufen.
Zielgruppe ausschließlich B2B. Muster: „Enterprise Gateway / Trust & Authority".

> Kurzreferenz. Das vollständige, formale Brand-Guidelines-Dokument (Type
> Scale, Logo-Regeln, Voice-Tabelle, verbotene Begriffe, Bildsprache) steht in
> [`docs/brand-guidelines.md`](./docs/brand-guidelines.md).

## Farbsystem (ein Akzent schlägt drei)

| Rolle | Wert | Token |
|-------|------|-------|
| Basis dunkel (Navy) | `#0F172A` | `--ink` |
| Basis hell (Slate-50) | `#F8FAFC` | `--background` |
| Struktur Text | `#475569` | `--muted-foreground` |
| Struktur Border | `#E2E8F0` | `--border` |
| **Akzent (einzig!) Firmen-Rot** | `#C1121F` | `--brand` |
| Akzent hover / aktiv | `#9E0F1A` / `#820C15` | `--brand-hover/-active` |
| Akzent zart | `#FDEEF0` | `--brand-subtle` |
| Sekundär-Struktur (Slate) | `#1E293B` | `--accent` |

Firmen-Rot als einziger Akzent (CI), Navy/Slate als ruhige Struktur.
Rot sparsam einsetzen (CTAs, Links, Logo) = wirkt hochwertiger.

## Typografie

- **IBM Plex Sans** — Headlines & Body (technisch, enterprise, distinct).
- **IBM Plex Mono** — Eyebrows, Labels, Kennzahlen, technische Akzente (die Signatur).
- Self-hosted via `next/font` (DSGVO). Keine Inter/Roboto/Arial/Space Grotesk.

## Tonalität

- **IST:** sachlich, kompetent, verbindlich.
- **NICHT:** verspielt, marktschreierisch, privatkundig, „AI-slop".
- Nutzen vor Technik, kurze Sätze, keine Floskel-Dreier, keine Übertreibung.

## Effekte (bewusst reduziert – kein „AI-slop")

Raus: bunte Aurora, Glassmorphism-Überladung, Gradient-Text, 3D-Tilt, Glow-Ringe.
Rein: klare Flächen, dünne Borders, feine Schatten nur bei Hover, Mono-Labels,
tabellarische Ziffern, viel Weißraum, ruhige 150–250 ms Übergänge.
