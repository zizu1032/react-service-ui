import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "assets/jss/material-dashboard-pro-react/components/statusBadge.js";

const useStyles = makeStyles(styles);

export function Badge(props) {
  const classes = useStyles();
  const timelineBadgeClasses = classes.timelineBadge + " " + classes[props.color];
  return (
    <span>
      <div className={timelineBadgeClasses}>
        {props.icon ? (
            <props.icon className={classes.badgeIcon} />
        ) : null}
      </div>
    </span>
  );
}
