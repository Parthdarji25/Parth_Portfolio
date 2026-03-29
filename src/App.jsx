import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import Chatbot from "./components/Chatbot";
import SideInfo from "./components/SideInfo";
import "./index.css";

function App() {
  return (
    <div>
      <CursorGlow />
      <Navbar />
      <SideInfo />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Chatbot />
    </div>
  );
}

export default App;
