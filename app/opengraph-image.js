import { ImageResponse } from "next/og";

export const alt = "Forteress Media - Build. Rebuild. Refresh.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f4f1e8",
          color: "#141310",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          fontFamily: "Arial, sans-serif",
          border: "16px solid #141310",
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 900, letterSpacing: "0.02em" }}>
          FORTERESS MEDIA
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ fontSize: 104, fontWeight: 900, lineHeight: 0.92 }}>
            BUILD.
          </div>
          <div style={{ fontSize: 104, fontWeight: 900, lineHeight: 0.92 }}>
            REBUILD.
          </div>
          <div
            style={{
              color: "#c8451f",
              fontSize: 104,
              fontWeight: 900,
              lineHeight: 0.92,
            }}
          >
            REFRESH.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 40,
          }}
        >
          <div style={{ maxWidth: 650, fontSize: 30, lineHeight: 1.25, fontWeight: 700 }}>
            AI-first consulting for websites, apps, SEO, media strategy, and workflows.
          </div>
          <div style={{ fontSize: 24, fontWeight: 900, color: "#c8451f" }}>
            forteressmedia.com
          </div>
        </div>
      </div>
    ),
    size
  );
}
