import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

type PageShellProps = {
  children: ReactNode;
  width?: "wide" | "default" | "narrow";
  hero?: boolean;
  className?: string;
};

const widthClass = {
  wide: "max-w-6xl",
  default: "max-w-5xl",
  narrow: "max-w-3xl",
};

export function PageShell({
  children,
  width = "wide",
  hero = false,
  className = "",
}: PageShellProps) {
  return (
    <div className={`animate-in relative ${className}`}>
      {hero && <div className="hero-glow" aria-hidden />}
      <div
        className={`relative ${widthClass[width]} mx-auto px-6 ${hero ? "py-20 md:py-28" : "py-14 md:py-20"}`}
      >
        {children}
      </div>
    </div>
  );
}

export function PageSection({
  children,
  className = "",
  bordered = false,
  muted = false,
}: {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  muted?: boolean;
}) {
  return (
    <section
      className={`${bordered ? "border-t border-[var(--color-board-border)]" : ""} ${muted ? "bg-[var(--color-board-surface)]/40" : ""} ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
      <div className="max-w-xl">
        {eyebrow && <p className="corp-eyebrow mb-2">{eyebrow}</p>}
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-board-text)] tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-[var(--color-board-muted)] text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

export function SectionLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="section-link">
      {children} <ArrowRight className="w-4 h-4" />
    </Link>
  );
}

export function CtaBand({
  title,
  description,
  buttonLabel = "Contact us",
  buttonHref = "/contact",
}: {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <div className="rounded-lg border border-[var(--color-board-border)] bg-[var(--color-board-surface)] p-8 md:p-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-lg">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-board-text)] tracking-tight mb-2">
            {title}
          </h2>
          <p className="text-[var(--color-board-muted)] text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <Button href={buttonHref} variant="primary" size="md" className="shrink-0">
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}
