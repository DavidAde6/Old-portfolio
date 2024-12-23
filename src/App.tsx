import "./components/Introduction";
import "./App.css";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";

function App() {
  window.addEventListener("scroll", () => {
    if (window.scrollX > 0) {
      window.scrollTo(0, window.scrollY); // Reset horizontal scroll
    }
  });

  return (
    <>
      <Introduction name="David Adeniyi" title="Software Engineer" />
      <AboutMe />
      <Projects />
      <Skills />
      <Contacts />
    </>
  );
}

export default App;
