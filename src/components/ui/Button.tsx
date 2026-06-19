import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const variants = {
  primary:
    "bg-[var(--color-board-accent)] text-[var(--color-board-bg)] hover:brightness-110 shadow-[0_0_24px_rgba(155,109,255,0.25)]",
  secondary:
    "bg-transparent text-[var(--color-board-silver)] border border-[var(--color-board-border)] hover:border-[var(--color-board-silver)]/40 hover:text-[var(--color-board-text)]",
  ghost:
    "bg-transparent text-[var(--color-board-muted)] hover:text-[var(--color-board-text)]",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-5 py-2.5 text-sm rounded-lg",
  lg: "px-7 py-3.5 text-sm font-semibold rounded-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
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
      "bg-[var(--color-board-accent)] text-[var(--color-board-bg)] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "bg-[var(--color-board-elevated)] text-[var(--color-board-text)] border border-[var(--color-board-border)] hover:border-[var(--color-board-silver)]/30 disabled:opacity-50",
  };

  return (
    <button
      className={`w-full inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg ${submitVariants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
