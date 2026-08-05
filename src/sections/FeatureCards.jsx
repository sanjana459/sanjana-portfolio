import { abilities } from "../constants";

const accents = ["#f5b544", "#2dd4bf", "#5b9bd5"];

const FeatureCards = () => (
  <section className="w-full padding-x-lg mt-24 md:mt-32">
    <div className="max-w-7xl mx-auto">
      <div className="kicker mb-8 flex items-center gap-3">
        <span className="text-faint">//</span>
        <span>how i operate</span>
      </div>
      <div className="grid-3-cols">
        {abilities.map(({ icon, title, desc }, i) => (
          <div key={title} className="panel p-7 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div
                className="size-12 flex items-center justify-center rounded-lg text-2xl border"
                style={{ borderColor: `${accents[i]}55`, background: `${accents[i]}14` }}
              >
                <span aria-hidden="true">{icon}</span>
              </div>
              <span className="mono text-xs text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-ink text-xl font-semibold">{title}</h3>
            <p className="text-muted leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureCards;
