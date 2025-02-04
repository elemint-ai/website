import { container } from "styles/jss/nextjs-material-kit";

import createStyles from "@material-ui/styles/createStyles";
const downloadStyle = (theme: any) =>
  createStyles({
    section: {
      padding: "70px 0",
    },
    container,
    textCenter: {
      textAlign: "center",
    },
    sharingArea: {
      marginTop: "80px",
    },
    socials: {
      maxWidth: "24px",
      marginTop: "0",
      width: "100%",
      transform: "none",
      left: "0",
      top: "0",
      height: "100%",
      fontSize: "20px",
      marginRight: "4px",
    },
  });

export default downloadStyle;
