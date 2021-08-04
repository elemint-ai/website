import { cardTitle, title } from "styles/jss/nextjs-material-kit";
import imagesStyle from "styles/jss/nextjs-material-kit/imagesStyles";

import createStyles from "@material-ui/styles/createStyles";
const teamStyle = (theme: any) =>
  createStyles({
    section: {
      padding: "70px 0",
      textAlign: "center",
    },
    title: {
      ...title,
      marginBottom: "1rem",
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none",
    },
    ...imagesStyle(theme),
    itemGrid: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    cardTitle,
    smallTitle: {
      color: "#6c757d",
    },
    description: {
      color: "#999",
    },
    justifyCenter: {
      justifyContent: "center !important",
    },
    socials: {
      marginTop: "0",
      width: "100%",
      transform: "none",
      left: "0",
      top: "0",
      height: "100%",
      lineHeight: "41px",
      fontSize: "20px",
      color: "#999",
    },
    margin5: {
      margin: "5px",
    },
  });

export default teamStyle;
