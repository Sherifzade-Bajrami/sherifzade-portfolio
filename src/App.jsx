import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import IntroLoader from "./components/IntroLoader";
import TechMarquee from "./components/TechMarquee";

import About from "./sections/About";
import Expertise from "./sections/Expertise";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    return sessionStorage.getItem("portfolio-intro-seen") !== "true";
  });

  useEffect(() => {
    if (!showIntro) return;

    // Mark intro as seen for this browser session
    sessionStorage.setItem("portfolio-intro-seen", "true");

    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShowIntro(false);
      document.body.style.overflow = "";
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && <IntroLoader />}
      </AnimatePresence>

      <main className="min-h-screen bg-[#090b0e]">
        <Navbar />

        <Hero startAnimation={!showIntro} />
        <TechMarquee />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Contact />

        <Footer />
      </main>
    </>
  );
}

export default App;
