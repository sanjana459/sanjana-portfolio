/**
 * Monogram — the logo badge for a company / college.
 * If `img` is set, it renders the real logo on a clean light tile.
 * Otherwise it renders a solid brand-coloured mark with the initials, which
 * reads like an intentional wordmark rather than a placeholder box.
 */
const Monogram = ({ initials, color = "#2dd4bf", img, alt = "", size = 56 }) => {
  if (img) {
    // fixed-height white chip, auto width — suits both square marks and wide wordmarks
    return (
      <div
        className="flex-none rounded-xl flex items-center justify-center overflow-hidden"
        style={{
          height: size,
          minWidth: size,
          maxWidth: 190,
          paddingLeft: 10,
          paddingRight: 10,
          background: "#ffffff",
        }}
      >
        <img
          src={img}
          alt={alt}
          className="w-auto object-contain"
          style={{ maxHeight: size * 0.72 }}
        />
      </div>
    );
  }

  return (
    <div
      className="mono flex-none rounded-xl flex items-center justify-center font-bold text-white select-none"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(145deg, ${color}, ${shade(color, -22)})`,
        fontSize: size * 0.34,
        letterSpacing: "0.01em",
        boxShadow: `0 6px 18px ${color}33, inset 0 1px 0 rgba(255,255,255,0.25)`,
      }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
};

// darken a #rrggbb hex by pct (negative = darker)
function shade(hex, pct) {
  const n = parseInt(hex.replace("#", ""), 16);
  const clamp = (v) => Math.max(0, Math.min(255, v));
  const r = clamp((n >> 16) + Math.round((255 * pct) / 100));
  const g = clamp(((n >> 8) & 0xff) + Math.round((255 * pct) / 100));
  const b = clamp((n & 0xff) + Math.round((255 * pct) / 100));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

export default Monogram;
