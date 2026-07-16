"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        isScrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background/60 backdrop-blur-sm",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Logo />

        {/* Desktop-Navigation */}
        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="/#kontakt">Beratung anfragen</Link>
          </Button>
        </nav>

        {/* Mobile-Toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink transition-colors hover:bg-muted md:hidden"
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile-Overlay-Menü */}
      <div
        id="mobile-menu"
        hidden={!isOpen}
        className={cn(
          "border-t border-border bg-background md:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <nav
          aria-label="Mobile Navigation"
          className="container-page flex flex-col gap-1 py-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-2 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="lg" className="mt-3 w-full">
            <Link href="/#kontakt" onClick={() => setIsOpen(false)}>
              Beratung anfragen
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
