/*eslint-disable*/
import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from '@material-ui/core/TextField';

// @material-ui/icons
import Close from "@material-ui/icons/Close";
import BatchIcon from "@material-ui/icons/NoteAdd";

// core components
import { Button } from "components/atoms/CustomButtons";
import styles from "assets/jss/material-dashboard-pro-react/views/notificationsStyle.js";
import { FormattedMessage } from 'react-intl'
const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function BatchRequestComponent({ requests, batchRequest, batchName, updateBatchName }) {

  const classes = useStyles();
  const [classicModal, setClassicModal] = useState(false);
  const [description, setDescription] = useState("");
  const [enableButton, setDisableButton] = useState(false);

  const createBatch = () => {
    setDisableButton(true)
    batchRequest(requests, description)
    // setClassicModal(false)
  };

  return (
    <div>
      <Button
        onClick={() => {
          updateBatchName('SH20-NNN')
          setDescription('');
          setDisableButton(false)
          setClassicModal(true)
        }}
        color="success"
        disabled={requests.length > 0 ? false : true}
      >
        <FormattedMessage id={'sm.btn.lbl.batch'} defaultMessage={"Create Batch"} /> &nbsp; <BatchIcon />
      </Button>

      <Dialog
        classes={{
          root: classes.center + " " + classes.modalRoot,
          paper: classes.modal
        }}
        open={classicModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setClassicModal(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <Button
            justIcon
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="transparent"
            onClick={() => setClassicModal(false)}
          >
            <Close className={classes.modalClose} />
          </Button>
          <h4 className={classes.modalTitle}><FormattedMessage id={'sm.btn.dialog.title'} defaultMessage={'Details batch request'} /></h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >

          <form className={classes.container} noValidate autoComplete="off">
            <div>
              <TextField
                id="outlined-read-only-input"
                label={<FormattedMessage id={'sm.btn.dialog.lbl.name'} defaultMessage={"Batch name"} />}
                value={batchName}
                className={classes.textField}
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-static"
                label={<FormattedMessage id={'sm.btn.dialog.lbl.description'} defaultMessage={"Add description"} />}
                multiline
                rows="4"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </form>

          {/* Content to render not necessary */}
          {/* 
            <ul> 
              {
                requests.map((val, key) => {
                  return (
                    <li key={key}>
                      {val}
                    </li>
                  )
                })
              }
            </ul>
            */}

        </DialogContent>
        <DialogActions className={classes.modalFooter}>
          <Button
            onClick={createBatch}
            disabled={enableButton}
            color="success"
          >
            <FormattedMessage id={'sm.btn.dialog.btn.lbl.create'} defaultMessage={"Create Batch"} />
          </Button>

          {
            /*
            <Button
              onClick={() => setClassicModal(false)}
              color="danger"
              simple
            >
              Close
            </Button>
            */
          }
        </DialogActions>
      </Dialog>
    </div>
  );
}