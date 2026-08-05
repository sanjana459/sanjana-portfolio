import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      gsap.set(numberElement, { innerText: "0" });

      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: { trigger: "#counter", start: "top 85%" },
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    }, counterRef);
  }, []);

  return (
    <div id="counter" ref={counterRef} className="max-w-7xl mx-auto w-full xl:mt-8 mt-24 mb-10">
      <div className="mono text-xs text-faint mb-4 tracking-[0.25em] uppercase">
        // metrics.snapshot
      </div>
      <div className="grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="panel p-6 flex flex-col justify-between min-h-[150px]"
          >
            <div className="flex items-center justify-between">
              <span className="status-dot" />
              <span className="mono text-[10px] text-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div>
              <div className="counter-number mono text-signal text-4xl md:text-5xl font-bold mb-2">
                0{item.suffix}
              </div>
              <div className="text-muted text-sm leading-snug">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
