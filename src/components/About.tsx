import { about } from "../assets/projects.json";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "../assets/styles";
import Section from "./Section";

export default function About(): JSX.Element {
  const classes = useStyles();

  return (
    <Section header="About">
      <Grid container className={classes.border}>
        <Grid item xs={12} lg={5}>
          <Typography
            className={classes.aboutText}
            component="p"
            variant="body1"
          >
            {about}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={7}>
          <img className={classes.image} src="./images/hike.jpg"></img>
        </Grid>
      </Grid>
    </Section>
  );
}
