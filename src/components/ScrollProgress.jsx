import { useEffect, useState } from "react";

/**
 * A thin progress bar pinned to the top of the viewport that fills as you
 * scroll the page. Reads like a request slowly completing. Cheap: one
 * passive scroll listener, no layout thrash.
 */
const ScrollProgress = () => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress-bar" style={{ width: `${pct}%` }} />
    </div>
  );
};

export default ScrollProgress;
