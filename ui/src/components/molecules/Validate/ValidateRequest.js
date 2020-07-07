/*eslint-disable*/
import React from "react";
// react component used to create sweet alerts
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import { Button } from "components/atoms/CustomButtons";
import ValidateIcon from "@material-ui/icons/CheckCircleOutline";
import { FormattedMessage } from 'react-intl'
import styles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";

const useStyles = makeStyles(styles);

export default function ValidateRequest({validation, row}) {
  const classes = useStyles();
  const [alert, setAlert] = React.useState(null);

  const hideAlert = () => {
    setAlert(null);
  };

  const validateRequest = () => {
    validation(row.original)
    successValidate()
  };

    const warningMessage = () => {
    setAlert(
      <SweetAlert
        warning
        // style={{ display: "block", marginTop: "-100px" }}
        title={<FormattedMessage id={'sm.validatereq.warning.title'} defaultMessage={"Are you sure?"}/>}
        onConfirm={validateRequest}
        onCancel={() => cancelValidate()}
        confirmBtnCssClass={classes.button + " " + classes.success}
        cancelBtnCssClass={classes.button + " " + classes.danger}
        confirmBtnText={<FormattedMessage id={'sm.validatereq.warning.confirm'} defaultMessage={"Yes, validate it!"}/>}
        cancelBtnText={<FormattedMessage id={'sm.validatereq.warning.cancel'} defaultMessage={"Cancel"}/>}
        showCancel
      >
        <FormattedMessage id={'sm.validatereq.warning.message'} defaultMessage={"Do you want to validate this request?"}/>
      </SweetAlert>
    );
  };

  const successValidate = () => {
    //do other stuff
    setAlert(
      <SweetAlert
        success
        // style={{ display: "block", marginTop: "-100px" }}
        title={<FormattedMessage id={'sm.validatereq.success.title'} defaultMessage={"It's validate"}/>}
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
        <FormattedMessage id={'sm.validatereq.success.message'} defaultMessage={"This request has been validated it!"}/>
      </SweetAlert>
    );
  };

  const cancelValidate = () => {
    //do other stuff
    setAlert(
      <SweetAlert
        danger
        // style={{ display: "block", marginTop: "-100px" }}
        title={<FormattedMessage id={'sm.validatereq.cancel.title'} defaultMessage={"Cancelled"}/>}
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
        <FormattedMessage id={'sm.validatereq.cancel.message'} defaultMessage={"Your request was not validated"}/>
      </SweetAlert>
    );
  };

  return (
    <div>
      {alert}
      {/* use this button to add a edit kind of action */}
        <Button
        id = {`test-validate-${row.original.sr_id}`}
        justIcon
        round
        simple
        onClick={warningMessage}
        color="success"
        >
            <ValidateIcon />
        </Button>
    </div>
  );
}