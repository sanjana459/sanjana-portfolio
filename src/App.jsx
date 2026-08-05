import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Beyond from "./sections/Beyond";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <FeatureCards />
    <ShowcaseSection />
    <Experience />
    <TechStack />
    <Testimonials />
    <Beyond />
    <Achievements />
    <Contact />
    <Footer />
  </>
);

export default App;
