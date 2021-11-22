import { Typography, BottomNavigation } from "@material-ui/core";
import { useStyles } from "../assets/styles";

export default function Footer(): JSX.Element {
  const classes = useStyles();

  return (
    <footer>
      <img className={classes.footerImg} src="./images/background.jpg"></img>
      <BottomNavigation className={classes.footerNav}>
        <Typography variant="body2">
          Created by Amanda Pettenati © 2021
        </Typography>
      </BottomNavigation>
    </footer>
  );
}
