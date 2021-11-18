import { Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@iconify/react";

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
  button: {
    border: "2px solid #444045",
    boxShadow: "5px 5px 2px 1px #d5795d",
    fontSize: "20px",
    color: "#444045",
    padding: "20px 30px",
    backgroundColor: "#f6e5df",
    "&:hover": {
      backgroundColor: "#023c40",
      color: "white",
    },
  },
});

export default function Contact(): JSX.Element {
  const classes = useStyles();

  return (
    <Container style={{ marginBottom: "200px" }}>
      <Typography
        id="contact"
        className={classes.headerUnderline}
        component="h2"
        variant="h1"
      >
        Contact
      </Typography>
      <Grid
        style={{ marginTop: "50px" }}
        container
        spacing={4}
        justifyContent="space-evenly"
      >
        <Button
          className={classes.button}
          startIcon={
            <Icon
              fr=""
              icon="brandico:linkedin-rect"
              height="25px"
              style={{ marginRight: "5px" }}
            />
          }
          href="https://www.linkedin.com/in/amandapettenati/"
        >
          LinkedIn
        </Button>
        <Button
          className={classes.button}
          startIcon={
            <Icon
              fr=""
              icon="jam:github"
              height="25px"
              style={{ marginRight: "5px" }}
            />
          }
          href="https://github.com/apettenati"
        >
          GitHub
        </Button>
        <Button
          className={classes.button}
          startIcon={
            <Icon
              fr=""
              icon="carbon:document-download"
              height="25px"
              style={{ marginRight: "5px" }}
            />
          }
          href="https://flamanda.com/resume/amanda-pettenati.pdf"
        >
          Resume
        </Button>
        <Button
          className={classes.button}
          startIcon={
            <Icon
              fr=""
              icon="jam:write"
              height="25px"
              style={{ marginRight: "5px" }}
            />
          }
          href="https://flamanda.com/"
        >
          Blog
        </Button>
        <Button
          className={classes.button}
          startIcon={
            <Icon
              fr=""
              icon="ic:baseline-email"
              height="25px"
              style={{ marginRight: "5px" }}
            />
          }
          href="mailto:amanda@pettenati.net"
        >
          Email
        </Button>
      </Grid>
    </Container>
  );
}
