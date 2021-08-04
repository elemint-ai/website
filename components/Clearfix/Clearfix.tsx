import React from "react";

// mterial-ui components
import { makeStyles } from "@material-ui/core/styles";

import createStyles from "@material-ui/styles/createStyles";
const styles = (theme: any) =>
  createStyles({
    clearfix: {
      "&:after,&:before": {
        display: "table",
        content: '" "',
      },
      "&:after": {
        clear: "both",
      },
    },
  });

const useStyles = makeStyles(styles);

export default function Clearfix() {
  const classes = useStyles();
  return <div className={classes.clearfix} />;
}

Clearfix.propTypes = {};
