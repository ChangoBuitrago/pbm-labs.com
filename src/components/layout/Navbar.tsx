"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
      <div className="flex items-center justify-between px-6 h-16 max-w-6xl mx-auto">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Logo size="sm" />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {siteConfig.navigation.map(({ href, label }) => {
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
                {label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Button
            href="/contact"
            variant="primary"
            size="sm"
            className="hidden md:inline-flex"
          >
            Contact
          </Button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-[var(--color-board-silver)] hover:text-[var(--color-board-text)] transition-colors"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
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
            {siteConfig.navigation.map(({ href, label }) => {
              const isActive = pathname === href || pathname.startsWith(`${href}/`);
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
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
