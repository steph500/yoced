import Link from "next/link";
import { site } from "@/lib/site";

/**
 * The YOCED mark: a symmetrical gateway of three arches.
 *
 * It encodes the organising idea of the site — one ecosystem, many doors — and
 * survives at favicon size because the silhouette is simple and symmetrical.
 * The two outer arches inherit `currentColor` so the mark works on paper and on
 * ink without a second asset; only the centre arch is painted.
 */
export function YocedMark({
  size = 30,
  accent = "var(--clay)",
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
      <path d="M2 58V42a8 8 0 0 1 16 0v16Z" fill="currentColor" />
      <path d="M22 58V30a10 10 0 0 1 20 0v28Z" fill={accent} />
      <path d="M46 58V42a8 8 0 0 1 16 0v16Z" fill="currentColor" />
    </svg>
  );
}

export function Brand({ withFullName = false }: { withFullName?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label={`${site.name} — home`}>
      <YocedMark />
      <span>
        <span className="brand__word">{site.name}</span>
        {withFullName ? <span className="brand__full">{site.legalName}</span> : null}
      </span>
    </Link>
  );
}
