import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const variants = {
  primary:
    "bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 hover:from-cyan-400 hover:to-cyan-300 shadow-lg shadow-cyan-500/10 border border-cyan-400/20",
  secondary:
    "bg-transparent text-slate-300 hover:text-white border border-[var(--color-border)] hover:border-slate-500/60 hover:bg-white/[0.03]",
  ghost:
    "bg-transparent text-[var(--color-muted)] hover:text-white border border-transparent hover:bg-white/[0.03]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-sm font-semibold",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}

export function ButtonSubmit({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}) {
  const submitVariants = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 hover:from-cyan-400 hover:to-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/10",
    secondary:
      "bg-[var(--color-elevated)] text-white border border-[var(--color-border)] hover:border-slate-500/60 disabled:opacity-50",
  };

  return (
    <button
      className={`w-full inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 ${submitVariants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
