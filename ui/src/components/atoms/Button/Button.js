import React from "react";
  import PropTypes from "prop-types";
  //core components
  import Button from "@material-ui/core/Button";
  // styles
  import classNames from "classnames";
  import { makeStyles } from "@material-ui/core/styles";
  import styles from "your/route";
  const useStyles = makeStyles(styles);
  
  //This is the main function
  const Button = React.forwardRef((props, ref) => {
      const classes = useStyles();
      // Properties of the atom
      const {
        color,
        children,
        fullWidth,
        disabled,
        size,
        className,
        muiClasses,
        ...rest
      } = props;
      // Style classes
      const btnClasses = classNames({
          [classes[size]]: size,
          [classes[color]]: color,
          [classes.fullWidth]: fullWidth,
          [classes.disabled]: disabled,
          [className]: className
        });
      return (
          <Button {...rest} ref={ref} classes={muiClasses} className={btnClasses}>
            {children}
          </Button>
      );
  });
// Type and required properties
  Button.propTypes = {
      color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "transparent"
      ]),
      size: PropTypes.oneOf(["sm", "lg"]),
      fullWidth: PropTypes.bool,
      disabled: PropTypes.bool,
      className: PropTypes.string.isRequired,
      muiClasses: PropTypes.object.isRequired,
      children: PropTypes.node.isRequired
    };
// Default properties   
  Button.defaultProps = {
      color: "primary",
      size: "sm",
      fullWidth: true,
      disabled: false,
  };

  export default Button
  