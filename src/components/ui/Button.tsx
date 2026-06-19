import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200 select-none whitespace-nowrap";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-board-accent)] text-[var(--color-board-bg)] font-semibold tracking-tight shadow-[0_0_20px_rgba(61,165,244,0.2)] hover:brightness-110 hover:shadow-[0_0_28px_rgba(61,165,244,0.32)] active:scale-[0.98]",
  secondary:
    "bg-transparent text-[var(--color-board-silver)] font-medium tracking-normal border border-[var(--color-board-border)] hover:border-[var(--color-board-silver)]/45 hover:bg-[var(--color-board-surface)]/60 hover:text-[var(--color-board-text)] active:scale-[0.98]",
  ghost:
    "bg-transparent text-[var(--color-board-muted)] font-medium tracking-normal hover:text-[var(--color-board-text)] hover:bg-[var(--color-board-surface)]/40 active:scale-[0.98]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[13px] leading-none",
  md: "h-10 px-6 text-sm leading-none",
  lg: "h-12 px-8 text-[15px] leading-none",
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
      "bg-[var(--color-board-accent)] text-[var(--color-board-bg)] font-semibold tracking-tight shadow-[0_0_20px_rgba(61,165,244,0.2)] hover:brightness-110 hover:shadow-[0_0_28px_rgba(61,165,244,0.32)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:brightness-100 disabled:hover:shadow-[0_0_20px_rgba(61,165,244,0.2)] disabled:active:scale-100",
    secondary:
      "bg-[var(--color-board-elevated)] text-[var(--color-board-text)] font-medium tracking-normal border border-[var(--color-board-border)] hover:border-[var(--color-board-silver)]/30 hover:bg-[var(--color-board-elevated)]/80 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100",
  };

  return (
    <button
      className={`w-full ${base} ${submitVariants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
