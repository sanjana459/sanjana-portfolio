/**
 * ProjectVisual — a restrained "console output" cover for each project.
 * These are systems projects with no UI, so instead of stock art each card
 * shows a short, credible run of the project's own test / benchmark output.
 */

const CONSOLES = {
  "proj-01": {
    label: "determina · replay",
    lines: [
      { prompt: true, text: "determina replay --seeds 10000" },
      { ok: true, text: "10,000 / 10,000 traces byte-identical" },
      { ok: true, text: "30 / 30 seeded violations caught" },
      { muted: true, text: "elapsed 41.8s · 0 flakes" },
    ],
  },
  "proj-02": {
    label: "bulkhead · bench",
    lines: [
      { prompt: true, text: "bulkhead bench --tenants 5 --stress" },
      { ok: true, text: "200 / 200 exhaustion tests contained" },
      { ok: true, text: "cpu fairness within 9.2% of target" },
      { muted: true, text: "host failures: 0" },
    ],
  },
};

const ProjectVisual = ({ id }) => {
  const data = CONSOLES[id] || CONSOLES["proj-01"];
  return (
    <div className="proj-console">
      <div className="proj-console-bar">
        <span className="dot" style={{ background: "#f2708a" }} />
        <span className="dot" style={{ background: "#f5b544" }} />
        <span className="dot" style={{ background: "#2dd4bf" }} />
        <span className="proj-console-label">{data.label}</span>
      </div>
      <div className="proj-console-body">
        {data.lines.map((l, i) => (
          <div key={i} className="proj-console-line">
            {l.prompt && <span className="prompt">$</span>}
            {l.ok && <span className="ok">✓</span>}
            <span className={l.muted ? "muted" : l.ok ? "" : "cmd"}>{l.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectVisual;
