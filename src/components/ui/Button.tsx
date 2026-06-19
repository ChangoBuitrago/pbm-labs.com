import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-150 select-none whitespace-nowrap";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-board-accent)] text-[var(--color-board-bg)] hover:brightness-110 active:brightness-95",
  secondary:
    "bg-transparent text-[var(--color-board-silver)] border border-[var(--color-board-border)] hover:border-[var(--color-board-silver)]/40 hover:text-[var(--color-board-text)]",
  ghost:
    "bg-transparent text-[var(--color-board-muted)] hover:text-[var(--color-board-text)]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-10 px-5 text-sm",
  lg: "h-11 px-6 text-sm",
};

export function buttonClassName({
  variant = "primary",
  size = "md",
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link
      className={buttonClassName({ variant, size, className })}
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
  size?: ButtonSize;
}) {
  const submitVariants: Record<"primary" | "secondary", string> = {
    primary:
      "bg-[var(--color-board-accent)] text-[var(--color-board-bg)] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "bg-[var(--color-board-elevated)] text-[var(--color-board-text)] border border-[var(--color-board-border)] hover:border-[var(--color-board-silver)]/30 disabled:opacity-50 disabled:cursor-not-allowed",
  };

  return (
    <button
      className={`w-full ${base} ${submitVariants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
