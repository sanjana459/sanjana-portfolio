import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import Monogram from "../components/Monogram";

gsap.registerPlugin(ScrollTrigger);

const statusStyles = {
  running: "text-signal border-signal/40 bg-signal/10",
  graduated: "text-signal border-signal/40 bg-signal/10",
  shipped: "text-muted border-line bg-white/5",
  "in progress": "text-amber border-amber/40 bg-amber/10",
};

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".log-entry").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: card, start: "top 85%" },
      });
    });
  }, []);

  return (
    <section id="experience" className="flex-center section-padding">
      <div className="w-full max-w-7xl mx-auto md:px-2">
        <TitleHeader
          title="The deployment log"
          sub="where_i've_shipped"
          index="02"
        />

        <div className="relative mt-14 pl-8 md:pl-10">
          {/* vertical rail */}
          <div className="timeline-rail" />

          <div className="flex flex-col gap-10 md:gap-14">
            {expCards.map((card) => (
              <div key={card.node} className="log-entry relative">
                {/* node dot */}
                <div className="timeline-node" style={{ top: "6px", left: "-33px" }} />

                <div className="panel p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    {card.logo && (
                      <Monogram
                        initials={card.logo.initials}
                        color={card.logo.color}
                        img={card.logo.img}
                        alt={card.company}
                        size={64}
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      {/* node + status row */}
                      <div className="flex flex-wrap items-center gap-3 justify-between mb-2">
                        <span className="mono text-xs text-signal">{card.node}</span>
                        <span
                          className={`mono text-xs rounded-full px-3 py-1 border ${
                            statusStyles[card.status] || statusStyles.shipped
                          }`}
                        >
                          ● {card.status}
                        </span>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-1">
                        <h3 className="text-ink text-xl md:text-2xl font-semibold">
                          {card.title}
                          <span className="text-muted font-normal"> · {card.company}</span>
                        </h3>
                        <span className="mono text-sm text-faint whitespace-nowrap">
                          {card.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted leading-relaxed mt-4 mb-5 max-w-3xl">
                    {card.review}
                  </p>

                  <ul className="flex flex-col gap-3">
                    {card.responsibilities.map((r, i) => (
                      <li key={i} className="flex gap-3 text-ink/85 leading-relaxed">
                        <span className="mono text-signal/70 shrink-0 mt-1 text-xs">
                          ›
                        </span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
