"use client";

import { useEffect, useRef } from "react";

// Feeds the pointer position into the hero as CSS custom properties
// (--mx/--my in px for the spotlight, --px/--py in -1..1 for parallax).
// Renders nothing visible; only active for fine pointers with motion allowed.
export function HeroPointer() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = ref.current?.parentElement;
    if (!section) return;
    if (!matchMedia("(pointer: fine)").matches) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = section.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        section.style.setProperty("--mx", `${x}px`);
        section.style.setProperty("--my", `${y}px`);
        section.style.setProperty("--px", ((x / r.width) * 2 - 1).toFixed(3));
        section.style.setProperty("--py", ((y / r.height) * 2 - 1).toFixed(3));
        section.dataset.pointer = "on";
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      section.style.setProperty("--px", "0");
      section.style.setProperty("--py", "0");
      delete section.dataset.pointer;
    };

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <span ref={ref} hidden />;
}
