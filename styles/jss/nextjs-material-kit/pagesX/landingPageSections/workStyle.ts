import { title } from "styles/jss/nextjs-material-kit";

import createStyles from "@material-ui/styles/createStyles";
const workStyle = (theme: any) =>
  createStyles({
    section: {
      padding: "70px 0",
    },
    title: {
      ...title,
      marginBottom: "50px",
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none",
      textAlign: "center",
    },
    description: {
      color: "#999",
      textAlign: "center",
    },
    textCenter: {
      textAlign: "center",
    },
    textArea: {
      marginRight: "15px",
      marginLeft: "15px",
    },
  });

export default workStyle;
