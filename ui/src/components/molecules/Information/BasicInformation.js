import React from 'react';

import Typography from "@material-ui/core/Typography";

import GridItem from "components/molecules/Grid/GridItem.js";
import GridContainer from "components/molecules/Grid/GridContainer.js";

import FormLabel from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";

//view expansion panel
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import styles from "assets/jss/material-dashboard-pro-react/views/notificationsStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function BasicInformation(props) {
  const classes = useStyles();
  const { row } = props

  return (
          <ExpansionPanel expanded={true}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Basic information</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <form>
                <GridContainer>
                <GridItem xs={12} sm={12} md={1}>
                  <FormLabel className={classes.labelHorizontal}>
                    Service: 
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Input
                    id="service"
                    readOnly
                    defaultValue={row.original.service}
                    inputProps={{
                      type: "text"
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={1}>
                  <FormLabel className={classes.labelHorizontal}>
                    Requester: 
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Input
                    id="requester"
                    defaultValue={row.original.requester}
                    inputProps={{
                      type: "text"
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={1}>
                  <FormLabel className={classes.labelHorizontal}>
                    Entities:
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Input
                    id="entities"
                    readOnly
                    defaultValue={row.original.entities}
                    inputProps={{
                      type: "text"
                    }}
                  />
                </GridItem>
                </GridContainer>
                {/* Other Ones*/ }
                <GridContainer>
                <GridItem xs={12} sm={12} md={1}>
                  <FormLabel className={classes.labelHorizontal}>
                    Crop: 
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Input
                    id="crop"
                    defaultValue={row.original.crop}
                    inputProps={{
                      type: "text"
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={1}>
                  <FormLabel className={classes.labelHorizontal}>
                    Requester Program: 
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Input
                    id="requester_program"
                    readOnly
                    inputProps={{
                      type: "text"
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={1}>
                  <FormLabel className={classes.labelHorizontal}>
                    Service Type:
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Input
                    id="service_type"
                    readOnly
                    defaultValue={row.original.sr_type}
                    inputProps={{
                      type: "text"
                    }}
                  />
                </GridItem>
                </GridContainer>
              </form>
            </ExpansionPanelDetails>
          </ExpansionPanel>
  );
}