import About from "@/components/About";
import Contact from "@/components/Contact";

import IntroBox from "@/components/IntroBox";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className=" scroll-smooth">
      <div id="home" className="pt-24 pb-14 bg-slate-100">
        <IntroBox />
      </div>

      <div id="about" className="pt-24 pb-14">
        <About />
      </div>

      <div id="skills" className="pt-24 pb-14 bg-slate-100">
        <Skills />
      </div>

      <div
        id="projects"
        className="pt-24 pb-14 h-auto flex flex-wrap justify-center items-center"
      >
        <Projects />
      </div>

      <div id="contact" className="pt-24 pb-14 bg-slate-100">
        <Contact />
      </div>
    </div>
  );
}
