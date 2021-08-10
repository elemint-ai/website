import { container, title } from "styles/jss/nextjs-material-kit";
import customCheckboxRadioSwitch from "styles/jss/nextjs-material-kit/customCheckboxRadioSwitch";

import createStyles from "@material-ui/styles/createStyles";
const basicsStyle = (theme: any) =>
  createStyles({
    sections: {
      padding: "70px 0",
    },
    container,
    title: {
      ...title,
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none",
    },
    space50: {
      height: "50px",
      display: "block",
    },
    space70: {
      height: "70px",
      display: "block",
    },
    icons: {
      width: "17px",
      height: "17px",
      color: "#FFFFFF",
    },
    ...customCheckboxRadioSwitch(theme),
  });

export default basicsStyle;
