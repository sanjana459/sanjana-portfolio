import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo flex items-center gap-2">
          <span className="status-dot" aria-hidden="true" />
          <span>sanjana.gurrappagaru</span>
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }, i) => (
              <li key={name} className="group">
                <a href={link}>
                  <span className="text-signal/70">{String(i + 1).padStart(2, "0")}</span>{" "}
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>$ connect</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
