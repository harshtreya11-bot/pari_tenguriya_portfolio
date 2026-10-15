import React, { useState } from "react";
import Navbar from "./navbar/navbar";
import Hero from "./hero/hero";
import About from "./about/about";
import Education from "./education/education";
import Training from "./training/training";
import Experience from "./experience/experience";
import Projects from "./projects/projects";
import Skills from "./skills/skills";
import Certifications from "./certifications/certifications";
import Achievements from "./achievements/achievements";
import Work from "./work/work";
import Contact from "./contact/contact";
import SectionReveal from "./components/SectionReveal";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="portfolio-app">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {/* Hero participates in the depth reveal — starts active and recedes as next section enters */}
        <SectionReveal isHero={true}>
          <Hero />
        </SectionReveal>

        <SectionReveal delay="0ms">
          <About />
        </SectionReveal>

        <SectionReveal delay="0ms">
          <Education />
        </SectionReveal>

        <SectionReveal delay="0ms">
          <Training />
        </SectionReveal>

        <SectionReveal delay="0ms">
          <Experience />
        </SectionReveal>

        <SectionReveal delay="0ms">
          <Projects />
        </SectionReveal>

        <SectionReveal delay="0ms">
          <Skills />
        </SectionReveal>

        <SectionReveal delay="0ms">
          <Certifications />
        </SectionReveal>

        <SectionReveal delay="0ms">
          <Achievements />
        </SectionReveal>

        <SectionReveal delay="0ms">
          <Work />
        </SectionReveal>

        <SectionReveal delay="0ms">
          <Contact />
        </SectionReveal>
      </main>
    </div>
  );
}

export default App;
