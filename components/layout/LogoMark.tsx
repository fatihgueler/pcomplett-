/**
 * Circuit-P Bildmarke (aus dem Kundenlogo).
 * Nutzt Design-Tokens (--brand / --ink), damit sie zum System passt.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="4 22 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      {/* P als Leiterbahn */}
      <path
        d="M 48 138 L 48 34 L 100 34 Q 122 34 122 62 Q 122 90 100 90 L 66 90"
        stroke="var(--brand)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Abzweigung */}
      <path
        d="M 48 116 L 22 116"
        stroke="var(--brand)"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Strom-Puls entlang der Leiterbahn (dezente Animation) */}
      <path
        className="logo-pulse"
        d="M 48 138 L 48 34 L 100 34 Q 122 34 122 62 Q 122 90 100 90 L 66 90"
        stroke="rgba(255,255,255,0.85)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Knotenpunkte */}
      <circle cx="48" cy="138" r="9" fill="var(--ink)" />
      <circle cx="66" cy="90" r="9" fill="var(--ink)" />
      <circle cx="16" cy="116" r="6" fill="var(--ink)" />
    </svg>
  );
}
