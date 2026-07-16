import { ImageResponse } from "next/og";

// Markenrot {{BRAND_RED_HEX}} – Fallback
const BRAND = "#c1121f";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: BRAND,
          color: "#ffffff",
          fontSize: 44,
          fontWeight: 700,
          borderRadius: 14,
          fontFamily: "sans-serif",
        }}
      >
        P
      </div>
    ),
    { ...size },
  );
}
