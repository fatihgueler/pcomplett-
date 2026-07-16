import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  /** Kennzeichnung, welches Foto hier später eingesetzt wird, z.B. "{{FOTO_1}}". */
  label: string;
  /** Seitenverhältnis, verhindert Layout-Shift. */
  ratio?: "video" | "square" | "portrait";
  className?: string;
};

const ratioClass: Record<NonNullable<Props["ratio"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

/**
 * Neutrale Foto-Platzhalter-Komponente (keine Stockfotos).
 * Später durch <Image> ersetzen – dann alt-Text nicht vergessen.
 */
export function MediaPlaceholder({ label, ratio = "video", className }: Props) {
  return (
    <div
      role="img"
      aria-label={`Platzhalter für Foto: ${label}`}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border-strong bg-muted/60 text-subtle-foreground",
        ratioClass[ratio],
        className,
      )}
    >
      <ImageIcon className="size-8" aria-hidden />
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}
