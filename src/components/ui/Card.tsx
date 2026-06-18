import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-slate-800/80 bg-slate-900/30 p-8 ${hover ? "transition-colors duration-200 hover:border-slate-700 hover:bg-slate-900/50" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-3">
      {children}
    </p>
  );
}
