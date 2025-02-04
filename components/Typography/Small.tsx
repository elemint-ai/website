import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "styles/jss/nextjs-material-kit/components/typographyStyle";

const useStyles = makeStyles(styles);

export default function Small(props: any) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.smallText}>
      {children}
    </div>
  );
}

Small.propTypes = {
  children: PropTypes.node,
};
