import { contact } from "../assets/projects.json";
import { Button, Grid } from "@material-ui/core";
import { useStyles } from "../assets/styles";
import { Icon } from "@iconify/react";
import Section from "./Section";

interface IContactItem {
  item: {
    name: string;
    href: string;
    icon: string;
  };
}
export default function Contact(): JSX.Element {
  const classes = useStyles();

  function ContactButton({ item }: IContactItem) {
    return (
      <Button
        className={classes.contactButton}
        startIcon={
          <Icon
            fr=""
            icon={item.icon}
            height="25px"
            style={{ marginRight: "5px" }}
          />
        }
        href={item.href}
      >
        {item.name}
      </Button>
    );
  }

  return (
    <Section header="Contact">
      <Grid
        style={{ marginTop: "50px" }}
        container
        spacing={4}
        justifyContent="space-evenly"
      >
        {contact.map((item, index) => {
          return <ContactButton key={index} item={item} />;
        })}
      </Grid>
    </Section>
  );
}
