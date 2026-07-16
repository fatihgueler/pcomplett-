import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt =
  "PComplett – IT-Systemhaus für kleine und mittlere Unternehmen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Markenrot {{BRAND_RED_HEX}} – Fallback
const BRAND = "#c1121f";
const INK = "#0d0e11";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: BRAND,
              color: "#ffffff",
              fontSize: 36,
              fontWeight: 700,
              borderRadius: 14,
            }}
          >
            P
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: INK }}>
            <span>PComplett</span>
            <span style={{ color: BRAND }}>.</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 66,
              fontWeight: 700,
              color: INK,
              lineHeight: 1.12,
            }}
          >
            <div>IT, die Ihr Unternehmen</div>
            <div style={{ color: BRAND }}>wirklich voranbringt.</div>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#5b5d66" }}>
            {`IT-Systemhaus für den Mittelstand · ${siteConfig.slogan}`}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#5b5d66" }}>
          IT-Lösungen · Development · Mediendesign · Service · Software ·
          Projektierung · Vermietung
        </div>
      </div>
    ),
    { ...size },
  );
}
