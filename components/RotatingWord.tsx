"use client";

import { useEffect, useState } from "react";

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
// the rest of the heading. Outgoing letters rise away while incoming letters
// rise in from a blur, and the lime underline redraws for each word.
export function RotatingWord({ style, className }: { style?: React.CSSProperties; className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => setIndex((i) => i + 1), HOLD_MS);
    return () => clearInterval(cycle);
  }, []);

  const word = WORDS[index % WORDS.length];
  const prev = index > 0 ? WORDS[(index - 1) % WORDS.length] : null;

  return (
    <span className={`rw ${className ?? ""}`} style={style}>
      <span className="rw-sr">{WORDS[0]}</span>
      <span className="rw-stage" aria-hidden="true">
        {prev ? (
          <span key={`out-${index}`} className="rw-layer rw-out">
            <Letters word={prev} className="rw-char-out" />
          </span>
        ) : null}
        <span key={`in-${index}`} className="rw-layer">
          <Letters word={word} className="rw-char-in" />
        </span>
        <svg key={`ul-${index}`} className="rw-underline" viewBox="0 0 300 20" preserveAspectRatio="none">
          <path d="M4 14 C 70 4, 160 4, 296 10" pathLength={1} />
        </svg>
      </span>
    </span>
  );
}
