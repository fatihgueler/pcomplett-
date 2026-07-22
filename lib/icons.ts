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
  Server,
  PhoneCall,
  MonitorSmartphone,
  FileCheck2,
  Boxes,
  Cpu,
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
  Server,
  PhoneCall,
  MonitorSmartphone,
  FileCheck2,
  Boxes,
  Cpu,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
