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

// TODO: update root font size and change other font sizes to rem

interface IProject {
  name: string;
  description: string;
  liveUrl: string;
  codeUrl: string;
  tags: string[];
  image: string;
  date: string;
}

export default function Projects(): JSX.Element {
  const classes = useStyles();

  function Project({ ...project }: IProject) {
    return (
      <Grid xs={12} md={6} lg={4} item>
        <Card className={classes.projectsRoot}>
          <CardMedia
            className={classes.media}
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
            <Typography paragraph variant="body1" component="div">
              {project.description}
            </Typography>
            <Grid
              container
              justifyContent="center"
              className={classes.marginTop}
            >
              <Button
                variant="contained"
                className={classes.codeLabels}
                disabled={project.liveUrl === ""}
                href={project.liveUrl}
                startIcon={<Link />}
              >
                <Typography variant="button">Demo</Typography>
              </Button>
              <Button
                variant="contained"
                className={classes.codeLabels}
                disabled={project.codeUrl === ""}
                href={project.codeUrl}
                startIcon={<GitHub />}
              >
                <Typography variant="button">Code</Typography>
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  return (
    <Section header="Projects">
      <Grid container spacing={4}>
        {projects.map((project, index) => {
          return <Project key={index} {...project} />;
        })}
      </Grid>
    </Section>
  );
}
