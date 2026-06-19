import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  size?: "default" | "large";
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
    size === "large"
      ? "text-4xl md:text-[3.25rem] lg:text-[3.75rem] leading-[1.08]"
      : "text-3xl md:text-4xl leading-tight";

  return (
    <header
      className={`mb-10 md:mb-14 ${alignClass} ${align === "left" ? "max-w-3xl" : "max-w-2xl"}`}
    >
      {eyebrow && <p className="corp-eyebrow mb-4">{eyebrow}</p>}
      <h1
        className={`${titleClass} font-semibold tracking-tight text-white mb-4`}
      >
        {title}
      </h1>
      {description && (
        <p
          className={`text-base md:text-lg text-[var(--color-muted)] leading-relaxed max-w-xl ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </header>
  );
}
