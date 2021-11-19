import Projects from "./Projects";
import Skills from "./Skills";
import AppBar from "./AppBar";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App(): JSX.Element {
  return (
    <>
      <AppBar />
      <main style={{ marginTop: "75px" }}>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
