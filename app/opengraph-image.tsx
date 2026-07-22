import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt =
  "PComplett-IT – IT-Systemhaus für Unternehmen in Hannover";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Markenfarbe: Firmen-Rot (CI), siehe brand.md
const BRAND = "#c1121f";
const INK = "#0f172a";

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
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: BRAND,
              borderRadius: 16,
            }}
          >
            <svg width="42" height="42" viewBox="4 22 130 130" fill="none">
              <path
                d="M 48 138 L 48 34 L 100 34 Q 122 34 122 62 Q 122 90 100 90 L 66 90"
                stroke="#ffffff"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 48 116 L 22 116"
                stroke="#ffffff"
                strokeWidth="9"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: INK }}>
            <span>PComplett</span>
            <span style={{ color: BRAND }}>-IT</span>
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
            <div>Professionelle IT-Betreuung</div>
            <div style={{ color: BRAND }}>für Unternehmen.</div>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#475569" }}>
            {`${siteConfig.slogan} · Hannover`}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#475569" }}>
          Serviceverträge · Serveraufbau · Netzwerke · Arbeitsplätze ·
          Telefonanlagen · IT-Sicherheit
        </div>
      </div>
    ),
    { ...size },
  );
}
