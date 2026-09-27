"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

// The pitch deck's lime highlighter bar: sweeps in behind the phrase the
// first time it scrolls into view, and the ink flips to black as it passes.
export function Highlight({ children, delay = 250 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.6, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={`hl${on ? " hl-on" : ""}`} style={{ "--hl-delay": `${delay}ms` } as CSSProperties}>
      {children}
    </span>
  );
}
