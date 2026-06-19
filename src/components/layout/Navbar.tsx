"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { NavbarControls } from "@/components/layout/SiteControls";
import { useSite } from "@/components/providers/SiteProvider";

const navItems = [
  { href: "/company", key: "about" as const },
  { href: "/services", key: "services" as const },
  { href: "/work", key: "work" as const },
  { href: "/contact", key: "contact" as const },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useSite();

  const labels = {
    about: t.nav.about,
    services: t.nav.services,
    work: t.nav.work,
    contact: t.nav.contact,
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-board-border)]/80 bg-[var(--color-board-bg)]/90 backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 h-16 max-w-6xl mx-auto gap-4">
        <Link href="/" className="hover:opacity-90 transition-opacity shrink-0">
          <Logo size="sm" />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map(({ href, key }) => {
            const isActive = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={`px-3.5 py-2 text-[13px] font-medium transition-colors ${
                  isActive
                    ? "text-[var(--color-board-text)]"
                    : "text-[var(--color-board-muted)] hover:text-[var(--color-board-silver)]"
                }`}
              >
                {labels[key]}
              </Link>
            );
          })}
          <div className="ml-1 pl-1 border-l border-[var(--color-board-border)]">
            <NavbarControls />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <NavbarControls />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex items-center justify-center w-10 h-10 -mr-2 text-[var(--color-board-silver)] hover:text-[var(--color-board-text)] transition-colors"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          >
            {open ? (
              <X className="w-5 h-5" strokeWidth={1.5} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-[var(--color-board-border)] bg-[var(--color-board-bg)]"
        >
          <div className="px-6 py-4 space-y-1">
            {navItems.map(({ href, key }) => {
              const isActive =
                pathname === href || pathname.startsWith(`${href}/`);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`block px-3 py-3 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-[var(--color-board-text)] bg-[var(--color-board-surface)]"
                      : "text-[var(--color-board-muted)] hover:text-[var(--color-board-text)] hover:bg-[var(--color-board-surface)]/60"
                  }`}
                >
                  {labels[key]}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
