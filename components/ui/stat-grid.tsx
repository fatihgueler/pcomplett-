import { CountUp } from "@/components/CountUp";
import { cn } from "@/lib/utils";

type Stat = { value: string; suffix?: string; label: string };

/**
 * Kennzahlen-Panel (dunkel, Marken-Akzent) mit Count-up-Animation für
 * numerische Werte.
 */
export function StatGrid({ stats }: { stats: readonly Stat[] }) {
  return (
    <dl
      className={cn(
        "grid gap-px overflow-hidden rounded-2xl border border-ink bg-border/60",
        stats.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2",
      )}
    >
      {stats.map((stat) => {
        const n = Number.parseInt(stat.value, 10);
        const numeric = !Number.isNaN(n) && String(n) === stat.value;
        return (
          <div
            key={stat.label}
            className="flex flex-col gap-2 bg-ink p-8 text-center sm:text-left"
          >
            <dt className="order-2 text-sm font-medium uppercase tracking-wide text-white/60">
              {stat.label}
            </dt>
            <dd className="order-1 font-display text-4xl font-bold text-white [overflow-wrap:anywhere] sm:text-5xl">
              {numeric ? <CountUp value={n} /> : stat.value}
              {stat.suffix ? (
                <span className="text-brand">{stat.suffix}</span>
              ) : null}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
