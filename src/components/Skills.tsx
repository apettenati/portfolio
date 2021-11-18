import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@iconify/react";

const useStyles = makeStyles({
  skillText: {
    marginTop: "5px",
    fontWeight: 500,
  },
  root: {
    // background: "#eec9be",
    // background: "#f2d7ce",
    background: "#fbf2ef",
    // background: "white",
    // boxShadow: "5px 5px 5px gray",
    border: "2px solid #444045",
    boxShadow: "5px 5px 2px 1px #d5795d",
    padding: "20px",
    margin: "10px",
  },
  techUnderline: {
    margin: "10px",
    marginBottom: "20px",
    fontWeight: "bold",
    position: "relative",
    color: "#444045",
    // create colored offset underline under headers
    "&:before": {
      content: "no-open-quote",
      position: "absolute",
      // left: "-5%",
      bottom: "6px",
      width: "15%",
      height: "4px",
      background: "#d5795d",
      backgroundColor: "#d5795d",
      transform: "skew(-12deg)",
      // borderRadius: "2px",
      // boxShadow: "0px 0px 2px 1px #d5795d",
      zIndex: "-1",
    },
  },
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
  grid: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
  },
});

export default function Skills(): JSX.Element {
  const classes = useStyles();

  return (
    <Container style={{ marginBottom: "100px" }}>
      <Typography
        id="skills"
        className={classes.headerUnderline}
        component="h2"
        variant="h1"
      >
        Skills
      </Typography>
      <Grid container spacing={4} alignItems="stretch">
        <Grid item xs={12} lg={4}>
          <Typography
            className={classes.techUnderline}
            variant="h4"
            component="h3"
          >
            Languages
          </Typography>
          <Card className={classes.root}>
            <CardContent>
              <Grid container spacing={6} justifyContent="space-evenly">
                <Grid item>
                  <Grid item className={classes.grid}>
                    <Icon fr="" icon="logos:javascript" height="50px" />
                    <Typography
                      className={classes.skillText}
                      variant="body1"
                      component="p"
                    >
                      JavaScript
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item className={classes.grid}>
                  <Icon fr="" icon="logos:typescript-icon" height="50px" />
                  <Typography
                    className={classes.skillText}
                    variant="body1"
                    component="p"
                  >
                    TypeScript
                  </Typography>
                </Grid>
                <Grid item className={classes.grid}>
                  <Icon
                    fr=""
                    icon="vscode-icons:file-type-html"
                    height="50px"
                  />
                  <Typography
                    className={classes.skillText}
                    variant="body1"
                    component="p"
                  >
                    HTML
                  </Typography>
                </Grid>
                <Grid item className={classes.grid}>
                  <Icon fr="" icon="vscode-icons:file-type-css" height="50px" />
                  <Typography
                    className={classes.skillText}
                    variant="body1"
                    component="p"
                  >
                    CSS
                  </Typography>
                </Grid>
                <Grid item className={classes.grid}>
                  <Icon fr="" icon="logos:python" height="50px" />
                  <Typography
                    className={classes.skillText}
                    variant="body1"
                    component="p"
                  >
                    Python
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} lg={4}>
          <Typography
            className={classes.techUnderline}
            variant="h4"
            component="h3"
          >
            Frameworks & Libraries
          </Typography>
          <Card className={classes.root}>
            <CardContent>
              <Grid container spacing={6} justifyContent="space-evenly">
                <Grid item>
                  <Grid item className={classes.grid}>
                    <Icon fr="" icon="logos:react" height="50px" />
                    <Typography
                      className={classes.skillText}
                      variant="body1"
                      component="p"
                    >
                      React
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item className={classes.grid}>
                  <Icon
                    fr=""
                    icon="vscode-icons:file-type-node"
                    height="50px"
                  />
                  <Typography
                    className={classes.skillText}
                    variant="body1"
                    component="p"
                  >
                    Node.js
                  </Typography>
                </Grid>
                <Grid item className={classes.grid}>
                  <Icon fr="" icon="simple-icons:express" height="50px" />
                  <Typography
                    className={classes.skillText}
                    variant="body1"
                    component="p"
                  >
                    Express.js
                  </Typography>
                </Grid>
                <Grid item className={classes.grid}>
                  <Icon fr="" icon="logos:material-ui" height="50px" />
                  <Typography
                    className={classes.skillText}
                    variant="body1"
                    component="p"
                  >
                    Material UI
                  </Typography>
                </Grid>
                <Grid item className={classes.grid}>
                  <Icon
                    fr=""
                    icon="vscode-icons:file-type-mongo"
                    height="50px"
                  />
                  <Typography
                    className={classes.skillText}
                    variant="body1"
                    component="p"
                  >
                    MongoDB
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography
            className={classes.techUnderline}
            variant="h4"
            component="h3"
          >
            Tools
          </Typography>
          <Card className={classes.root}>
            <CardContent>
              <Grid container spacing={6} justifyContent="space-evenly">
                <Grid item className={classes.grid}>
                  <Icon fr="" icon="logos:cypress" height="50px" />
                  <Typography
                    className={classes.skillText}
                    variant="body1"
                    component="p"
                  >
                    Cypress
                  </Typography>
                </Grid>
                <Grid item className={classes.grid}>
                  <Icon fr="" icon="logos:jest" height="50px" />
                  <Typography
                    className={classes.skillText}
                    variant="body1"
                    component="p"
                  >
                    Git
                  </Typography>
                </Grid>
                <Grid item className={classes.grid}>
                  <Icon fr="" icon="logos:webpack" height="50px" />
                  <Typography
                    className={classes.skillText}
                    variant="body1"
                    component="p"
                  >
                    Webpack
                  </Typography>
                </Grid>
                <Grid item className={classes.grid}>
                  <Icon fr="" icon="logos:vim" height="50px" />
                  <Typography
                    className={classes.skillText}
                    variant="body1"
                    component="p"
                  >
                    Vim
                  </Typography>
                </Grid>
                <Grid item className={classes.grid}>
                  <Icon fr="" icon="flat-color-icons:linux" height="50px" />
                  <Typography
                    className={classes.skillText}
                    variant="body1"
                    component="p"
                  >
                    Linux
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
