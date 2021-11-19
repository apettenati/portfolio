import { Typography, BottomNavigation } from "@material-ui/core";

export default function Footer(): JSX.Element {
  return (
    <footer>
      <img
        style={{
          width: "100%",
          marginTop: "-500px",
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
    </footer>
  );
}
