import { Hero } from "@/components/sections/Hero";
import { EntryCards } from "@/components/sections/EntryCards";
import { Leistungen } from "@/components/sections/Leistungen";
import { KiPraxis } from "@/components/sections/KiPraxis";
import { ServicePrivat } from "@/components/sections/ServicePrivat";
import { Vertrauen } from "@/components/sections/Vertrauen";
import { CtaBand } from "@/components/sections/CtaBand";
import { Newsletter } from "@/components/sections/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EntryCards />
      <Leistungen />
      <KiPraxis />
      <ServicePrivat />
      <Vertrauen />
      <CtaBand />
      <Newsletter />
    </>
  );
}
