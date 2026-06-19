import { siteConfig } from "@/lib/site-config";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { mark: 26, text: "text-[15px]" },
  md: { mark: 30, text: "text-lg" },
  lg: { mark: 36, text: "text-xl" },
};

export function Logo({
  className = "",
  showWordmark = true,
  size = "md",
}: LogoProps) {
  const s = sizes[size];

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={s.mark} />
      {showWordmark && (
        <span className={`${s.text} font-semibold tracking-tight text-white`}>
          {siteConfig.name}
        </span>
      )}
    </span>
  );
}

export function LogoMark({
  size = 32,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="9"
        className="stroke-[var(--color-border)]"
        strokeWidth="1.5"
      />
      <rect x="9" y="22" width="5" height="10" rx="1" className="fill-slate-500" />
      <rect x="17.5" y="16" width="5" height="16" rx="1" className="fill-slate-300" />
      <rect x="26" y="10" width="5" height="22" rx="1" className="fill-cyan-400" />
      <circle cx="32" cy="8" r="2" className="fill-cyan-300" />
    </svg>
  );
}
