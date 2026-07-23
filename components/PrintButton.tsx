"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Löst den Browser-Druckdialog aus (z. B. „Als PDF speichern"). */
export function PrintButton() {
  return (
    <Button
      type="button"
      size="lg"
      variant="outline"
      onClick={() => window.print()}
    >
      <Printer className="size-4" aria-hidden />
      Seite drucken
    </Button>
  );
}
