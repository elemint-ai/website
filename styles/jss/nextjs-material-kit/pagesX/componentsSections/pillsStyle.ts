import { container, title } from "styles/jss/nextjs-material-kit";

import createStyles from "@material-ui/styles/createStyles";
const pillsStyle = (theme: any) =>
  createStyles({
    section: {
      padding: "70px 0",
    },
    container,
    title: {
      ...title,
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none",
    },
  });

export default pillsStyle;
