import Image from "next/image";
import { Award } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { HeroSwirl } from "@/components/HeroSwirl";
import { IndustriesSwirl } from "@/components/DrawOnView";
import { WorkCard } from "@/components/WorkCard";
import { RotatingWord } from "@/components/RotatingWord";
import { HeroPointer } from "@/components/HeroPointer";
import { Highlight } from "@/components/Highlight";
import { CONTACT_EMAIL } from "@/lib/contact";
import { CampaignModalProvider, StartCampaignButton } from "@/components/CampaignModal";
import { LinkedInIcon, XIcon, InstagramIcon, YouTubeIcon } from "@/components/SocialIcons";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/berthtech",
  x: "https://x.com/berthtech",
  instagram: "https://instagram.com/berthtech",
  youtube: "https://youtube.com/@berthtech",
};

const container = { maxWidth: 1240, margin: "0 auto" } as const;
const photoFilter = "grayscale(1) contrast(1.06)";

const platforms = [
  "Google Ads",
  "Meta",
  "TikTok",
  "Yango Ads",
  "Programmatic",
  "Transsion",
  "Palmstore",
  "Lagos",
  "Johannesburg",
];

const moreBrands = [
  { name: "22Bet", src: "/images/logos/22bet.png", w: 801, h: 350, height: 46 },
  { name: "MSport", src: "/images/logos/msport.png", w: 745, h: 169, height: 30 },
  { name: "Prestmit", src: "/images/logos/prestmit.png", w: 812, h: 197, height: 30 },
];

const stats = [
  { count: 20, suffix: "k+", label: "Active End Users" },
  { count: 13, suffix: "+", label: "Products Delivered" },
  { count: 10, suffix: "+", label: "Brand Partners" },
  { count: 2, suffix: "", label: "Markets — & Growing" },
];

const services = [
  {
    n: "01",
    title: "Paid Media & PPC",
    body: "Google Ads, Meta, TikTok, Yango Ads, and programmatic. We run campaigns that convert — not just impressions. Every naira and rand tracked to ROI.",
  },
  {
    n: "02",
    title: "App Growth & UA",
    body: "App installs, in-app engagement, and long-term retention — not just downloads. CPI campaigns built for real scale via Transsion & Palmstore networks.",
  },
  {
    n: "03",
    title: "Growth & Analytics",
    body: "Attribution, funnel analysis, and A/B testing. We track every naira and rand spent to ROAS.",
  },
  {
    n: "04",
    title: "Performance Strategy",
    body: "Market-entry playbooks, audience profiling, and campaign architecture built for the African context. No copy-paste Western playbooks.",
  },
];

const whyBerth = [
  { icon: "globe", title: "Africa-First Thinking", body: "Local insight. Global standards." },
  { icon: "zap", title: "Speed + Precision", body: "Agile execution. Measurable results." },
  { icon: "trending-up", title: "Outcomes Over Optics", body: "Real growth, not just reach." },
  { icon: "layers", title: "Full-Funnel Expertise", body: "From awareness to loyalty." },
] as const;

const industries = [
  { icon: "landmark", label: "Fintech & Banking" },
  { icon: "bitcoin", label: "Crypto & Web3" },
  { icon: "gamepad-2", label: "Gaming & Betting" },
  { icon: "heart-pulse", label: "Health & Wellness" },
  { icon: "shopping-bag", label: "E-Commerce" },
  { icon: "smartphone", label: "Consumer Apps" },
  { icon: "rocket", label: "Startups" },
] as const;

export default function Home() {
  return (
    <CampaignModalProvider>
    <div style={{ background: "var(--berth-black)" }}>
      <Header />

      {/* Hero */}
      <section
        id="top"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--berth-black)",
          marginTop: -76,
          minHeight: "min(92vh,860px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 4,
            padding: "clamp(96px,11vw,150px) clamp(20px,4vw,56px) calc(clamp(40px,6vw,64px) + 48px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 26,
          }}
        >
          <Reveal>
            <span
              style={{
                font: "500 11px/1.6 var(--font-sans)",
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.66)",
              }}
            >
              Pan-African Performance Marketing
            </span>
          </Reveal>
          <h1
            style={{
              margin: 0,
              font: "700 clamp(38px,5.4vw,68px)/1.02 var(--font-display)",
              letterSpacing: "-.03em",
              color: "#fff",
              textWrap: "balance",
            }}
          >
            <span className="hero-line">
              <span style={{ animationDelay: "120ms" }}>We Drive Real</span>
            </span>
            <RotatingWord style={{ color: "var(--berth-black)" }} />
            <span className="hero-line">
              <span style={{ animationDelay: "260ms" }}>For Ambitious Brands.</span>
            </span>
          </h1>
          <Reveal delay={180}>
            <p
              style={{
                margin: 0,
                maxWidth: "44ch",
                font: "400 clamp(15px,1.2vw,17px)/1.6 var(--font-sans)",
                color: "rgba(255,255,255,.7)",
              }}
            >
              Data-backed, Africa-first performance marketing across Nigeria and South Africa. We build
              campaigns that convert, retain, and scale.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 6 }}>
              <Button variant="accent" size="md" trailingArrow href="#work">
                See Our Work
              </Button>
              <StartCampaignButton variant="outlineOnDark" size="md" trailingArrow={false} />
            </div>
          </Reveal>
          <Reveal delay={360}>
            <a
              className="award-badge"
              href="https://www.linkedin.com/feed/update/urn:li:activity:739734659543795302"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Award size={22} strokeWidth={1.5} color="var(--berth-lime)" aria-hidden />
              <span style={{ display: "grid", gap: 3 }}>
                <span className="award-badge-title">Rising Star Agency 2025</span>
                <span className="award-badge-sub">Yango Ads Awards</span>
              </span>
              <span className="award-badge-arrow" aria-hidden>↗</span>
            </a>
          </Reveal>
        </div>
        <div style={{ position: "relative", minHeight: "min(88vh,860px)" }}>
          <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
            <div className="hero-photo">
              <div className="hero-photo-zoom">
                <Image
                  src="/images/hero-corridor.png"
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 700px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "62% 50%", filter: photoFilter }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg,#0B0B0B 0%,rgba(11,11,11,.75) 18%,rgba(11,11,11,0) 52%)",
            }}
          />
        </div>
        <div className="hero-spotlight" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <HeroSwirl />
        <div className="hero-ticker" aria-label="Platforms and markets we run on">
          <div className="hero-ticker-track">
            {[0, 1].map((copy) => (
              <div key={copy} style={{ display: "flex" }} aria-hidden={copy === 1 ? true : undefined}>
                {platforms.map((p) => (
                  <span key={p} className="hero-ticker-item">
                    {p}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <HeroPointer />
      </section>

      {/* Proof stats */}
      <section style={{ background: "var(--berth-sand)", padding: "clamp(30px,4vw,46px) clamp(20px,4vw,56px)" }}>
        <div
          style={{
            ...container,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
            gap: "clamp(20px,3vw,40px)",
          }}
        >
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div
                style={{
                  display: "grid",
                  gap: 8,
                  justifyItems: "center",
                  textAlign: "center",
                  borderLeft: i > 0 ? "1px solid var(--border-hairline)" : "none",
                }}
              >
                <CountUp
                  target={s.count}
                  suffix={s.suffix}
                  style={{
                    font: "700 clamp(30px,3.4vw,42px)/1 var(--font-display)",
                    letterSpacing: "-.03em",
                    color: "var(--berth-black)",
                  }}
                />
                <span
                  style={{
                    font: "500 11px/1.4 var(--font-sans)",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--text-meta)",
                  }}
                >
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        style={{
          background: "var(--berth-sand)",
          borderTop: "1px solid var(--border-hairline)",
          padding: "clamp(56px,7vw,96px) clamp(20px,4vw,56px)",
        }}
      >
        <div
          style={{
            ...container,
            display: "grid",
            gap: "clamp(28px,4vw,48px)",
          }}
        >
          <Reveal style={{ display: "grid", gap: 18, alignContent: "start" }}>
            <span
              style={{
                font: "500 11px/1.4 var(--font-sans)",
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "var(--text-meta)",
              }}
            >
              Our Services
            </span>
            <h2
              style={{
                margin: 0,
                font: "700 clamp(28px,3.2vw,40px)/1.08 var(--font-display)",
                letterSpacing: "-.025em",
                color: "var(--berth-black)",
              }}
            >
              Performance Marketing That{" "}
              <Highlight>Moves the Needle</Highlight>
            </h2>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))",
              gap: "34px 0",
            }}
          >
            {services.map((svc, i) => (
              <Reveal
                key={svc.n}
                delay={i * 80}
                style={{
                  padding: "0 clamp(14px,2vw,26px)",
                  display: "grid",
                  gap: 12,
                  alignContent: "start",
                  borderLeft: "1px solid var(--border-hairline)",
                }}
              >
                <span style={{ font: "700 15px/1 var(--font-display)", color: "var(--berth-black)" }}>
                  {svc.n}
                </span>
                <span style={{ display: "block", height: 2, width: 22, background: "var(--berth-lime)" }} />
                <h3
                  style={{
                    margin: 0,
                    font: "700 15px/1.3 var(--font-sans)",
                    letterSpacing: "-.01em",
                    color: "var(--berth-black)",
                  }}
                >
                  {svc.title}
                </h3>
                <p style={{ margin: 0, font: "400 13.5px/1.55 var(--font-sans)", color: "var(--text-body)" }}>
                  {svc.body}
                </p>
                <span style={{ fontSize: 16, color: "var(--berth-black)" }}>→</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section id="work" style={{ background: "var(--berth-black)", padding: "clamp(48px,6vw,80px) clamp(20px,4vw,56px)" }}>
        <div style={{ ...container, display: "grid", gap: 28 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-end", justifyContent: "space-between" }}>
            <div style={{ display: "grid", gap: 12 }}>
              <span
                style={{
                  font: "500 11px/1.4 var(--font-sans)",
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,.6)",
                }}
              >
                Selected Work
              </span>
              <h2
                style={{
                  margin: 0,
                  font: "700 clamp(28px,3.2vw,42px)/1.08 var(--font-display)",
                  letterSpacing: "-.025em",
                  color: "#fff",
                }}
              >
                Selected <Highlight>campaigns.</Highlight>
              </h2>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,235px),1fr))",
              gap: "clamp(12px,1.6vw,20px)",
            }}
          >
            <WorkCard
              mark={<Image src="/images/logos/bybit-white.png" alt="Bybit" width={600} height={206} style={{ height: 24, width: "auto" }} />}
              tagline="From awareness to active traders in record time."
              tile={{ bg: "#17181e", accent: "#f7a600", figure: "12,500", label: "App installs" }}
              stats={[
                { value: "12,500", label: "Installs" },
                { text: "32 Days" },
                { text: "Nigeria" },
              ]}
            />
            <WorkCard
              mark={<Image src="/images/logos/binance.png" alt="Binance" width={800} height={160} style={{ height: 20, width: "auto" }} />}
              tagline="Driving crypto adoption through performance."
              tile={{ bg: "#0b0e11", accent: "#f0b90b", figure: "10K+", label: "App installs" }}
              stats={[{ value: "10K+", label: "Installs" }, { text: "25 Days" }, { text: "MaxVoy" }]}
            />
            <WorkCard
              mark={<Image src="/images/logos/salonpas-white.png" alt="Salonpas" width={640} height={161} style={{ height: 24, width: "auto" }} />}
              tagline="More relief. More people. Across Nigeria."
              tile={{ bg: "#0a3d8f", accent: "#ffffff", figure: "116,000", label: "Ad clicks" }}
              stats={[
                { value: "116,000", label: "Clicks" },
                { text: "Pan-Nigeria" },
                { text: "18–54" },
              ]}
            />
            <WorkCard
              mark={
                <span className="logo-chip">
                  <Image src="/images/logos/honey-banana-connect.png" alt="Honey & Banana Connect" width={154} height={160} style={{ height: 76, width: "auto" }} />
                </span>
              }
              tagline="Turning ad clicks into real conversations."
              tile={{ bg: "#2a1a05", accent: "#ffc53d", figure: "3K", label: "Calls" }}
              stats={[{ value: "3K", label: "Calls" }, { text: "28 Days" }, { text: "Pan-Nigeria" }]}
            />
          </div>
          <details className="more-work">
            <summary className="link-white-hover-lime">
              <span className="more-work-open">View All Work</span>
              <span className="more-work-close">Show Less</span>
              <span className="more-work-arrow" aria-hidden>→</span>
            </summary>
            <div className="more-work-panel">
              <span
                style={{
                  font: "500 11px/1.4 var(--font-sans)",
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,.6)",
                }}
              >
                More brands we&apos;ve grown
              </span>
              <div className="logo-wall">
                {moreBrands.map((b) => (
                  <div key={b.name} className="logo-wall-tile">
                    <Image src={b.src} alt={b.name} width={b.w} height={b.h} style={{ width: "auto", height: b.height }} />
                  </div>
                ))}
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* North star */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "clamp(240px,32vw,380px)", display: "grid" }}>
        <Image
          src="/images/north-star.png"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            alignSelf: "center",
            padding: "clamp(40px,6vw,72px) clamp(20px,4vw,56px)",
            maxWidth: 1240,
            margin: "0 auto",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <Reveal>
            <p
              style={{
                margin: 0,
                maxWidth: "20ch",
                font: "700 clamp(30px,4vw,52px)/1.05 var(--font-display)",
                letterSpacing: "-.03em",
                color: "#fff",
              }}
            >
              A more connected tomorrow.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <span
              style={{
                display: "inline-block",
                marginTop: 20,
                font: "500 11px/1.4 var(--font-sans)",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.65)",
              }}
            >
              Ideas in motion. Impact in market.
            </span>
          </Reveal>
        </div>
      </section>

      {/* Why Berth */}
      <section id="why" style={{ background: "var(--berth-sand)", padding: "clamp(56px,7vw,96px) clamp(20px,4vw,56px)" }}>
        <div
          style={{
            ...container,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))",
            gap: "clamp(28px,3.4vw,48px)",
            alignItems: "start",
          }}
        >
          <Reveal style={{ display: "grid", gap: 18 }}>
            <span
              style={{
                font: "500 11px/1.4 var(--font-sans)",
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "var(--text-meta)",
              }}
            >
              Why Berth
            </span>
            <h2
              style={{
                margin: 0,
                font: "700 clamp(26px,3vw,38px)/1.1 var(--font-display)",
                letterSpacing: "-.025em",
                color: "var(--berth-black)",
              }}
            >
              We Don&apos;t Apply Western Playbooks{" "}
              <Highlight>To African Markets</Highlight>
            </h2>
          </Reveal>
          <Reveal
            delay={80}
            style={{ font: "400 15px/1.65 var(--font-sans)", color: "var(--text-body)", maxWidth: "40ch" }}
          >
            We combine deep local intelligence, real cultural context, and performance expertise to build
            campaigns that resonate, convert, and create lasting value. Born in Lagos, scaling across the
            continent.
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))",
              gap: 0,
              borderLeft: "1px solid var(--border-hairline)",
            }}
          >
            {whyBerth.map((item, i) => (
              <Reveal
                key={item.title}
                delay={120 + i * 60}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto minmax(0,1fr)",
                  gap: 14,
                  padding: i < 2 ? "0 18px 22px" : "22px 18px 0",
                  alignItems: "start",
                  borderLeft: i % 2 === 1 ? "1px solid var(--border-hairline)" : "none",
                  borderTop: i >= 2 ? "1px solid var(--border-hairline)" : "none",
                }}
              >
                <Icon name={item.icon} size={26} />
                <div style={{ display: "grid", gap: 6 }}>
                  <h3 style={{ margin: 0, font: "700 14px/1.25 var(--font-sans)", color: "var(--berth-black)" }}>
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, font: "400 13px/1.5 var(--font-sans)", color: "var(--text-body)" }}>
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section
        id="industries"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--berth-black)",
          padding: "clamp(48px,6vw,76px) clamp(20px,4vw,56px)",
        }}
      >
        <IndustriesSwirl />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            ...container,
            display: "grid",
            gap: "clamp(28px,4vw,48px)",
          }}
        >
          <Reveal style={{ display: "grid", gap: 14 }}>
            <span
              style={{
                font: "500 11px/1.4 var(--font-sans)",
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.6)",
              }}
            >
              Industries
            </span>
            <h2
              style={{
                margin: 0,
                font: "700 clamp(26px,3vw,38px)/1.08 var(--font-display)",
                letterSpacing: "-.025em",
                color: "#fff",
              }}
            >
              Industries <Highlight>We Dominate</Highlight>
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(96px,1fr))" }}>
            {industries.map((ind, i) => (
              <Reveal
                key={ind.label}
                delay={60 + i * 60}
                style={{
                  display: "grid",
                  gap: 10,
                  justifyItems: "center",
                  textAlign: "center",
                  padding: "6px 8px",
                  borderLeft: "1px solid var(--border-on-dark)",
                }}
              >
                <Icon name={ind.icon} size={24} invert />
                <span style={{ font: "500 11.5px/1.35 var(--font-sans)", color: "rgba(255,255,255,.85)" }}>
                  {ind.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        style={{
          background: "var(--berth-sand)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
        }}
      >
        <div
          style={{
            padding: "clamp(48px,6vw,80px) clamp(20px,4vw,56px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))",
            gap: "clamp(24px,3vw,40px)",
            alignItems: "center",
          }}
        >
          <Reveal>
            <h2
              style={{
                margin: 0,
                font: "700 clamp(28px,3.2vw,42px)/1.08 var(--font-display)",
                letterSpacing: "-.025em",
                color: "var(--berth-black)",
              }}
            >
              Let&apos;s Build <Highlight>Your Growth Story</Highlight>
            </h2>
          </Reveal>
          <Reveal
            delay={100}
            style={{
              display: "grid",
              gap: 20,
              justifyItems: "start",
              paddingLeft: "clamp(0px,2vw,28px)",
              borderLeft: "1px solid var(--border-hairline)",
            }}
          >
            <p style={{ margin: 0, font: "400 15px/1.6 var(--font-sans)", color: "var(--text-body)", maxWidth: "34ch" }}>
              We partner with brands serious about growth. If that&apos;s you — let&apos;s talk.
            </p>
            <StartCampaignButton size="md" />
          </Reveal>
        </div>
        <div style={{ position: "relative", minHeight: "clamp(220px,26vw,340px)", overflow: "hidden" }}>
          <Image
            src="/images/contact-portrait.png"
            alt=""
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
            style={{ objectFit: "cover", filter: photoFilter }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg,rgba(11,11,11,.72) 0%,rgba(11,11,11,.3) 46%,rgba(11,11,11,.5) 100%)",
            }}
          />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "var(--berth-black)", padding: "clamp(28px,3.4vw,40px) clamp(20px,4vw,56px)" }}>
        <div
          style={{
            ...container,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "clamp(18px,3vw,40px)",
            justifyContent: "space-between",
          }}
        >
          <Logo mark="wordmark" ink="dark" height={26} />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "clamp(12px,2vw,22px)",
              font: "400 13px/1.4 var(--font-sans)",
              color: "rgba(255,255,255,.72)",
            }}
          >
            <a href={`mailto:${CONTACT_EMAIL}`} className="link-on-dark">
              {CONTACT_EMAIL}
            </a>
            <span style={{ color: "rgba(255,255,255,.28)" }}>|</span>
            <a href="tel:+2348165807581" className="link-on-dark">
              +234 816 580 7581
            </a>
            <span style={{ color: "rgba(255,255,255,.28)" }}>|</span>
            <span>Ikeja, Lagos · South Africa</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <LinkedInIcon size={18} />
            </a>
            <a href={SOCIALS.x} target="_blank" rel="noopener noreferrer" aria-label="X" className="social-icon">
              <XIcon size={18} />
            </a>
            <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
              <InstagramIcon size={18} />
            </a>
            <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon">
              <YouTubeIcon size={18} />
            </a>
          </div>
          <span style={{ font: "400 13px/1.4 var(--font-sans)", color: "rgba(255,255,255,.55)" }}>
            Ideas in motion.
          </span>
        </div>
      </footer>
    </div>
    </CampaignModalProvider>
  );
}
