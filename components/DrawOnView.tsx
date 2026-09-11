"use client";

import { useEffect, useRef, useState } from "react";

export function IndustriesSwirl() {
  const ref = useRef<SVGPathElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      viewBox="0 0 1440 300"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.9,
      }}
    >
      <path
        ref={ref}
        d="M -20 260 C 380 240 520 60 900 90 C 1180 112 1300 220 1470 190"
        fill="none"
        stroke="var(--berth-lime)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".55"
        style={{
          strokeDasharray: 1800,
          strokeDashoffset: 1800,
          animation: play ? "berth-draw 2.8s cubic-bezier(.2,.85,.15,1) forwards" : "none",
        }}
      />
    </svg>
  );
}
