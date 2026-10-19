import { ImageResponse } from "next/og";

export const alt = "Sky Secure Website Recreation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "88px", color: "white", background: "linear-gradient(135deg, #041f30, #0b4969)" }}>
      <div style={{ display: "flex", color: "#1196d3", fontSize: 44, fontWeight: 700, marginBottom: 28 }}>SKY SECURE · WEBSITE RECREATION</div>
      <div style={{ display: "flex", maxWidth: 900, fontSize: 76, lineHeight: 1.05, fontWeight: 700 }}>Integrated Security Solutions For Every Space</div>
      <div style={{ display: "flex", marginTop: 34, color: "#d9edf6", fontSize: 28 }}>Public-facing demonstration · No backend or data submission</div>
    </div>,
    size,
  );
}
