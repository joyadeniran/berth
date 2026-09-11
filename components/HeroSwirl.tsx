const PATH = "M 210 900 C 640 780 690 470 830 320 C 960 180 1010 60 1030 -80";

export function HeroSwirl() {
  return (
    <svg
      viewBox="0 0 1440 820"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 3,
        pointerEvents: "none",
      }}
    >
      <path
        d={PATH}
        fill="none"
        stroke="var(--berth-lime)"
        strokeWidth="14"
        strokeLinecap="round"
        opacity=".2"
        style={{ filter: "blur(14px)" }}
      />
      <path
        d={PATH}
        fill="none"
        stroke="var(--berth-lime)"
        strokeWidth="3.5"
        strokeLinecap="round"
        style={{
          strokeDasharray: 1500,
          strokeDashoffset: 1500,
          animation: "berth-draw 2.6s cubic-bezier(.2,.85,.15,1) .4s forwards",
        }}
      />
      <circle
        r="5.5"
        fill="var(--berth-lime)"
        style={{
          offsetPath: `path('${PATH}')`,
          offsetDistance: "0%",
          animation: "berth-glide 6s linear 3s infinite",
          filter: "drop-shadow(0 0 10px rgba(198,255,61,.9))",
        }}
      />
    </svg>
  );
}
