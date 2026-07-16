import { Hero } from "@/components/sections/Hero";
import { Leistungen } from "@/components/sections/Leistungen";
import { Vertrauen } from "@/components/sections/Vertrauen";
import { CtaBand } from "@/components/sections/CtaBand";
import { Partner } from "@/components/sections/Partner";
import { Kontakt } from "@/components/sections/Kontakt";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Leistungen />
      <Vertrauen />
      <CtaBand />
      <Partner />
      <Kontakt />
    </>
  );
}
