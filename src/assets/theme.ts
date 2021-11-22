import { createTheme } from "@material-ui/core/styles";

const rawColors = {
  darkPink: "#d5795d",
  lightPink: "#fbf2ef",
  pink: "#f3d7ce",
  offWhite: "#fefcf9",
  green: "#6e8778",
  black: "#444045",
};

export default {
  headerFooter: rawColors.green,
  buttonHover: rawColors.green,
  paperBackground: rawColors.offWhite,
  borderHighlight: rawColors.darkPink,
  textColor: rawColors.black,
  borderColor: rawColors.black,
  chipColor: rawColors.pink,
};

export const theme = createTheme({
  typography: {
    fontSize: 16,
    h1: {
      color: rawColors.black,
      fontWeight: "bold",
    },
    h4: {
      color: rawColors.black,
      fontWeight: 700,
    },
    h5: {
      color: rawColors.black,
      fontWeight: 700,
    },
    body1: {
      color: rawColors.black,
    },
  },
});
