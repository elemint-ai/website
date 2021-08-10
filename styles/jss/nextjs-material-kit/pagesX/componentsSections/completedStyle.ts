import { container } from "styles/jss/nextjs-material-kit";

import createStyles from "@material-ui/styles/createStyles";
const completedStyle = (theme: any) =>
  createStyles({
    section: {
      padding: "70px 0",
    },
    container: {
      ...container,
      textAlign: "center !important" as "center",
    },
  });

export default completedStyle;
