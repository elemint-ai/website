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
      position: "relative",
      width: "100%",
      minHeight: "1px",
      paddingRight: "15px",
      paddingLeft: "15px",
      flexBasis: "auto",
    },
  });

const useStyles = makeStyles(styles);

export default function GridItem(props: any) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridItem.defaultProps = {
  className: "",
};

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cs: PropTypes.number,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
};
