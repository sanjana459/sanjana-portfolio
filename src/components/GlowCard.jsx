import { useRef } from "react";

const GlowCard = ({ card, index, children }) => {
  const cardRefs = useRef([]);

  // rotate the conic glow toward the cursor
  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card panel timeline-card p-7 mb-5 break-inside-avoid-column"
    >
      <div className="glow" />
      <div className="flex items-center gap-2 mb-4 mono text-xs text-signal">
        <span className="status-dot" /> reference · verified
      </div>
      <p className="text-ink/85 leading-relaxed mb-6">{card.review}</p>
      {children}
    </div>
  );
};

export default GlowCard;
