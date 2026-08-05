import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { techLayers, techStackImgs } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".layer-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: { trigger: "#skills", start: "top 75%" },
      }
    );
  });

  return (
    <section id="skills" className="flex-center section-padding">
      <div className="w-full max-w-7xl mx-auto md:px-2">
        <TitleHeader title="The tools I reach for" sub="tech_stack" index="03" />

        <p className="text-muted mt-6 max-w-2xl leading-relaxed">
          Sorted by where they live in the stack, roughly top to bottom. No logos
          doing jumping jacks, just the things I actually work with.
        </p>

        {/* colourful logo strip */}
        <div className="flex flex-wrap gap-3 mt-8">
          {techStackImgs.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-2.5 rounded-lg border px-3.5 py-2 bg-surface"
              style={{ borderColor: "var(--color-line)" }}
            >
              <img src={t.imgPath} alt={t.name} className="w-6 h-6 object-contain" />
              <span className="mono text-sm text-ink">{t.name}</span>
            </div>
          ))}
        </div>

        {/* layer cards, each with its own accent colour */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">
          {techLayers.map((layer) => (
            <div
              key={layer.tag}
              className="layer-card panel p-6 flex flex-col gap-4 overflow-hidden"
            >
              {/* accent bar */}
              <div
                className="absolute top-0 left-0 h-1 w-full"
                style={{ background: layer.accent, opacity: 0.8 }}
              />
              <div className="flex items-center justify-between pt-1">
                <span className="mono text-xs" style={{ color: layer.accent }}>
                  layer/{layer.tag}
                </span>
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: layer.accent }}
                />
              </div>
              <h3 className="mono text-ink text-lg font-semibold">{layer.layer}</h3>
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="mono text-xs rounded-md px-2.5 py-1"
                    style={{
                      color: "var(--color-muted)",
                      border: `1px solid ${layer.accent}33`,
                      background: `${layer.accent}0f`,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
