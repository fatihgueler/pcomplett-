import { Hero } from "@/components/sections/Hero";
import { Leistungen } from "@/components/sections/Leistungen";
import { Erklaerung } from "@/components/sections/Erklaerung";
import { Prozess } from "@/components/sections/Prozess";
import { KiHome } from "@/components/sections/KiHome";
import { Vertrauen } from "@/components/sections/Vertrauen";
import { Rueckruf } from "@/components/sections/Rueckruf";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Leistungen />
      <Erklaerung />
      <Prozess />
      <KiHome />
      <Vertrauen />
      <Rueckruf />
      <Faq />
      <CtaBand />
    </>
  );
}
