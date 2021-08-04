import { container } from "styles/jss/nextjs-material-kit";

import createStyles from "@material-ui/styles/createStyles";
const carouselStyle = (theme: any) =>
  createStyles({
    section: {
      padding: "70px 0",
    },
    container,
    marginAuto: {
      marginLeft: "auto !important",
      marginRight: "auto !important",
    },
  });

export default carouselStyle;
