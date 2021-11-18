import Projects from "./Projects";
import Skills from "./Skills";
import AppBar from "./AppBar";
import About from "./About";
import Contact from "./Contact";
import { Typography, BottomNavigation } from "@material-ui/core";

export default function App(): JSX.Element {
  return (
    <div>
      <AppBar />
      <main style={{ marginTop: "75px" }}>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <img
        style={{
          width: "100%",
          marginTop: "-600px",
          position: "sticky",
          zIndex: -2,
          mixBlendMode: "hard-light",
        }}
        src="/images/background.jpg"
      ></img>
      <BottomNavigation
        style={{
          backgroundColor: "#6e8778",
          width: "100%",
          color: "white",
          margin: "-5px 0",
          alignItems: "center",
        }}
      >
        <Typography>Created by Amanda Pettenati © 2021</Typography>
      </BottomNavigation>
    </div>
  );
}
