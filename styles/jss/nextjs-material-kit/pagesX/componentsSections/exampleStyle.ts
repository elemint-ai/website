import { containerFluid } from "styles/jss/nextjs-material-kit";

import imagesStyle from "styles/jss/nextjs-material-kit/imagesStyles";

import createStyles from "@material-ui/styles/createStyles";
const exampleStyle = (theme: any) =>
  createStyles({
    section: {
      padding: "70px 0",
    },
    container: {
      ...containerFluid,
      textAlign: "center !important" as "center",
    },
    ...imagesStyle(theme),
    link: {
      textDecoration: "none",
    },
  });

export default exampleStyle;
