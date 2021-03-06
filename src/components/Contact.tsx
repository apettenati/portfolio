import { contact } from "../assets/projects.json";
import { Button, Grid } from "@material-ui/core";
import { useStyles } from "../assets/styles";
import { IContactItem } from "../assets/types";
import { Icon } from "@iconify/react";
import Section from "./Section";

export default function Contact(): JSX.Element {
  const classes = useStyles();

  function ContactButton({ item }: IContactItem) {
    return (
      <Grid item>
        <Button
          className={`${classes.border} ${classes.contactButton}`}
          startIcon={
            <Icon
              fr=""
              icon={item.icon}
              height="25px"
              className={classes.iconMargin}
            />
          }
          href={item.href}
        >
          {item.name}
        </Button>
      </Grid>
    );
  }

  return (
    <Section header="Contact">
      <Grid
        className={classes.contactGridMargin}
        container
        spacing={2}
        justifyContent="space-evenly"
      >
        {contact.map((item, index) => {
          return <ContactButton key={index} item={item} />;
        })}
      </Grid>
    </Section>
  );
}
