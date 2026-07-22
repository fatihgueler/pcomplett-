import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  /**
   * Interne Kennzeichnung, welches Foto hier später eingesetzt wird
   * (z. B. "{{BILD_TEAM}}"). Wird NICHT roh angezeigt – daraus wird eine
   * neutrale Bildunterschrift abgeleitet, damit kein {{…}} ins HTML gelangt.
   */
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

/** Aus "{{BILD_VOR_ORT}}" wird "Vor Ort" – nie ein roher Platzhalter im DOM. */
function friendlyCaption(label: string): string {
  const cleaned = label
    .replace(/[{}]/g, "")
    .replace(/^(BILD|FOTO)_/i, "")
    .replace(/_/g, " ")
    .trim();
  if (!cleaned) return "Bild folgt";
  const titled = cleaned
    .toLowerCase()
    .replace(/(^|\s)\S/g, (m) => m.toUpperCase());
  return `${titled} · Bild folgt`;
}

/**
 * Neutrale Foto-Platzhalter-Komponente (keine Stockfotos).
 * Später durch <Image> ersetzen – dann alt-Text nicht vergessen.
 */
export function MediaPlaceholder({ label, ratio = "video", className }: Props) {
  const caption = friendlyCaption(label);
  return (
    <div
      role="img"
      aria-label={`Platzhalter für ein Bild: ${caption}`}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border-strong bg-muted/60 text-subtle-foreground",
        ratioClass[ratio],
        className,
      )}
    >
      <ImageIcon className="size-8" aria-hidden />
      <span className="text-xs font-medium">{caption}</span>
    </div>
  );
}
