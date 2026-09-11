import Image from "next/image";
import type { ReactNode } from "react";

type WorkStat = { value: string; label: string } | { text: string };

export function WorkCard({
  mark,
  markSize = 15,
  tagline,
  image,
  placeholder,
  stats,
}: {
  mark: ReactNode;
  markSize?: number;
  tagline: string;
  image?: { src: string; alt: string };
  placeholder?: string;
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
        ) : (
          <div className="work-card-placeholder">{placeholder}</div>
        )}
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
