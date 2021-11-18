import projects from "../assets/projects.json";
import {
  // Tooltip,
  Card,
  CardMedia,
  Container,
  Grid,
  CardContent,
  Typography,
  Chip,
  CardHeader,
  // IconButton,
  BottomNavigationAction,
  BottomNavigation,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, GitHub } from "@material-ui/icons";

const useStyles = makeStyles({
  chip: {
    fontWeight: 500,
    fontSize: "1rem",
    // background: "#eec9be",
    background: "#f2d7ce",
    border: "1px solid #444045",
    margin: "5px",
  },
  cardHeader: {
    alignItems: "start",
    "& .MuiCardHeader-title": {
      color: "#444045",
      fontWeight: 700,
    },
  },
  gap: { "& span": { gap: "5px" } },
  root: {
    // background: "#eec9be",
    // background: "#f2d7ce",
    // background: "#f6e5df",
    // background: "white",
    background: "#fbf2ef",
    // boxShadow: "5px 5px 5px gray",
    border: "2px solid #444045",
    boxShadow: "5px 5px 2px 1px #d5795d",
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // set aspect ratio of img to 16:9
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
});

// TODO: disable buttons with empty live links
// TODO: update root font size and change other font sizes to rem

export default function Projects(): JSX.Element {
  const classes = useStyles();

  return (
    <Container style={{ marginBottom: "100px" }}>
      <Typography
        id="projects"
        className={classes.headerUnderline}
        component="h2"
        variant="h1"
      >
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => {
          return (
            <Grid xs={12} md={6} lg={4} item>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={project.image}
                  title={project.name}
                />
                <CardHeader
                  title={project.name}
                  subheader={project.date}
                  className={classes.cardHeader}
                  action={
                    <BottomNavigation
                      style={{
                        backgroundColor: "inherit",
                      }}
                      showLabels
                    >
                      <BottomNavigationAction
                        className={classes.gap}
                        label="Demo"
                        icon={<Link />}
                      />
                      <BottomNavigationAction
                        className={classes.gap}
                        label="Code"
                        icon={<GitHub />}
                      />
                    </BottomNavigation>
                  }
                />
                <CardContent>
                  <Typography paragraph variant="body1" component="p">
                    {project.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.tags.map((tag) => {
                      return <Chip className={classes.chip} label={tag} />;
                    })}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
