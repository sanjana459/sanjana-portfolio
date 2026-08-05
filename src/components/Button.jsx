/**
 * CTA button. When an `id` is passed, it smooth-scrolls to the metrics
 * ("#counter") block with a small top offset.
 */

const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById("counter");
        if (target && id) {
          const offset = window.innerHeight * 0.15;
          const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      href="#counter"
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <span className="text">{text}</span>
        <span className="arrow" aria-hidden="true">↓</span>
      </div>
    </a>
  );
};

export default Button;
