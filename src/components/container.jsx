import React from "react";
import About from "./sections/about";
import Skills from "./sections/skills";
import Resume from "./sections/resume";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
const Container = () => {
  return (
    <main id="main">
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </main>
  );
};

export default Container;
