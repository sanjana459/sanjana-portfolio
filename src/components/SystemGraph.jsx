/**
 * SystemGraph — the hero visual, framed like a little monitoring widget.
 * A client request hits a FastAPI service that fans out to a Redis cache, a
 * Kafka queue and a Postgres database. Each edge has a flowing pulse (CSS) plus
 * a travelling request packet (SVG animateMotion). Cheap, no 3D, no libraries.
 */

const Node = ({ x, y, w = 132, h = 66, label, name, dot, accent }) => (
  <g transform={`translate(${x}, ${y})`}>
    <rect
      width={w}
      height={h}
      rx="12"
      fill="#0e141b"
      stroke={accent ? "#2dd4bf" : "#26333f"}
      strokeWidth="1.4"
    />
    {accent && (
      <rect className="node-ring" width={w} height={h} rx="12" fill="none" stroke="#2dd4bf" strokeWidth="1.4" />
    )}
    <circle cx="16" cy="18" r="4" fill={dot} />
    <text x="30" y="22" fill={dot} fontSize="10.5" fontFamily="JetBrains Mono, monospace" letterSpacing="0.5">
      {label}
    </text>
    <text x="16" y="48" fill="#e8eef4" fontSize="17" fontFamily="JetBrains Mono, monospace" fontWeight="600">
      {name}
    </text>
  </g>
);

const EdgeLabel = ({ x, y, children }) => (
  <text
    x={x}
    y={y}
    fill="#5c6b7a"
    fontSize="9.5"
    fontFamily="JetBrains Mono, monospace"
    textAnchor="middle"
    letterSpacing="0.5"
  >
    {children}
  </text>
);

const Packet = ({ path, delay = 0, color = "#2dd4bf" }) => (
  <circle r="3.2" fill={color}>
    <animateMotion dur="3.4s" begin={`${delay}s`} repeatCount="indefinite" path={path} />
  </circle>
);

// edge paths (kept in one place so the stroke and the packet share them)
const P1 = "M140,183 L200,183";
const P2 = "M332,176 C368,160 362,74 392,72";
const P3 = "M332,183 L392,183";
const P4 = "M332,190 C368,214 362,300 392,302";

const SystemGraph = () => {
  return (
    <div className="panel overflow-hidden">
      {/* widget header */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b"
        style={{ borderColor: "var(--color-line)" }}
      >
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full" style={{ background: "#f2708a" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#f5b544" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#2dd4bf" }} />
          <span className="mono text-xs text-muted ml-2">system.topology</span>
        </div>
        <span className="status-chip">
          <span className="status-dot" /> live
        </span>
      </div>

      {/* diagram */}
      <svg
        viewBox="0 0 520 360"
        className="w-full h-auto"
        role="img"
        aria-label="Architecture diagram: a client request flows through a FastAPI service to a Redis cache, a Kafka queue and a Postgres database."
      >
        {/* base tracks */}
        <path className="flow-line" d={P1} />
        <path className="flow-line" d={P2} />
        <path className="flow-line" d={P3} />
        <path className="flow-line" d={P4} />

        {/* animated dash pulses */}
        <path className="flow-pulse" d={P1} />
        <path className="flow-pulse" style={{ animationDelay: "0.6s" }} d={P2} />
        <path className="flow-pulse" style={{ animationDelay: "1.2s" }} d={P3} />
        <path className="flow-pulse" style={{ animationDelay: "1.8s" }} d={P4} />

        {/* travelling request packets */}
        <Packet path={P1} delay={0} />
        <Packet path={P2} delay={0.6} color="#e5484d" />
        <Packet path={P3} delay={1.2} color="#a78bfa" />
        <Packet path={P4} delay={1.8} color="#5b9bd5" />

        {/* edge labels */}
        <EdgeLabel x={170} y={173}>request</EdgeLabel>
        <EdgeLabel x={372} y={120}>cache</EdgeLabel>
        <EdgeLabel x={362} y={174}>publish</EdgeLabel>
        <EdgeLabel x={372} y={255}>query</EdgeLabel>

        {/* nodes */}
        <Node x="8" y="150" w="132" label="ingress" name="client" dot="#2dd4bf" />
        <Node x="200" y="150" w="132" label="service" name="FastAPI" dot="#2dd4bf" accent />
        <Node x="392" y="42" w="120" h="60" label="cache" name="Redis" dot="#e5484d" />
        <Node x="392" y="153" w="120" h="60" label="queue" name="Kafka" dot="#a78bfa" />
        <Node x="392" y="264" w="120" h="60" label="database" name="Postgres" dot="#5b9bd5" />
      </svg>

      {/* legend */}
      <div
        className="flex items-center gap-5 px-4 py-2.5 border-t mono text-xs text-faint"
        style={{ borderColor: "var(--color-line)" }}
      >
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ background: "#2dd4bf" }} /> request
        </span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ background: "#5b9bd5" }} /> response
        </span>
        <span className="ml-auto">p99 · 92ms</span>
      </div>
    </div>
  );
};

export default SystemGraph;
