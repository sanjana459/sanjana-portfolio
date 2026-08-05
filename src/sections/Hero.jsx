import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import SystemGraph from "../components/SystemGraph";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text > *",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: "power2.out" }
    );
    gsap.fromTo(
      ".hero-graph",
      { opacity: 0, scale: 0.96 },
      { opacity: 1, scale: 1, duration: 1.1, delay: 0.3, ease: "power2.out" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden padding-x-lg">
      <div className="hero-layout">
        {/* LEFT: content */}
        <header className="hero-text flex flex-col justify-center z-10">
          <span className="status-chip mb-7 w-fit">
            <span className="status-dot" /> currently open to backend + SDE roles
          </span>

          <h1 className="mono text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight">
            I build backends
            <br />
            that stay <span className="text-signal">boring.</span>
          </h1>

          <p className="text-ink/85 mt-6 text-lg md:text-xl max-w-xl leading-relaxed">
            The good kind of boring. Nothing on fire, nobody paged at 2am, and
            latency you'd have to squint to notice.
          </p>

          <p className="text-muted mt-5 max-w-xl leading-relaxed">
            Hi, I'm Sanjana. I'm a backend engineer with a fresh MS in Computer
            Science from UMass Amherst, and a soft spot for the parts of software
            nobody brags about: the queues, the caches, the APIs quietly holding
            everything up. I like making slow things fast and fragile things
            hard to break.
          </p>

          <div className="mt-8 flex items-center gap-5 flex-wrap">
            <Button text="$ see my work" id="counter" />
            <a
              href="#contact"
              className="mono text-sm text-muted hover:text-signal transition-colors"
            >
              or just say hi →
            </a>
          </div>
        </header>

        {/* RIGHT: architecture graph */}
        <figure className="hero-graph relative z-0">
          <SystemGraph />
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
