import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.legalName}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social preview.
 *
 * Fonts are read from the repo rather than fetched at render time, so the image
 * builds identically in CI, on Vercel and offline.
 */
export default async function Image() {
  const fontDir = join(process.cwd(), "app", "fonts");
  const [grotesk, serif] = await Promise.all([
    readFile(join(fontDir, "archivo-600.ttf")),
    readFile(join(fontDir, "fraunces-600.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#141310",
          color: "#f6f2e9",
          padding: 68,
          fontFamily: "Archivo",
          position: "relative",
        }}
      >
        {/* Header rule */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            borderBottom: "1px solid rgba(246,242,233,0.22)",
            paddingBottom: 26,
          }}
        >
          <svg width="46" height="46" viewBox="0 0 64 64">
            <path d="M2 58V42a8 8 0 0 1 16 0v16Z" fill="#f6f2e9" />
            <path d="M22 58V30a10 10 0 0 1 20 0v28Z" fill="#e8a317" />
            <path d="M46 58V42a8 8 0 0 1 16 0v16Z" fill="#f6f2e9" />
          </svg>
          <span style={{ fontSize: 34, letterSpacing: 1 }}>YOCED</span>
          <span
            style={{
              marginLeft: "auto",
              fontSize: 17,
              letterSpacing: 2.4,
              textTransform: "uppercase",
              color: "rgba(246,242,233,0.6)",
            }}
          >
            {site.location}
          </span>
        </div>

        {/* Headline, mixed grotesk and serif */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 92,
            lineHeight: 1.02,
            letterSpacing: -4,
            maxWidth: 1000,
          }}
        >
          <span>Ideas are cheap.</span>
          <span style={{ display: "flex", gap: 22 }}>
            <span style={{ fontFamily: "Fraunces", color: "#ef7a4b" }}>Operations</span>
            <span>are what last.</span>
          </span>
        </div>

        {/* Footer rule */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(246,242,233,0.22)",
            paddingTop: 26,
            fontSize: 19,
            color: "rgba(246,242,233,0.72)",
          }}
        >
          <span>{site.legalName}</span>
          <span style={{ letterSpacing: 2.4, textTransform: "uppercase", fontSize: 16 }}>
            12 fields · 6 ventures
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo", data: grotesk, weight: 600, style: "normal" },
        { name: "Fraunces", data: serif, weight: 600, style: "normal" },
      ],
    },
  );
}
