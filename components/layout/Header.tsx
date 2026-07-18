"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/content";
import { servicesDetail } from "@/lib/pages";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

function useIsActive() {
  const pathname = usePathname();
  return (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const isActive = useIsActive();
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menü bei Navigationswechsel schließen
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "glass border-b border-white/40"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Logo />

        {/* Desktop-Navigation */}
        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-7 md:flex"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const linkClass = cn(
              "relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-brand after:transition-all after:duration-300",
              active
                ? "text-brand after:w-full"
                : "text-muted-foreground after:w-0 hover:text-brand hover:after:w-full",
            );

            // Mega-Menü für die Leistungen
            if (link.href === "/leistungen") {
              return (
                <div key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(linkClass, "inline-flex items-center gap-1")}
                  >
                    {link.label}
                    <ChevronDown
                      className="size-3.5 transition-transform duration-200 group-hover:rotate-180"
                      aria-hidden
                    />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 w-[36rem] -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="glass-strong grid grid-cols-2 gap-1 rounded-2xl p-3">
                      {servicesDetail.map((service) => {
                        const Icon = getIcon(service.icon);
                        return (
                          <Link
                            key={service.slug}
                            href={`/leistungen/${service.slug}`}
                            className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted"
                          >
                            <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-subtle text-brand">
                              <Icon className="size-5" aria-hidden />
                            </span>
                            <span className="flex flex-col gap-0.5">
                              <span className="text-sm font-semibold text-ink">
                                {service.title}
                              </span>
                              <span className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                {service.tagline}
                              </span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={linkClass}
              >
                {link.label}
              </Link>
            );
          })}
          <Button asChild size="sm">
            <Link href="/kontakt">Beratung anfragen</Link>
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
        className={cn("glass border-t border-white/40 md:hidden", isOpen ? "block" : "hidden")}
      >
        <nav
          aria-label="Mobile Navigation"
          className="container-page flex flex-col gap-1 py-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "rounded-md px-2 py-3 text-base font-medium transition-colors hover:bg-muted",
                isActive(link.href) ? "text-brand" : "text-foreground hover:text-brand",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="lg" className="mt-3 w-full">
            <Link href="/kontakt">Beratung anfragen</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
