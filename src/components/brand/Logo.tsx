import { siteConfig } from "@/lib/site-config";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { mark: 28, text: "text-base" },
  md: { mark: 32, text: "text-lg" },
  lg: { mark: 40, text: "text-xl" },
};

export function Logo({
  className = "",
  showWordmark = true,
  size = "md",
}: LogoProps) {
  const s = sizes[size];

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark size={s.mark} />
      {showWordmark && (
        <span
          className={`${s.text} font-semibold tracking-tight text-white`}
        >
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
        rx="8"
        className="stroke-slate-600"
        strokeWidth="1.5"
      />
      <rect x="9" y="22" width="5" height="10" rx="1" className="fill-slate-400" />
      <rect x="17.5" y="16" width="5" height="16" rx="1" className="fill-slate-200" />
      <rect x="26" y="10" width="5" height="22" rx="1" className="fill-blue-500" />
      <circle cx="32" cy="8" r="2" className="fill-blue-400" />
    </svg>
  );
}
