import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import createStyles from "@material-ui/styles/createStyles";
const styles = (theme: any) =>
  createStyles({
    grid: {
      marginRight: "-15px",
      marginLeft: "-15px",
      width: "auto",
    },
  });

const useStyles = makeStyles(styles);

export default function GridContainer(props: any) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  ) as any;
}

GridContainer.defaultProps = {
  className: "",
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  justify: PropTypes.string,
};
