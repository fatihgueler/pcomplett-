import {
  Sparkles,
  Network,
  ShieldCheck,
  Puzzle,
  Code2,
  Building2,
  UserRound,
  FileText,
  Mail,
  AudioLines,
  Cog,
  HardDrive,
  type LucideIcon,
} from "lucide-react";

/** Zentrales Mapping von Icon-Namen (aus den Content-Dateien) auf lucide-Icons. */
export const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Network,
  ShieldCheck,
  Puzzle,
  Code2,
  Building2,
  UserRound,
  FileText,
  Mail,
  AudioLines,
  Cog,
  HardDrive,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
