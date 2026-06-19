import type { ReactNode } from "react";

type ProseLayoutProps = {
  children: ReactNode;
};

export function ProseLayout({ children }: ProseLayoutProps) {
  return (
    <div className="corp-panel divide-y divide-[var(--color-board-border)] text-sm leading-relaxed text-[var(--color-board-muted)]">
      {children}
    </div>
  );
}

export function ProseSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="p-6 md:p-8">
      <h2 className="text-base font-semibold text-[var(--color-board-text)] mb-3 tracking-tight">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
