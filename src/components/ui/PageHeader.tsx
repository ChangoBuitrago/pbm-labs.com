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
      ? "text-4xl md:text-5xl lg:text-6xl leading-[1.12]"
      : "text-3xl md:text-4xl leading-tight";

  return (
    <header
      className={`mb-12 md:mb-16 ${alignClass} ${align === "left" ? "max-w-4xl" : "max-w-3xl"}`}
    >
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400/90 mb-4">
          {eyebrow}
        </p>
      )}
      <h1
        className={`${titleClass} font-semibold text-white tracking-tight mb-4 md:mb-5`}
      >
        {title}
      </h1>
      {description && (
        <p
          className={`text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </header>
  );
}
