import { ImageResponse } from "next/og";

export const alt = "YOCED | Build ideas into impact";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f4f0e8", color: "#0b0d0c", padding: "64px", fontFamily: "Arial, sans-serif", position: "relative", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, fontWeight: 800 }}>
        <div style={{ width: 36, height: 36, border: "5px solid #0b0d0c", borderRightColor: "transparent", borderRadius: "50%" }} />
        YOCED
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 112, fontWeight: 800, lineHeight: .82, letterSpacing: "-8px", maxWidth: 900 }}>
        <span>Build ideas</span>
        <span>into impact.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18 }}>
        <span>Youth Corporate and Economic Development</span><span>Nairobi, Kenya</span>
      </div>
      <div style={{ position: "absolute", width: 380, height: 380, border: "70px solid #d9ff43", borderRadius: "50%", right: -150, top: -150 }} />
      <div style={{ position: "absolute", width: 180, height: 180, border: "42px solid #5a78ff", borderRadius: "50%", right: 110, top: 60 }} />
    </div>,
    size
  );
}
