import { ImageResponse } from "next/og";

export const alt = "Eknoor CCTV - CCTV & Security Solutions in Chandigarh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "88px", color: "white", background: "linear-gradient(135deg, #041f30, #0b4969)" }}>
      <div style={{ display: "flex", color: "#1196d3", fontSize: 40, fontWeight: 700, marginBottom: 28 }}>EKNOOR CCTV · CHANDIGARH</div>
      <div style={{ display: "flex", maxWidth: 940, fontSize: 74, lineHeight: 1.05, fontWeight: 700 }}>CCTV, Access Control &amp; Security Solutions For Every Space</div>
      <div style={{ display: "flex", marginTop: 34, color: "#d9edf6", fontSize: 28 }}>Installation · Networking · Automation · After-sales support</div>
    </div>,
    size,
  );
}
