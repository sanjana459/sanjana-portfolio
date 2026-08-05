import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TitleHeader from "../components/TitleHeader";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project, cardRef }) => (
  <div ref={cardRef} className="panel p-7 md:p-8 flex flex-col gap-5 h-full">
    {/* status line */}
    <div className="flex items-center justify-between mono text-xs">
      <span className="text-faint">{project.id}</span>
      <span className="status-chip">
        <span className="status-dot" /> {project.metric}
      </span>
    </div>

    <div className="flex flex-col gap-2">
      <span className="mono text-xs text-signal">{project.stack}</span>
      <h3 className="text-ink text-xl md:text-2xl font-semibold leading-snug">
        {project.name}
      </h3>
      <span className="mono text-xs text-faint">{project.org}</span>
    </div>

    <p className="text-ink/80 leading-relaxed">{project.blurb}</p>

    <ul className="flex flex-col gap-3">
      {project.highlights.map((h, i) => (
        <li key={i} className="flex gap-3 text-muted leading-relaxed">
          <span className="mono text-signal/70 shrink-0 mt-1 text-xs">›</span>
          <span>{h}</span>
        </li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2 mt-auto pt-2">
      {project.tags.map((t) => (
        <span key={t} className="tag">
          {t}
        </span>
      ))}
    </div>
  </div>
);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.15 * index,
          scrollTrigger: { trigger: card, start: "top bottom-=80" },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase section-padding">
      <div className="max-w-7xl mx-auto w-full">
        <TitleHeader
          title="A couple of things I'm proud of"
          sub="selected_work"
          index="01"
        />

        <p className="text-muted mt-6 max-w-2xl leading-relaxed">
          Two graduate projects where the hard part wasn't writing the code, it
          was making sure the code was actually right when the network started
          misbehaving.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              cardRef={(el) => (cardsRef.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
