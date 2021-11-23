import { projects } from "../assets/projects.json";
import {
  Button,
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
  Chip,
  CardHeader,
} from "@material-ui/core";
import { useStyles } from "../assets/styles";
import { Link, GitHub } from "@material-ui/icons";
import Section from "./Section";
import { IProject } from "../assets/types";

// TODO: update root font size and change other font sizes to rem

export default function Projects(): JSX.Element {
  const classes = useStyles();

  function Project({ ...project }: IProject) {
    return (
      <Grid style={{ display: "flex" }} xs={12} md={6} lg={4} item>
        <Card className={`${classes.border} ${classes.projectCard}`}>
          <CardMedia
            component="img"
            className={classes.projectImage}
            image={project.image}
            title={project.name}
          />
          <CardHeader
            title={project.name}
            subheader={project.date}
            className={classes.cardHeader}
          />
          <CardContent>
            <Typography paragraph variant="body1" component="p">
              {project.tags.map((tag, index) => {
                return (
                  <Chip key={index} className={classes.chip} label={tag} />
                );
              })}
            </Typography>
            <Typography variant="body1" component="div">
              {project.description}
            </Typography>
          </CardContent>
          <CardContent style={{ marginTop: "auto" }}>
            <Grid container justifyContent="center">
              <Button
                rel="noreferrer"
                target="_blank"
                variant="contained"
                className={classes.projectURL}
                disabled={project.liveUrl === ""}
                href={project.liveUrl}
                startIcon={<Link />}
              >
                Demo
              </Button>
              <Button
                rel="noreferrer"
                target="_blank"
                variant="contained"
                className={classes.projectURL}
                disabled={project.codeUrl === ""}
                href={project.codeUrl}
                startIcon={<GitHub />}
              >
                Code
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  return (
    <Section header="Projects">
      <Grid container alignItems="stretch" spacing={4}>
        {projects.map((project, index) => {
          return <Project key={index} {...project} />;
        })}
      </Grid>
    </Section>
  );
}
