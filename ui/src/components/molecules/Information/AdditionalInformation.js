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

export default function AdditionalInformation(props) {
  const classes = useStyles();
  const {addInfo} = props; 

  if(addInfo.length > 0) {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography className={classes.heading}>Additional information</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <form>
                    <GridContainer>
                    <GridItem xs={12} sm={12} md={1}>
                        <FormLabel className={classes.labelHorizontal}>
                        Destiantion Country: 
                        </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <Input
                        id="destination_country"
                        readOnly
                        defaultValue={addInfo[2].value}
                        inputProps={{
                            type: "text"
                        }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={1}>
                        <FormLabel className={classes.labelHorizontal}>
                        Source Country: 
                        </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <Input
                        id="source_country"
                        readOnly
                        defaultValue={addInfo[0].value}
                        inputProps={{
                            type: "text"
                        }}
                        />
                    </GridItem>
                    </GridContainer>

                    <GridContainer>
                    <GridItem xs={12} sm={12} md={1}>
                        <FormLabel className={classes.labelHorizontal}>
                        Recipient Name: 
                        </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <Input
                        id="recipient_name"
                        readOnly
                        defaultValue={addInfo[7].value}
                        inputProps={{
                            type: "text"
                        }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={1}>
                        <FormLabel className={classes.labelHorizontal}>
                        Email: 
                        </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <Input
                        id="email"
                        readOnly
                        defaultValue={addInfo[4].value}
                        inputProps={{
                            type: "text"
                        }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={1}>
                        <FormLabel className={classes.labelHorizontal}>
                        Street:
                        </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <Input
                        id="street"
                        readOnly
                        defaultValue={addInfo[15].value}
                        inputProps={{
                            type: "text"
                        }}
                        />
                    </GridItem>
                    </GridContainer>

                    <GridContainer>
                    <GridItem xs={12} sm={12} md={1}>
                        <FormLabel className={classes.labelHorizontal}>
                        Position: 
                        </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <Input
                        id="position"
                        readOnly
                        defaultValue={addInfo[10].value}
                        inputProps={{
                            type: "text"
                        }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={1}>
                        <FormLabel className={classes.labelHorizontal}>
                        Phone: 
                        </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <Input
                        id="phone"
                        readOnly
                        defaultValue={addInfo[3].value}
                        inputProps={{
                            type: "text"
                        }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={1}>
                        <FormLabel className={classes.labelHorizontal}>
                        City:
                        </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <Input
                        id="city"
                        readOnly
                        defaultValue={addInfo[6].value}
                        inputProps={{
                            type: "text"
                        }}
                        />
                    </GridItem>
                    </GridContainer>

                    <GridContainer>
                    <GridItem xs={12} sm={12} md={1}>
                        <FormLabel className={classes.labelHorizontal}>
                        Institution: 
                        </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <Input
                        id="institution"
                        readOnly
                        defaultValue={addInfo[13].value}
                        inputProps={{
                            type: "text"
                        }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={1}>
                        <FormLabel className={classes.labelHorizontal}>
                        Country:
                        </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <Input
                        id="country"
                        readOnly
                        defaultValue={addInfo[12].value}
                        inputProps={{
                            type: "text"
                        }}
                        />
                    </GridItem>
                    </GridContainer>

                    <GridContainer>
                    <GridItem xs={12} sm={12} md={1}>
                        <FormLabel className={classes.labelHorizontal}>
                        Department: 
                        </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <Input
                        id="department"
                        readOnly
                        defaultValue={''}
                        inputProps={{
                            type: "text"
                        }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={1}>
                        <FormLabel className={classes.labelHorizontal}>
                        Zip Code:
                        </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <Input
                        id="zip_code"
                        readOnly
                        defaultValue={addInfo[8].value}
                        inputProps={{
                            type: "text"
                        }}
                        />
                    </GridItem>
                    </GridContainer>

                    <GridContainer>
                    <GridItem xs={12} sm={12} md={1}>
                        <FormLabel className={classes.labelHorizontal}>
                        Type of Material: 
                        </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <Input
                        id="type_material"
                        readOnly
                        defaultValue={addInfo[14].value}
                        inputProps={{
                            type: "text"
                        }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={1}>
                        <FormLabel className={classes.labelHorizontal}>
                        Purpose of Material: 
                        </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <Input
                        id="purpose_material"
                        readOnly
                        defaultValue={addInfo[9].value}
                        inputProps={{
                            type: "text"
                        }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={1}>
                        <FormLabel className={classes.labelHorizontal}>
                        Treatment Required:
                        </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <Input
                        id="treatment_required"
                        readOnly
                        defaultValue={addInfo[11].value}
                        inputProps={{
                            type: "text"
                        }}
                        />
                    </GridItem>
                    </GridContainer>

                    <GridContainer>
                    <GridItem xs={12} sm={12} md={1}>
                        <FormLabel className={classes.labelHorizontal}>
                        ICC for Analisys:
                        </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <Input
                        id="icc_analisys"
                        readOnly
                        defaultValue={addInfo[1].value}
                        inputProps={{
                            type: "text"
                        }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={1}>
                        <FormLabel className={classes.labelHorizontal}>
                        ICC for Shipping: 
                        </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <Input
                        id="purpose_material"
                        readOnly
                        defaultValue={addInfo[5].value}
                        inputProps={{
                            type: "text"
                        }}
                        />
                    </GridItem>
                    </GridContainer>
                </form>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    } 

    return null;
}