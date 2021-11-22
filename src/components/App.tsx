import Projects from "./Projects";
import Skills from "./Skills";
import AppBar from "./AppBar";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../assets/theme";

export default function App(): JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar />
        <main style={{ marginTop: "75px" }}>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
