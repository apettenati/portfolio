import { Container, Typography } from "@material-ui/core";
import { useStyles } from "../assets/styles";

export default function Section(props: any): JSX.Element {
  const classes = useStyles();

  return (
    <Container className={classes.section}>
      <Typography
        id="contact"
        className={classes.headerUnderline}
        component="h2"
        variant="h1"
      >
        {props.header}
      </Typography>
      {props.children}
    </Container>
  );
}
