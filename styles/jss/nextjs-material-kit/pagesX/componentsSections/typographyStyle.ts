import { container, title } from "styles/jss/nextjs-material-kit";

import imagesStyles from "styles/jss/nextjs-material-kit/imagesStyles";

import createStyles from "@material-ui/styles/createStyles";
const typographyStyle = (theme: any) =>
  createStyles({
    section: {
      padding: "70px 0",
    },
    container,
    space50: {
      height: "50px",
      display: "block",
    },
    title: {
      ...title,
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none",
    },
    typo: {
      paddingLeft: "25%",
      marginBottom: "40px",
      position: "relative",
      width: "100%",
    },
    note: {
      fontFamily:
        '"Source Serif Pro", "Roboto", "Helvetica", "Arial", sans-serif',
      bottom: "10px",
      color: "#c0c1c2",
      display: "block",
      fontWeight: 400,
      fontSize: "13px",
      lineHeight: "13px",
      left: "0",
      marginLeft: "20px",
      position: "absolute",
      width: "260px",
    },
    marginLeft: {
      marginLeft: "auto !important",
    },
    ...imagesStyles(theme),
  });

export default typographyStyle;
