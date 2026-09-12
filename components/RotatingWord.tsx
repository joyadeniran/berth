"use client";

import { useEffect, useState } from "react";

const WORDS = ["Growth", "Downloads", "Activations", "Revenue", "Results"];
const HOLD_MS = 2200;
const FADE_MS = 320;

export function RotatingWord({ style, className }: { style?: React.CSSProperties; className?: string }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % WORDS.length);
        setVisible(true);
      }, FADE_MS);
    }, HOLD_MS);
    return () => clearInterval(cycle);
  }, []);

  return (
    <span style={{ display: "inline-block", position: "relative", verticalAlign: "bottom", ...style }} className={className}>
      <span aria-hidden style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0,0,0,0)" }}>
        Growth
      </span>
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(10px)",
          transition: `opacity ${FADE_MS}ms var(--ease-snap), transform ${FADE_MS}ms var(--ease-snap)`,
        }}
      >
        {WORDS[index]}
      </span>
    </span>
  );
}
