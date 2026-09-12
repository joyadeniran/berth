"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const WORDS = ["Growth", "Downloads", "Activations", "Revenue", "Results"];
const HOLD_MS = 2200;
const FADE_MS = 320;

export function RotatingWord({ style, className }: { style?: React.CSSProperties; className?: string }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [width, setWidth] = useState<number>();
  const measureRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const measure = () => {
      const el = measureRef.current;
      if (!el) return;
      const max = Math.max(...Array.from(el.children).map((c) => (c as HTMLElement).offsetWidth));
      setWidth(max);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

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
    <span
      style={{
        display: "inline-block",
        position: "relative",
        width,
        verticalAlign: "bottom",
        ...style,
      }}
      className={className}
    >
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
      <span
        ref={measureRef}
        aria-hidden
        style={{ position: "absolute", top: 0, left: 0, height: 0, overflow: "hidden", visibility: "hidden", pointerEvents: "none" }}
      >
        {WORDS.map((w) => (
          <span key={w} style={{ display: "block", whiteSpace: "nowrap" }}>
            {w}
          </span>
        ))}
      </span>
    </span>
  );
}
