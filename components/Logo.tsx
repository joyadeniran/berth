type LogoMark = "wordmark" | "lockup" | "monogram";

const FILES: Record<LogoMark, { light: string; dark: string; ratio: number }> = {
  lockup: { light: "logo-lockup.svg", dark: "logo-lockup.svg", ratio: 1253 / 517 },
  wordmark: { light: "logo-dark-ink.svg", dark: "logo.svg", ratio: 1253 / 409 },
  monogram: { light: "monogram.svg", dark: "monogram.svg", ratio: 322 / 402 },
};

export function Logo({
  mark = "wordmark",
  ink = "dark",
  height = 22,
  className,
}: {
  mark?: LogoMark;
  ink?: "light" | "dark";
  height?: number;
  className?: string;
}) {
  const spec = FILES[mark];
  const src = "/assets/" + spec[ink];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Berth"
      className={className}
      style={{ height, width: "auto", display: "block" }}
    />
  );
}
