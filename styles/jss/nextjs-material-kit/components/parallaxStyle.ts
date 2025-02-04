import createStyles from "@material-ui/styles/createStyles";
const parallaxStyle = (theme: any) =>
  createStyles({
    parallax: {
      height: "90vh",
      maxHeight: "1000px",
      overflow: "hidden",
      position: "relative",
      backgroundPosition: "center top",
      backgroundSize: "cover",
      margin: "0",
      padding: "0",
      border: "0",
      display: "flex",
      alignItems: "center",
    },
    filter: {
      "&:before": {
        background: "rgba(0, 0, 0, 0.5)",
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
      },
    },
    small: {
      height: "380px",
    },
    parallaxResponsive: {
      // [theme.breakpoints.down("md")]: {
      //   minHeight: "1860px",
      //   bottom: "100px",
      // },
      minHeight: "860px",
      bottom: "100px",
    },
  });

export default parallaxStyle;
