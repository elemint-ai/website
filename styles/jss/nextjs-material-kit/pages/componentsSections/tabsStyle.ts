import { container } from "styles/jss/nextjs-material-kit";

import createStyles from "@material-ui/styles/createStyles";
const tabsStyle = (theme: any) =>
  createStyles({
    section: {
      background: "#EEEEEE",
      padding: "70px 0",
    },
    container,
    textCenter: {
      textAlign: "center",
    },
  });

export default tabsStyle;
