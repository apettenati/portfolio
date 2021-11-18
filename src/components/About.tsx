import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  headerUnderline: {
    // prevent navbar from covering start of component when clicking nav links
    scrollMarginTop: "100px",
    marginBottom: "50px",
    fontWeight: "bold",
    position: "relative",
    color: "#444045",
    // create colored offset underline under headers
    "&:before": {
      content: "no-open-quote",
      position: "absolute",
      // left: "-5%",
      bottom: "16px",
      width: "40%",
      height: "14px",
      background: "#d5795d",
      backgroundColor: "#d5795d",
      transform: "skew(-12deg)",
      // borderRadius: "2px",
      // boxShadow: "0px 0px 2px 1px #d5795d",
      zIndex: "-1",
    },
  },
  border: {
    borderRadius: "4px",
    border: "2px solid #444045",
    boxShadow: "5px 5px 2px 1px #d5795d",
    // backgroundColor: "#FBF2EF",
    // backgroundColor: "#FeFcbF",
    // backgroundColor: "#f8f8ff",
    backgroundColor: "#fefcf9",
  },
  textPadding: {
    padding: "15px",
  },
  image: {
    maxWidth: "100%",
    height: "100%",
    // width: "700px",
  },
});

export default function About(): JSX.Element {
  const classes = useStyles();

  return (
    <Container style={{ marginBottom: "100px" }}>
      <Typography
        id="about"
        className={classes.headerUnderline}
        component="h2"
        variant="h1"
      >
        About
      </Typography>
      <Grid container className={classes.border}>
        <Grid className={classes.textPadding} item xs={5}>
          <Typography component="p" variant="body1">
            Hi! I'm a self-taught full-stack developer. I embarked on this
            journey after a decade in the Finance industry. After a successful
            career in management, I decided solving complex problems as an
            independent contributor was more in line with my interests. I have
            had a blast teaching myself the ins-and-outs of web development over
            the last year and am ready to join a company who appreciates my
            self-motivation.
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <img className={classes.image} src="/images/hike.jpg"></img>
        </Grid>
      </Grid>
    </Container>
  );
}
