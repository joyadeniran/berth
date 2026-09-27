"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = ["Growth", "Downloads", "Activations", "Revenue", "Results"];
const HOLD_MS = 2600;
const CHAR_STAGGER_MS = 32;

function Letters({ word, className }: { word: string; className: string }) {
  return (
    <>
      {word.split("").map((ch, i) => (
        <span key={i} className={className} style={{ animationDelay: `${i * CHAR_STAGGER_MS}ms` }}>
          {ch}
        </span>
      ))}
    </>
  );
}

// Sits on its own line in the hero headline so swapping words never reflows
// the rest of the heading. The word rides on a lime highlighter bar (after the
// pitch deck) that stretches to fit each new word while the letters roll
// through it.
export function RotatingWord({ style, className }: { style?: React.CSSProperties; className?: string }) {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState<number | null>(null);
  const inRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cycle = setInterval(() => setIndex((i) => i + 1), HOLD_MS);
    return () => clearInterval(cycle);
  }, []);

  useEffect(() => {
    const el = inRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setWidth(el.offsetWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, [index]);

  const word = WORDS[index % WORDS.length];
  const prev = index > 0 ? WORDS[(index - 1) % WORDS.length] : null;

  return (
    <span className={`rw ${className ?? ""}`} style={style}>
      <span className="rw-sr">{WORDS[0]}</span>
      <span className="rw-stage" aria-hidden="true" style={width ? { width } : undefined}>
        <span className="rw-bar" />
        {prev ? (
          <span key={`out-${index}`} className="rw-layer rw-out">
            <Letters word={prev} className="rw-char-out" />
          </span>
        ) : null}
        <span key={`in-${index}`} ref={inRef} className="rw-layer">
          <Letters word={word} className="rw-char-in" />
        </span>
      </span>
    </span>
  );
}
