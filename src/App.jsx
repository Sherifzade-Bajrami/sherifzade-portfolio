import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import About from "./sections/About";
import Expertise from "./sections/Expertise";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";

function App() {
  return (
    <main className="min-h-screen bg-[#090b0e]">
      <Navbar />

      <Hero />

      <About />

      <Expertise />

      <Projects />
      
      <Experience />
    </main>
  );
}

export default App;