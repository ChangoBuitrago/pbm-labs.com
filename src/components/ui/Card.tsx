import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-6 md:p-7 ${
        hover
          ? "transition-all duration-200 hover:border-slate-600/50 hover:bg-[var(--color-elevated)]/50"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="corp-eyebrow mb-2">{children}</p>;
}
