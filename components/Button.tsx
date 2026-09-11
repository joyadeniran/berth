type ButtonProps = {
  href: string;
  variant: "accent" | "outlineOnDark";
  size?: "sm" | "md";
  trailingArrow?: boolean;
  children: React.ReactNode;
  className?: string;
};

const VARIANT_CLASS: Record<ButtonProps["variant"], string> = {
  accent: "btn-accent",
  outlineOnDark: "btn-outline-on-dark",
};

export function Button({
  href,
  variant,
  size = "md",
  trailingArrow = false,
  children,
  className,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`btn btn-${size} ${VARIANT_CLASS[variant]} ${className ?? ""}`}
    >
      {children}
      {trailingArrow ? (
        <span className="btn-arrow" aria-hidden>
          →
        </span>
      ) : null}
    </a>
  );
}
