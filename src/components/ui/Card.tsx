import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-[var(--color-board-border)] bg-[var(--color-board-surface)] p-7 md:p-8 ${
        hover
          ? "transition-all duration-300 hover:border-[var(--color-board-accent)]/30 hover:bg-[var(--color-board-elevated)]/60"
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
