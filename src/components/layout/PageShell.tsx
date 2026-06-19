import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  width?: "wide" | "default" | "narrow";
  hero?: boolean;
  className?: string;
};

const widthClass = {
  wide: "max-w-7xl",
  default: "max-w-6xl",
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(800px,100%)] h-[360px] bg-blue-950/15 blur-[100px] rounded-full pointer-events-none -z-10" />
      )}
      <div
        className={`relative ${widthClass[width]} mx-auto px-6 py-16 md:py-24`}
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
      className={`${bordered ? "border-t border-slate-800/60" : ""} ${muted ? "bg-slate-950/30" : ""} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow?: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
      <div className="max-w-xl">
        {eyebrow && (
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-2">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}
