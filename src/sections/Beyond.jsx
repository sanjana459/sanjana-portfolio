import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { beyondItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Beyond = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".beyond-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: { trigger: "#beyond", start: "top 80%" },
      }
    );
  });

  return (
    <section id="beyond" className="flex-center section-padding">
      <div className="w-full max-w-7xl mx-auto md:px-2">
        <TitleHeader
          title="Background processes"
          sub="beyond_the_terminal"
          index="05"
        />

        <p className="text-muted mt-6 max-w-2xl leading-relaxed">
          The threads that keep running when I'm off the clock. Honestly, this
          is where most of my patience for debugging comes from.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {beyondItems.map((item) => (
            <div key={item.tag} className="beyond-card panel p-7 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl" aria-hidden="true">
                  {item.emoji}
                </span>
                <span className="status-dot" />
              </div>
              <span className="mono text-xs text-signal">{item.tag}</span>
              <h3 className="text-ink text-lg font-semibold">{item.title}</h3>
              <p className="text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beyond;
