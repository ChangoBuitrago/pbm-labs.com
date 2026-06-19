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
        className={`relative ${widthClass[width]} mx-auto px-6 ${hero ? "py-24 md:py-32 lg:py-36" : "py-16 md:py-24"}`}
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
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">{children}</div>
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
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
      <div className="max-w-xl">
        {eyebrow && <p className="corp-eyebrow mb-3">{eyebrow}</p>}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--color-board-text)] tracking-[-0.02em]">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-[var(--color-board-muted)] leading-relaxed">
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
  buttonHref = "/contact#form",
}: {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--color-board-border)] bg-[var(--color-board-surface)] p-10 md:p-14">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(61,165,244,0.08),transparent_60%)]"
        aria-hidden
      />
      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="max-w-lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-board-text)] tracking-[-0.02em] mb-3">
            {title}
          </h2>
          <p className="text-[var(--color-board-muted)] leading-relaxed">
            {description}
          </p>
        </div>
        <Button href={buttonHref} variant="primary" size="lg" className="shrink-0">
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}

export function StatGrid({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-[var(--color-board-border)] pt-10 mt-10">
      {stats.map(({ value, label }) => (
        <div key={label}>
          <p className="stat-value">{value}</p>
          <p className="stat-label">{label}</p>
        </div>
      ))}
    </div>
  );
}
