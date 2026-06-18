import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const variants = {
  primary:
    "bg-white text-slate-950 hover:bg-slate-100 border border-white/10 shadow-sm",
  secondary:
    "bg-transparent text-slate-200 hover:text-white border border-slate-600 hover:border-slate-500 hover:bg-slate-800/50",
  ghost:
    "bg-transparent text-slate-400 hover:text-white border border-transparent hover:bg-slate-800/40",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
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
      "bg-white text-slate-950 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "bg-slate-800 text-white border border-slate-600 hover:bg-slate-700 disabled:opacity-50",
  };

  return (
    <button
      className={`w-full inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 ${submitVariants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
