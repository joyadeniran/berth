import {
  Globe,
  Zap,
  TrendingUp,
  Layers,
  Landmark,
  Bitcoin,
  Gamepad2,
  HeartPulse,
  ShoppingBag,
  Smartphone,
  Rocket,
  type LucideProps,
} from "lucide-react";

const ICONS = {
  globe: Globe,
  zap: Zap,
  "trending-up": TrendingUp,
  layers: Layers,
  landmark: Landmark,
  bitcoin: Bitcoin,
  "gamepad-2": Gamepad2,
  "heart-pulse": HeartPulse,
  "shopping-bag": ShoppingBag,
  smartphone: Smartphone,
  rocket: Rocket,
} satisfies Record<string, React.ComponentType<LucideProps>>;

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  size = 20,
  invert = false,
  style,
  className,
}: {
  name: IconName;
  size?: number;
  invert?: boolean;
  style?: React.CSSProperties;
  className?: string;
}) {
  const Glyph = ICONS[name];
  return (
    <Glyph
      size={size}
      strokeWidth={1.5}
      color={invert ? "#fff" : "var(--berth-black)"}
      style={{ display: "inline-block", flex: "0 0 auto", ...style }}
      className={className}
      aria-hidden
    />
  );
}
