import type { ReactNode } from "react";

type ProseLayoutProps = {
  children: ReactNode;
};

export function ProseLayout({ children }: ProseLayoutProps) {
  return (
    <div className="corp-panel divide-y divide-[var(--color-border)] text-sm leading-relaxed text-[var(--color-muted)]">
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
    <section className="p-6 md:p-7">
      <h2 className="text-sm font-semibold text-white mb-3 tracking-tight">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
