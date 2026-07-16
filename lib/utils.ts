import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Kombiniert Klassen und löst Tailwind-Konflikte deterministisch auf.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
