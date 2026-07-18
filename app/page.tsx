import { Hero } from "@/components/sections/Hero";
import { EntryCards } from "@/components/sections/EntryCards";
import { Leistungen } from "@/components/sections/Leistungen";
import { Prozess } from "@/components/sections/Prozess";
import { KiPraxis } from "@/components/sections/KiPraxis";
import { ServicePrivat } from "@/components/sections/ServicePrivat";
import { Notfall } from "@/components/sections/Notfall";
import { Vertrauen } from "@/components/sections/Vertrauen";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { Newsletter } from "@/components/sections/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EntryCards />
      <Leistungen />
      <Prozess />
      <KiPraxis />
      <ServicePrivat />
      <Notfall />
      <Vertrauen />
      <Faq />
      <CtaBand />
      <Newsletter />
    </>
  );
}
