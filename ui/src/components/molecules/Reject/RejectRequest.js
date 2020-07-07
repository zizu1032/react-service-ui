/*eslint-disable*/
import React from "react";
// react component used to create sweet alerts
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import {Button} from "components/atoms/CustomButtons";
import RejectIcon from "@material-ui/icons/HighlightOffOutlined";
import { FormattedMessage } from 'react-intl'
import styles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";

const useStyles = makeStyles(styles);

export default function RejectRequest({rejected, row}) {
  const classes = useStyles();
  const [alert, setAlert] = React.useState(null);

  const hideAlert = () => {
    setAlert(null);
  };

  const rejectedRequest = () => {
    rejected(row.original)
    successReject()
  };


  const warningMessage = () => {
    setAlert(
      <SweetAlert
        warning
        // style={{ display: "block", marginTop: "-100px" }}
        title={<FormattedMessage id={'sm.rejectreq.warning.title'} defaultMessage={"Are you sure?"}/>}
        onConfirm={rejectedRequest}
        onCancel={() => cancelReject()}
        confirmBtnCssClass={classes.button + " " + classes.success}
        cancelBtnCssClass={classes.button + " " + classes.danger}
        confirmBtnText={<FormattedMessage id={'sm.rejectreq.warning.confirm'} defaultMessage={"Yes, reject it!"}/>}
        cancelBtnText={<FormattedMessage id={'sm.rejectreq.warning.cancel'} defaultMessage={"Cancel"}/>}
        showCancel
      >
        <FormattedMessage id={'sm.rejectreq.warning.message'} defaultMessage={"You want reject this request"}/>
      </SweetAlert>
    );
  };

  const successReject = () => {
    //do other stuff
    setAlert(
      <SweetAlert
        success
        // style={{ display: "block", marginTop: "-100px" }}
        title={<FormattedMessage id={'sm.rejectreq.success.title'} defaultMessage={"It's reject"}/>}
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
        <FormattedMessage id={'sm.rejectreq.success.message'} defaultMessage={"This request has been reject it!"}/>
      </SweetAlert>
    );
  };

  const cancelReject = () => {
    //do other stuff
    setAlert(
      <SweetAlert
        danger
        // style={{ display: "block", marginTop: "-100px" }}
        title={<FormattedMessage id={'sm.rejectreq.cancel.title'} defaultMessage={"Cancelled"}/>}
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
        <FormattedMessage id={'sm.rejectreq.cancel.message'} defaultMessage={"This request was rejected!"}/>
      </SweetAlert>
    );
  };

  return (
    <div>
      {alert}
      {/* use this button to add a edit kind of action */}
        <Button
        id = {`test-reject-${row.original.sr_id}`}
        justIcon
        round
        simple
        onClick={warningMessage}
        color="danger"
        className="remove"
        >
            <RejectIcon />
        </Button>
    </div>
  );
}