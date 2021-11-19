import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  codeLabels: {
    margin: theme.spacing(1),
    fontSize: "2rem",
    padding: "10px 20px",
  },
  marginTop: {
    marginTop: theme.spacing(0.5),
  },
  //section
  section: {
    marginBottom: theme.spacing(12),
  },
  // skills
  skillCard: {
    // background: "#eec9be",
    // background: "#f2d7ce",
    background: "#fbf2ef",
    // background: "white",
    // boxShadow: "5px 5px 5px gray",
    border: "2px solid #444045",
    boxShadow: "5px 5px 2px 1px #d5795d",
    padding: theme.spacing(2.5),
    margin: theme.spacing(1.5),
  },
  skillSectionHeader: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(2),
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
    marginBottom: theme.spacing(6),
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
      zIndex: "-1",
    },
  },
  // projects
  chip: {
    // fontSize: "1rem",
    background: "#f2d7ce",
    border: "1px solid #444045",
    margin: "2px",
    padding: theme.spacing(0.5),
  },

  cardHeader: {
    paddingBottom: theme.spacing(0.5),
    "& .MuiCardHeader-title": {
      color: "#444045",
      fontWeight: 700,
    },
  },
  gap: { "& span": { gap: "5px" } },
  projectsRoot: {
    background: "#fbf2ef",
    border: "2px solid #444045",
    boxShadow: "5px 5px 2px 1px #d5795d",
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // set aspect ratio of img to 16:9
  },
  // about
  border: {
    borderRadius: "4px",
    border: "2px solid #444045",
    boxShadow: "5px 5px 2px 1px #d5795d",
    backgroundColor: "#fefcf9",
  },
  textPadding: {
    padding: "15px",
  },
  image: {
    maxWidth: "100%",
    height: "100%",
  },
  //contact
  contactButton: {
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
  //skill
  skillText: {
    marginTop: "5px",
    fontWeight: 500,
  },
  skillGrid: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
  },
}));
