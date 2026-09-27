"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { CONTACT_EMAIL, CONTACT_ENDPOINT } from "@/lib/contact";

const BUDGETS = ["Under $1k/mo", "$1k–$5k/mo", "$5k–$20k/mo", "$20k+/mo", "Not sure yet"];

type Status = "idle" | "sending" | "sent" | "error";

const ModalContext = createContext<(() => void) | null>(null);

export function useCampaignModal() {
  const open = useContext(ModalContext);
  if (!open) throw new Error("useCampaignModal must be used within CampaignModalProvider");
  return open;
}

export function StartCampaignButton({
  size = "md",
  variant = "accent",
  trailingArrow = true,
  children = "Start a Campaign",
  className,
}: {
  size?: "sm" | "md";
  variant?: "accent" | "outlineOnDark";
  trailingArrow?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  const open = useCampaignModal();
  const variantClass = variant === "accent" ? "btn-accent" : "btn-outline-on-dark";
  return (
    <button
      type="button"
      onClick={open}
      className={`btn btn-${size} ${variantClass} ${className ?? ""}`}
    >
      {children}
      {trailingArrow ? (
        <span className="btn-arrow" aria-hidden>
          →
        </span>
      ) : null}
    </button>
  );
}

export function CampaignModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);

  const open = useCallback(() => {
    setOpen(true);
    setStatus("idle");
    setError("");
  }, []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    dialogRef.current?.querySelector<HTMLElement>("input:not([name=_honey]),textarea")?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const field = (key: string) => String(data.get(key) || "").trim();
    const name = field("name");
    const company = field("company");
    const payload = {
      name,
      email: field("email"),
      company: company || "—",
      budget: field("budget") || "—",
      message: field("message"),
      _subject: `New campaign request — ${name}${company ? ` (${company})` : ""}`,
      _template: "table",
      _captcha: "false",
      _honey: field("_honey"),
    };
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok || String(body.success) !== "true") {
        setError(`Something went wrong sending your request. Email ${CONTACT_EMAIL} directly instead.`);
        setStatus("error");
        return;
      }
      setStatus("sent");
      form.reset();
    } catch {
      setError("Network error — check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <ModalContext.Provider value={open}>
      {children}
      {isOpen ? (
        <div
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "var(--overlay-scrim)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="campaign-modal-title"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 480,
              maxHeight: "90vh",
              overflowY: "auto",
              background: "var(--surface-card)",
              borderRadius: "var(--radius-sm)",
              boxShadow: "var(--shadow-overlay)",
              padding: "clamp(24px,4vw,40px)",
            }}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "none",
                borderRadius: "var(--radius-pill)",
                cursor: "pointer",
                fontSize: 18,
                lineHeight: 1,
                color: "var(--text-heading)",
              }}
            >
              ×
            </button>

            {status === "sent" ? (
              <div style={{ display: "grid", gap: 10, paddingTop: 8 }}>
                <span style={{ color: "var(--berth-lime-deep)", fontSize: 28 }}>✓</span>
                <h2 style={{ margin: 0, font: "700 24px/1.2 var(--font-display)", color: "var(--berth-black)" }}>
                  Request sent.
                </h2>
                <p style={{ margin: 0, font: "400 14px/1.6 var(--font-sans)", color: "var(--text-body)" }}>
                  We&apos;ll be in touch within one business day.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="btn btn-md btn-accent"
                  style={{ marginTop: 10, justifySelf: "start" }}
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16 }}>
                <div style={{ display: "grid", gap: 6 }}>
                  <span
                    id="campaign-modal-title"
                    style={{
                      font: "500 11px/1.4 var(--font-sans)",
                      letterSpacing: ".18em",
                      textTransform: "uppercase",
                      color: "var(--text-meta)",
                    }}
                  >
                    Start a Campaign
                  </span>
                  <h2 style={{ margin: 0, font: "700 clamp(22px,3vw,28px)/1.15 var(--font-display)", color: "var(--berth-black)" }}>
                    Tell us about your brand.
                  </h2>
                  <p style={{ margin: 0, font: "400 14px/1.55 var(--font-sans)", color: "var(--text-body)" }}>
                    We&apos;ll get back to you within one business day.
                  </p>
                </div>

                <input
                  name="_honey"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: "absolute", left: -9999, width: 1, height: 1, opacity: 0 }}
                />
                <Field label="Name" required>
                  <input name="name" type="text" required autoComplete="name" style={inputStyle} />
                </Field>
                <Field label="Email" required>
                  <input name="email" type="email" required autoComplete="email" style={inputStyle} />
                </Field>
                <Field label="Company">
                  <input name="company" type="text" autoComplete="organization" style={inputStyle} />
                </Field>
                <Field label="Monthly budget">
                  <select name="budget" defaultValue="" style={inputStyle}>
                    <option value="" disabled>
                      Select a range
                    </option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="What are you looking to achieve?" required>
                  <textarea name="message" required rows={4} style={{ ...inputStyle, resize: "vertical" }} />
                </Field>

                {status === "error" ? (
                  <p style={{ margin: 0, font: "500 13px/1.5 var(--font-sans)", color: "var(--status-critical)" }}>
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn btn-md btn-accent"
                  style={{ width: "100%", opacity: status === "sending" ? 0.6 : 1 }}
                >
                  {status === "sending" ? "Sending…" : "Send Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </ModalContext.Provider>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  padding: "10px 14px",
  font: "400 14px/1.4 var(--font-sans)",
  color: "var(--text-heading)",
  background: "var(--berth-white)",
  border: "1px solid var(--border-rule)",
  borderRadius: "var(--radius-sm)",
};

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ font: "500 12px/1.3 var(--font-sans)", color: "var(--text-meta)" }}>
        {label}
        {required ? " *" : ""}
      </span>
      {children}
    </label>
  );
}
