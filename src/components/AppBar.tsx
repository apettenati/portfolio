import { Grid, AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import data from "../assets/projects.json";
import { useStyles } from "../assets/styles";

export default function Projects(): JSX.Element {
  const classes = useStyles();
  const headers = Object.keys(data);

  function scrollToSection(id: string) {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  function HeaderLink({ header }: { header: string }) {
    return (
      <Grid item>
        <Button
          className={classes.appbarButton}
          onClick={() => scrollToSection(`#${header}`)}
          color="inherit"
        >
          {header}
        </Button>
      </Grid>
    );
  }

  return (
    <AppBar className={classes.appbar} position="sticky">
      <Toolbar>
        <Typography className={classes.header} variant="h6" component="div">
          Amanda Pettenati
        </Typography>
        <Grid justifyContent="flex-end" container>
          {headers.map((header, index) => (
            <HeaderLink key={index} header={header} />
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
