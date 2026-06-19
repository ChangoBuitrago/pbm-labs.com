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
      {hero && (
        <>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(900px,120%)] h-[420px] bg-cyan-500/[0.04] blur-[120px] rounded-full pointer-events-none -z-10" />
          <div className="absolute top-20 right-0 w-[400px] h-[300px] bg-indigo-500/[0.03] blur-[100px] rounded-full pointer-events-none -z-10" />
        </>
      )}
      <div
        className={`relative ${widthClass[width]} mx-auto px-6 py-14 md:py-20`}
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
      className={`${bordered ? "border-t border-[var(--color-border)]" : ""} ${muted ? "bg-[var(--color-surface)]/40" : ""} ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">{children}</div>
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
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10">
      <div className="max-w-lg">
        {eyebrow && <p className="corp-eyebrow mb-2">{eyebrow}</p>}
        <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">
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
      {children} <ArrowRight className="w-3.5 h-3.5" />
    </Link>
  );
}

export function CtaBanner({
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
    <div className="corp-panel p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="max-w-md">
        <h2 className="text-lg font-semibold text-white mb-2">{title}</h2>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed">
          {description}
        </p>
      </div>
      <Button href={buttonHref} variant="primary" size="md" className="shrink-0">
        {buttonLabel}
      </Button>
    </div>
  );
}
