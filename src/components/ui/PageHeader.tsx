import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  size?: "default" | "large" | "hero";
};

export function PageHeader({
  eyebrow,
  title,
  description,
  align = "center",
  size = "default",
}: PageHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleClass =
    size === "hero"
      ? "text-[2.75rem] md:text-6xl lg:text-[4.25rem] leading-[1.05] tracking-[-0.03em]"
      : size === "large"
        ? "text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-[-0.02em]"
        : "text-3xl md:text-4xl leading-tight tracking-[-0.02em]";

  return (
    <header
      className={`mb-10 md:mb-14 ${alignClass} ${align === "left" ? "max-w-4xl" : "max-w-3xl"}`}
    >
      {eyebrow && <p className="corp-eyebrow mb-5">{eyebrow}</p>}
      <h1
        className={`${titleClass} font-semibold text-[var(--color-board-text)] mb-5`}
      >
        {title}
      </h1>
      {description && (
        <p
          className={`text-lg md:text-xl text-[var(--color-board-silver)] leading-relaxed max-w-2xl font-light ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </header>
  );
}
