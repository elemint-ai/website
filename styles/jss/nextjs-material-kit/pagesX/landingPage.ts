import { container, title } from "styles/jss/nextjs-material-kit";

import createStyles from "@material-ui/styles/createStyles";
const landingPageStyle = (theme: any) =>
  createStyles({
    container: {
      zIndex: 12,
      color: "#FFFFFF",
      ...container,
    },
    logo: {
      width: "100%",
      maxWidth: "500px",
    },
    title: {
      ...title,
      display: "inline-block",
      position: "relative",
      marginTop: "30px",
      minHeight: "32px",
      color: "#FFFFFF",
      textDecoration: "none",
    },
    subtitle: {
      fontSize: "1.313rem",
      maxWidth: "500px",
      margin: "10px auto 0",
    },
    main: {
      background: "#F6F5EC",
      position: "relative",
      zIndex: 3,
    },
    mainRaised: {
      margin: "-180px 30px 0px",
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    },
  });

export default landingPageStyle;
