import { title } from "styles/jss/nextjs-material-kit";

import createStyles from "@material-ui/styles/createStyles";
const productStyle = (theme: any) =>
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
    description: {
      color: "#999",
    },
  });

export default productStyle;
