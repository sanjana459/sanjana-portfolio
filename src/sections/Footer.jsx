import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>
            <span className="text-signal">●</span> all systems operational
          </p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
              aria-label={socialImg.name}
            >
              <img src={socialImg.imgPath} alt={socialImg.name} className="size-5" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Sanjana Reddy Gurrappagaru
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
