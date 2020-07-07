/*eslint-disable*/
import React, {useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// react component for creating dynamic tables
import ReactTable from "react-table"
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import InfoIcon from "@material-ui/icons/InfoOutlined";

// core components
import Button from "components/CustomButtons/Button.js";
import Pagination from "components/Pagination/Pagination"

import {getSampleToSeedHelathByBatchID} from '../../client/sample/sampleClient'
//import { useFetchInformation } from 'components/Information/FetchInformation'

import styles from "assets/jss/material-dashboard-pro-react/views/notificationsStyle.js";
// import catalogs
import entityType from '../../components/catalogs/entityType'
const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function InformationComponent(props) {
  const classes = useStyles();
  const [classicModal, setClassicModal] = useState(false);
  const columns = getColumnsName();
  const data = [];
  const [state, setState] = useState({dataSample:[]});
  const onClickEvent = () => {

    setClassicModal(true);
    getSamppleDatafromService();
  }

  function getCatalogs (rowData){
    const dataActions = rowData.map(item => {
      Object.keys(item).forEach(key => {
        if (key === "entity_type"){
            item.entity_type = entityType.get(item.entity_type);
           }
        })
        return item;
      }
    )
    return dataActions;
  }
  


  async function getSamppleDatafromService () {
    try {
      setState({
        dataSample :  getCatalogs(await getSampleToSeedHelathByBatchID(props))
      })
    }catch (error){
        console.log(error)
    }
  }

  function getColumnsName()  {
    const columns = [];
    const headers = [
        'code', 
        'type',
        'designation',
        'parentage'        
      ]
      headers.map(element => {
        let confColumns = {}
        confColumns = {
            minWidth: 40,
            width: 150,
            maxWidth: 100,
            style: {
                textAlign: "left",
            }
        }

        let header = '';
                switch (element) {
                    case 'code':
                        header = 'Code'
                        break;
                    case 'type':
                        header = 'Type'
                        break;
                    case 'designation':
                        header = 'Designation'
                        break;
                    case 'parentage':
                        header = 'Parentage'
                        break;
                    default:
                        break;
                }

        columns.push({
            accessor: element,
            Header: header || element,
            ...confColumns
        }

        )
       }
       )
       return columns
       
} 
 return (
    <div>
        <Button
        justIcon
        round
        simple
        onClick={onClickEvent}
        color="info"
        >
          <InfoIcon />
        </Button>

        <Dialog
          //classes={{
            //root: classes.center + " " + classes.modalRoot,
            //paper: classes.modal
          //}}
          open={classicModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setClassicModal(false)}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
          fullWidth={true}
          maxWidth='lg'
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
            <h4 className={classes.modalTitle}>Sample Details</h4>
          </DialogTitle>
          <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
          >
            <ReactTable
                            noDataText="text"
                            //ref={r => (this.checkboxTable = r)}
                            //filterable
                            data={state.dataSample}
                            columns={columns}
                            //loading={loading}
                            //{...checkboxProps}
                            PaginationComponent={Pagination}
                            defaultPageSize={15}
                            //className="-striped -highlight"
                            // defaultSorted={[
                            // {
                            //     id: "date_submitted",
                            //     desc: false
                            // }
                            // ]}
                        />
            {/* Form to render */}
            {/*
            <FormInfo data={information} /> 
            */
            } 
          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            {/* <Button color="transparent">Nice Button</Button> */}
            <Button
              onClick={() => setClassicModal(false)}
              color="danger"
              simple
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
    </div>
  );
}