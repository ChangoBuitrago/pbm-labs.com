import type { ReactNode } from "react";

type ProseLayoutProps = {
  children: ReactNode;
};

export function ProseLayout({ children }: ProseLayoutProps) {
  return (
    <div className="corp-panel divide-y divide-slate-800/60 text-sm leading-relaxed text-slate-400">
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
      <h2 className="text-base font-semibold text-white mb-3 tracking-tight">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
