import { makeStyles } from "@material-ui/core";
import colors from "../assets/theme";

export const useStyles = makeStyles((theme) => ({
  border: {
    borderRadius: theme.spacing(0.5),
    backgroundColor: colors.paperBackground,
    border: `2px solid ${colors.borderColor}`,
    boxShadow: `5px 5px 2px 1px ${colors.borderHighlight}`,
  },
  //section
  section: {
    // prevent navbar from covering start of component when clicking nav links
    scrollMargin: theme.spacing(12) + "px",
    marginBottom: theme.spacing(12),
  },
  // skills
  skillCard: {
    padding: theme.spacing(2.5),
    margin: theme.spacing(1.5),
  },
  skillSectionHeader: {
    margin: theme.spacing(2, 1),
    // create colored offset underline under sub-headers
    position: "relative",
    "&:before": {
      content: "no-open-quote",
      position: "absolute",
      // left: "-5%",
      bottom: "8px",
      width: "15%",
      height: "4px",
      backgroundColor: colors.borderHighlight,
      transform: "skew(-12deg)",
      zIndex: "-1",
    },
  },
  headerUnderline: {
    marginBottom: theme.spacing(6),
    // create colored offset underline under headers
    position: "relative",
    "&:before": {
      content: "no-open-quote",
      position: "absolute",
      // left: "-5%",
      bottom: "18px",
      width: "40%",
      height: "14px",
      backgroundColor: colors.borderHighlight,
      transform: "skew(-12deg)",
      zIndex: "-1",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "5rem",
    },
  },
  // projects
  projectCard: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  projectURL: {
    margin: theme.spacing(0, 1),
    padding: theme.spacing("auto", 2),
    backgroundColor: colors.borderHighlight,
    color: "white",
    "&:hover": {
      backgroundColor: colors.buttonHover,
    },
    "&:disabled": {
      backgroundColor: colors.borderHighlight,
      color: "white",
      opacity: "60%",
    },
  },
  chip: {
    backgroundColor: colors.chipColor,
    margin: theme.spacing(0.25),
  },
  cardHeader: {
    paddingBottom: theme.spacing(0.5),
  },
  gap: { "& span": { gap: theme.spacing(0.5) } },
  projectImage: {
    height: "260px",
    objectPosition: "top",
  },
  // about
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
    color: colors.textColor,
    "&:hover": {
      backgroundColor: colors.buttonHover,
      color: "white",
    },
    padding: theme.spacing(2, 3),
    width: "180px", // create fixed length so buttons are the same size
  },
  iconMargin: {
    marginRight: theme.spacing(0.5),
  },
  contactGridMargin: {
    marginTop: theme.spacing(4),
  },
  //skill
  skillText: {
    marginTop: theme.spacing(0.5),
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
    backgroundColor: colors.headerFooter,
  },
  header: {
    [theme.breakpoints.down("xs")]: {
      display: "none", // hide name on mobile
    },
    width: "50%",
    flexGrow: 1, // fix wrapping of name
  },
  appbarButton: {
    margin: theme.spacing(1),
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
    backgroundColor: colors.headerFooter,
    width: "100%",
    color: "white",
    margin: "-5px 0",
    alignItems: "center",
  },
}));
