type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export function PageHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: PageHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`max-w-3xl mb-16 ${alignClass}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400/90 mb-4">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-5">
        {title}
      </h1>
      {description && (
        <p className="text-lg text-slate-400 leading-relaxed">{description}</p>
      )}
      <div
        className={`mt-8 h-px w-16 bg-gradient-to-r from-blue-500/60 to-transparent ${align === "center" ? "mx-auto" : ""}`}
      />
    </header>
  );
}
