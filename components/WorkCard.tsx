import Image from "next/image";
import type { ReactNode } from "react";

type WorkStat = { value: string; label: string } | { text: string };

// Stand-in for campaign photography: the brand's colours with the headline
// result from the pitch deck's proof slide.
type WorkTile = { bg: string; accent: string; figure: string; label: string };

export function WorkCard({
  mark,
  markSize = 15,
  tagline,
  image,
  tile,
  stats,
}: {
  mark: ReactNode;
  markSize?: number;
  tagline: string;
  image?: { src: string; alt: string };
  tile?: WorkTile;
  stats: WorkStat[];
}) {
  return (
    <article className="work-card">
      <div className="work-card-media">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 700px) 100vw, 25vw"
            style={{ objectFit: "cover" }}
          />
        ) : tile ? (
          <div
            className="work-card-tile"
            style={{
              background: `radial-gradient(120% 80% at 85% 20%, ${tile.accent}33 0%, transparent 55%), ${tile.bg}`,
            }}
          >
            <span className="work-card-tile-figure" style={{ color: tile.accent }}>
              {tile.figure}
            </span>
            <span className="work-card-tile-label">{tile.label}</span>
          </div>
        ) : null}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg,rgba(11,11,11,.55) 0%,rgba(11,11,11,0) 35%,rgba(11,11,11,.82) 100%)",
            pointerEvents: "none",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            font: `700 ${markSize}px/1 var(--font-display)`,
            letterSpacing: "-.02em",
            color: "#fff",
            pointerEvents: "none",
          }}
        >
          {mark}
        </span>
        <p
          style={{
            position: "absolute",
            left: 16,
            right: 16,
            bottom: 16,
            margin: 0,
            font: "500 14px/1.35 var(--font-sans)",
            color: "#fff",
            pointerEvents: "none",
          }}
        >
          {tagline}
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,minmax(0,1fr))",
          borderTop: "1px solid var(--border-on-dark)",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              padding: "10px 12px",
              display: "grid",
              gap: 3,
              alignItems: "center",
              borderLeft: i > 0 ? "1px solid var(--border-on-dark)" : "none",
            }}
          >
            {"text" in stat ? (
              <span style={{ font: "500 12.5px/1.2 var(--font-sans)", color: "rgba(255,255,255,.85)" }}>
                {stat.text}
              </span>
            ) : (
              <>
                <span style={{ font: "700 12.5px/1.2 var(--font-sans)", color: "#fff" }}>{stat.value}</span>
                <span
                  style={{
                    font: "500 9px/1.2 var(--font-sans)",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,.5)",
                  }}
                >
                  {stat.label}
                </span>
              </>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
