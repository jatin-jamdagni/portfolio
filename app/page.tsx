import About from "@/components/About";
import Contact from "@/components/Contact";
import IntroBox from "@/components/IntroBox";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="">

      <div id="home" className="top-0 pt-24">
        <IntroBox />
      </div>

      <div id="about" className="top-0 pt-24">
        <About />
      </div>

      <div id="projects" className="top-0 pt-24">
        <Projects />
      </div>

      <div id="contact" className="top-0 pt-24">
        <Contact />
      </div>

      <div>

      </div>
    </div>
  );
}
