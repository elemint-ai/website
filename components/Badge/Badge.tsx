import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "styles/jss/nextjs-material-kit/components/badgeStyle";

const useStyles = makeStyles(styles);

export default function Badge(props: any) {
  const classes = useStyles();
  const { color, children } = props;
  return (
    <span className={classes.badge + " " + (classes as any)[color]}>
      {children}
    </span>
  );
}

Badge.defaultProps = {
  color: "gray",
};

Badge.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  children: PropTypes.node,
};
