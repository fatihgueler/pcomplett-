import { Award, ShieldCheck, UserRound, MapPin, type LucideIcon } from "lucide-react";
import { BlueprintLines } from "@/components/BlueprintLines";
import { cn } from "@/lib/utils";

type TrustPoint = { icon: string; title: string; text: string };

const iconMap: Record<string, LucideIcon> = {
  Award,
  ShieldCheck,
  UserRound,
  MapPin,
};

/**
 * Qualitative Vertrauens-Merkmale (dunkles Panel, Marken-Akzent).
 * Ersetzt die frühere reine Kennzahlen-Kachel durch belegbare Aussagen.
 */
export function TrustStrip({
  points,
  className,
}: {
  points: readonly TrustPoint[];
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl", className)}>
      <ul className="grid gap-px overflow-hidden rounded-2xl border border-ink bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((point) => {
          const Icon = iconMap[point.icon] ?? Award;
          return (
            <li key={point.title} className="relative flex flex-col gap-3 bg-ink p-7">
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                <Icon className="size-5" aria-hidden />
              </span>
              <span className="font-display text-lg font-semibold text-white">
                {point.title}
              </span>
              <span className="text-sm leading-relaxed text-white/70">
                {point.text}
              </span>
            </li>
          );
        })}
      </ul>
      <BlueprintLines className="pointer-events-none absolute right-5 top-1/2 hidden h-40 w-auto -translate-y-1/2 text-white/15 lg:block" />
    </div>
  );
}
