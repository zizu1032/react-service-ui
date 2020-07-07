/*eslint-disable*/
import React, {useState, useEffect } from "react";
import axios from 'utils/axios';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import InfoOutlined from '@material-ui/icons/InfoOutlined';

import BasicInformation from './BasicInformation'
import AdditionalInformation from './AdditionalInformation'

// core components
import {Button} from "components/atoms/CustomButtons";
import { FormattedMessage } from 'react-intl'
import EntitiesTable from "./EntitiesTable";
// import styles from "assets/jss/material-dashboard-pro-react/views/notificationsStyle.js";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  modalClose: {
    width: "16px",
    height: "16px"
  },
  title: {
    flexGrow: 1,
  },
}));


// const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function InformationComponent({information, row}) {

  const classes = useStyles();
  const [classicModal, setClassicModal] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  const informateRequest = async() => {
      await axios.get(`service-request-detail/${row.original._id}`).then(response => {
        const {data} = response.data.get_service_request_detail.data.service_request_metadata;
        const {list_member} = response.data.get_service_request_detail.data;
        setData(data)
        setList(list_member)
      })
    setClassicModal(true)
  };
  
 return (
    <div>
        <Button
        id = {`test-info-${row.original.sr_id}`}
        justIcon
        round
        simple
        onClick={() => informateRequest(row)}
        color="info"
        >
          <InfoIcon />
        </Button>

        <Dialog
          classes={{
            root: classes.center + " " + classes.modalRoot,
          }}
          fullWidth={true}
          maxWidth="lg"
          open={classicModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setClassicModal(false)}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
        
        {/* Detail title */}
          <AppBar position="static">
            <Toolbar>
              <IconButton
              edge="start"
              className={classes.menuButton}
              key="info"
              aria-label="Info"
              color="inherit"
              aria-label="menu"
              disabled
              >
                <InfoOutlined />
              </IconButton>

              <Typography variant="h6" className={classes.title}>
                  <FormattedMessage id={'sm.inforeq.popup.title'} defaultMessage={"Details Seed Shipment"}/>
              </Typography>

              <IconButton
              edge="end"
              key="close"
              aria-label="Close"
              color="inherit"
              aria-label="menu"
              onClick={() => setClassicModal(false)}
              >
                <Close className={classes.modalClose} />
              </IconButton>
            </Toolbar>
          </AppBar>

            <AppBar position="static">
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label= {`${<FormattedMessage id={'sm.req.tbl.hdr.srid'} defaultMessage={"SR_ID"}/>}:${row.original.sr_id}`} {...a11yProps(0)} />
                <Tab label={`${<FormattedMessage id={'sm.req.tbl.hdr.entities'} defaultMessage={"Entities"}/>} (${row.original.quantity})`} {...a11yProps(1)} />
              </Tabs>
            </AppBar>

        {/* TAB: Service request */}
        <TabPanel value={value} index={0}>
          <BasicInformation row={row} />
          <AdditionalInformation addInfo={data} />
        </TabPanel> 

            <TabPanel value={value} index={1}>
            <DialogContent
              id="classic-modal-slide-description"
              className={classes.modalBody}
            >
              <EntitiesTable list={list}/>
            </DialogContent>
            </TabPanel>

          <DialogActions className={classes.modalFooter}>
            <Button
              onClick={() => setClassicModal(false)}
              color="danger"
              simple
            >
              <FormattedMessage id={'sm.inforeq.popup.close'} defaultMessage={"Close"}/>
            </Button>
          </DialogActions>
        </Dialog>
    </div>
  );
}