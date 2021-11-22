import { skills } from "../assets/projects.json";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { useStyles } from "../assets/styles";
import { ISkill, ISkillSection } from "../assets/types";
import { Icon } from "@iconify/react";
import Section from "./Section";

export default function Skills(): JSX.Element {
  const classes = useStyles();

  function SkillSection({ header, skills }: ISkillSection) {
    return (
      <Grid item xs={12} lg={4}>
        <Typography
          className={classes.skillSectionHeader}
          variant="h4"
          component="h3"
        >
          {header}
        </Typography>
        <Card className={classes.skillCard}>
          <CardContent>
            <Grid container spacing={4} justifyContent="space-evenly">
              {skills.map((skill: ISkill, index) => {
                return (
                  <Skill key={index} name={skill.name} icon={skill.icon} />
                );
              })}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  function Skill({ name, icon }: ISkill) {
    return (
      <Grid item className={classes.skillGrid}>
        <Icon fr="" icon={icon} height="50px" />
        <Typography className={classes.skillText} variant="body1" component="p">
          {name}
        </Typography>
      </Grid>
    );
  }

  return (
    <Section header="Skills">
      <Grid container spacing={4} alignItems="stretch">
        {skills.map((section, index) => {
          return (
            <SkillSection
              key={index}
              header={section.header}
              skills={section.skills}
            />
          );
        })}
      </Grid>
    </Section>
  );
}
