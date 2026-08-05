import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { achievements } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".achievement-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: { trigger: "#achievements", start: "top 80%" },
      }
    );
  });

  return (
    <section id="achievements" className="flex-center section-padding">
      <div className="w-full max-w-7xl mx-auto md:px-2">
        <TitleHeader
          title="A couple of proud moments"
          sub="awards_&_recognition"
          index="06"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {achievements.map((a) => (
            <div
              key={a.tag}
              className="achievement-card panel p-7 flex gap-5 items-start overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 h-1 w-full"
                style={{ background: a.accent, opacity: 0.8 }}
              />
              <div
                className="size-14 flex-none flex items-center justify-center rounded-xl text-3xl border mt-1"
                style={{ borderColor: `${a.accent}55`, background: `${a.accent}14` }}
              >
                <span aria-hidden="true">{a.icon}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="mono text-xs" style={{ color: a.accent }}>
                  {a.tag}
                </span>
                <h3 className="text-ink text-lg md:text-xl font-semibold leading-snug">
                  {a.title}
                </h3>
                <span className="mono text-xs text-faint">{a.place}</span>
                <p className="text-muted leading-relaxed mt-1">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
