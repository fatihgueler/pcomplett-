/**
 * Wird bei jedem Navigationswechsel neu gemountet und spielt einen sanften
 * Einblend-Übergang ab (rein CSS, respektiert prefers-reduced-motion).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
