import { Hero } from "@/components/sections/Hero";
import { Leistungen } from "@/components/sections/Leistungen";
import { Servicevertraege } from "@/components/sections/Servicevertraege";
import { Erklaerung } from "@/components/sections/Erklaerung";
import { Branchen } from "@/components/sections/Branchen";
import { Prozess } from "@/components/sections/Prozess";
import { KiHome } from "@/components/sections/KiHome";
import { Vertrauen } from "@/components/sections/Vertrauen";
import { Stoerung } from "@/components/sections/Stoerung";
import { Rueckruf } from "@/components/sections/Rueckruf";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Leistungen />
      <Servicevertraege />
      <Erklaerung />
      <Branchen />
      <Prozess />
      <KiHome />
      <Vertrauen />
      <Stoerung />
      <Rueckruf />
      <Faq />
      <CtaBand />
    </>
  );
}
