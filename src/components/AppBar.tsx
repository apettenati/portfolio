import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appbar: {
    backgroundColor: "#6e8778",
  },
  toolbar: {
    paddingLeft: "75px",
    paddingRight: "75px",
  },
  header: {
    flexGrow: 1,
  },
  button: {
    margin: "10px",
  },
});

export default function Projects(): JSX.Element {
  const classes = useStyles();

  function scrollToSection(id: string) {
    console.log(id);
    const section = document.querySelector(id);
    if (section) {
      console.log("in if");
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <AppBar className={classes.appbar} position="sticky">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.header} variant="h6" component="div">
          Amanda Pettenati
        </Typography>
        <Button
          className={classes.button}
          onClick={() => scrollToSection("#about")}
          size="large"
          color="inherit"
        >
          About
        </Button>
        <Button
          className={classes.button}
          onClick={() => scrollToSection("#skills")}
          size="large"
          color="inherit"
        >
          Skills
        </Button>
        <Button
          className={classes.button}
          onClick={() => scrollToSection("#projects")}
          size="large"
          color="inherit"
        >
          Projects
        </Button>
        <Button
          className={classes.button}
          onClick={() => scrollToSection("#contact")}
          size="large"
          color="inherit"
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}
