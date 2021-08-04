import { container, title } from "styles/jss/nextjs-material-kit";

import createStyles from "@material-ui/styles/createStyles";
const notificationsStyles = (theme: any) =>
  createStyles({
    section: {
      backgroundColor: "#FFFFFF",
      display: "block",
      width: "100%",
      position: "relative",
      padding: "0",
    },
    title: {
      ...title,
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none",
    },
    container,
  });

export default notificationsStyles;
