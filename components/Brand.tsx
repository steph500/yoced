import Link from "next/link";
import { site } from "@/lib/site";

/**
 * 2026 YOCED mark.
 * A split Y / pathway symbol: two routes converge into one operating spine.
 * It is intentionally geometric so it survives at favicon and sidebar scale.
 */
export function YocedMark({
  size = 32,
  accent = "var(--signal)",
  title,
}: {
  size?: number;
  accent?: string;
  title?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <path d="M8 8h12l12 15L44 8h12L38 31v25H26V31L8 8Z" fill="currentColor" />
      <path d="M14 8h10l8 10 8-10h10L32 31 14 8Z" fill={accent} />
      <path d="M26 36h12v20H26z" fill={accent} opacity=".92" />
    </svg>
  );
}

export function Brand({ withFullName = false }: { withFullName?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label={`${site.name} — home`}>
      <YocedMark />
      <span className="brand__copy">
        <span className="brand__word">{site.name}</span>
        {withFullName ? <span className="brand__full">{site.shortLegalName}</span> : null}
      </span>
    </Link>
  );
}
