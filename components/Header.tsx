"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "./Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        height: 76,
        display: "flex",
        alignItems: "center",
        gap: "clamp(16px,3vw,44px)",
        padding: "0 clamp(20px,4vw,56px)",
        boxSizing: "border-box",
        background: scrolled ? "rgba(11,11,11,.72)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,.14)" : "transparent"}`,
        transition:
          "background .3s var(--ease-snap), border-color .3s var(--ease-snap), backdrop-filter .3s",
      }}
    >
      <a href="#top" style={{ display: "flex", flex: "0 0 auto" }}>
        <Logo mark="wordmark" ink="dark" height={22} />
      </a>
      <nav className="site-nav-links">
        <a href="#work" className="nav-link">Work</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#why" className="nav-link">Why Berth</a>
        <a href="#industries" className="nav-link">Industries</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
      <Button variant="accent" size="sm" trailingArrow href="#contact">
        Start a Campaign
      </Button>
    </header>
  );
}
