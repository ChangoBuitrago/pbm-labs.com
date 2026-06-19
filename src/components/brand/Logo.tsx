import { siteConfig } from "@/lib/site-config";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { mark: 28, text: "text-[15px]" },
  md: { mark: 32, text: "text-lg" },
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
        <span
          className={`${s.text} font-semibold tracking-tight text-[var(--color-board-text)]`}
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
      className={`logo-mark ${className}`}
      aria-hidden
    >
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="9"
        className="logo-frame"
        stroke="var(--color-board-border)"
        strokeWidth="1.5"
      />

      <line
        x1="8"
        y1="28"
        x2="32"
        y2="28"
        className="logo-axis"
        stroke="var(--color-board-border)"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <line
        x1="11"
        y1="11"
        x2="11"
        y2="29"
        className="logo-axis"
        stroke="var(--color-board-border)"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.55"
      />

      <path
        d="M11 24.5 C14.5 17.5, 17 17.5, 20 21 C23 24.5, 25.5 24.5, 29 17.5"
        className="logo-wave"
        stroke="var(--color-board-accent)"
        strokeWidth="1.75"
        strokeLinecap="round"
        fill="none"
      />

      <circle cx="14.5" cy="20.5" r="1.6" className="logo-node logo-node-1" fill="var(--color-board-silver)" />
      <circle cx="20" cy="21" r="1.6" className="logo-node logo-node-2" fill="var(--color-board-accent)" />
      <circle cx="25.5" cy="20.5" r="1.6" className="logo-node logo-node-3" fill="var(--color-board-silver)" />

      <path
        d="M27.5 12.5 L27.5 15.5 M26 14 L29 14"
        className="logo-bit"
        stroke="var(--color-board-muted)"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M31 12.5 L31 15.5"
        className="logo-bit logo-bit-1"
        stroke="var(--color-board-accent)"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.85"
      />

      <path
        d="M8.5 13 C8.5 11.2, 9.6 10, 10.8 10 C12 10, 13 11.2, 13 13 C13 14.8, 12 16, 10.8 16 C9.6 16, 8.5 14.8, 8.5 13"
        className="logo-brace"
        stroke="var(--color-board-muted)"
        strokeWidth="0.85"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}
