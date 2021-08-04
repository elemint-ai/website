import { container, title } from "styles/jss/nextjs-material-kit";

import modalStyle from "styles/jss/nextjs-material-kit/modalStyle";
import tooltipsStyle from "styles/jss/nextjs-material-kit/tooltipsStyle";
import popoverStyles from "styles/jss/nextjs-material-kit/popoverStyles";

import createStyles from "@material-ui/styles/createStyles";
const javascriptStyles = (theme: any) =>
  createStyles({
    section: {
      padding: "70px 0 0",
    },
    container,
    title: {
      ...title,
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none",
    },
    icon: {
      width: "17px",
      height: "17px",
      marginRight: "4px",
    },
    ...modalStyle(theme),
    label: {
      color: "rgba(0, 0, 0, 0.26)",
      cursor: "pointer",
      display: "inline-flex",
      fontSize: "14px",
      transition: "0.3s ease all",
      lineHeight: "1.428571429",
      fontWeight: 400,
      paddingLeft: "0",
      letterSpacing: "normal",
    },
    ...tooltipsStyle(theme),
    ...popoverStyles(theme),
  });

export default javascriptStyles;
