const TitleHeader = ({ title, sub, index }) => {
  return (
    <div className="w-full">
      <div className="kicker mb-3 flex items-center gap-3">
        {index && <span className="text-faint">{index}</span>}
        <span>{sub}</span>
      </div>
      <h2 className="mono text-2xl md:text-4xl font-semibold text-ink">
        {title}
      </h2>
      <div className="mt-6 h-px w-full" style={{ background: "var(--color-line)" }} />
    </div>
  );
};

export default TitleHeader;
