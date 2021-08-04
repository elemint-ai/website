import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
// core components
import styles from "styles/jss/nextjs-material-kit/components/customLinearProgressStyle";

const useStyles = makeStyles(styles);

export default function CustomLinearProgress(props: any) {
  const classes = useStyles();
  const { color, ...rest } = props;
  return (
    <LinearProgress
      {...rest}
      classes={{
        root: classes.root + " " + (classes as any)[color + "Background"],
        bar: classes.bar + " " + (classes as any)[color],
      }}
    />
  );
}

CustomLinearProgress.defaultProps = {
  color: "gray",
};

CustomLinearProgress.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  variant: PropTypes.string,
  value: PropTypes.number,
  style: PropTypes.any,
};
