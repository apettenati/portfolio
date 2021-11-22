import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  codeLabels: {
    margin: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: "#d5795d", //dark pink
    color: "white",
    "&:hover": {
      backgroundColor: "#6e8778",
    },
    "&:disabled": {
      backgroundColor: "#d5795d", //dark pink
      color: "white",
      opacity: "60%",
    },
  },
  marginTop: {
    marginTop: theme.spacing(0.5),
  },
  //section
  section: {
    scrollMarginTop: "100px",
    marginBottom: theme.spacing(12),
  },
  // skills
  skillCard: {
    // background: "#eec9be",
    // background: "#f2d7ce",
    // backgroundColor: "#fbf2ef", // light pink
    backgroundColor: "#fefcf9", // offwhite
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
      bottom: "8px",
      width: "15%",
      height: "4px",
      backgroundColor: "#d5795d", //dark pink
      transform: "skew(-12deg)",
      // borderRadius: "2px",
      // boxShadow: "0px 0px 2px 1px #d5795d",
      zIndex: "-1",
    },
  },
  headerUnderline: {
    // prevent navbar from covering start of component when clicking nav links
    marginBottom: theme.spacing(6),
    fontWeight: "bold",
    position: "relative",
    color: "#444045",
    // create colored offset underline under headers
    "&:before": {
      content: "no-open-quote",
      position: "absolute",
      // left: "-5%",
      bottom: "18px",
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
    // border: "1px solid #444045",
    backgroundColor: "#f3d7ce", // pink
    margin: "2px",
    // padding: theme.spacing(0.25),
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
    // backgroundColor: "#fbf2ef", // light pink
    backgroundColor: "#fefcf9", // offwhite
    border: "2px solid #444045",
    boxShadow: "5px 5px 2px 1px #d5795d",
    flexGrow: 1,
  },
  media: {
    maxHeight: "300px",
    objectPosition: "top",
  },
  // about
  border: {
    borderRadius: "4px",
    border: "2px solid #444045",
    boxShadow: "5px 5px 2px 1px #d5795d",
    backgroundColor: "#fefcf9",
  },
  aboutText: {
    whiteSpace: "pre-line",
    lineHeight: 1.75,
    fontSize: "1.25rem",
    padding: theme.spacing(3),
  },
  image: {
    maxWidth: "100%",
    height: "100%",
  },
  //contact
  contactButton: {
    border: "2px solid #444045",
    boxShadow: "5px 5px 2px 1px #d5795d",
    color: "#444045",
    backgroundColor: "#fefcf9", // offwhite
    // backgroundColor: "#f6e5df", // light pink
    "&:hover": {
      backgroundColor: "#6e8778",
      color: "white",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
      padding: "20px 30px",
    },
  },
  iconMargin: {
    marginRight: theme.spacing(0.5),
  },
  contactGridMargin: {
    marginTop: theme.spacing(4),
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
  //appbar
  appbar: {
    backgroundColor: "#6e8778",
  },
  toolbar: {
    // paddingLeft: theme.spacing(9),
    // paddingRight: theme.spacing(9),
  },
  header: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    width: "50%",
    flexGrow: 1,
  },
  appbarButton: {
    margin: "10px",
  },
  //footer
  footerImg: {
    width: "100%",
    marginTop: "-500px",
    position: "sticky",
    zIndex: -2,
    mixBlendMode: "hard-light",
  },
  footerNav: {
    backgroundColor: "#6e8778",
    width: "100%",
    color: "white",
    margin: "-5px 0",
    alignItems: "center",
  },
}));
