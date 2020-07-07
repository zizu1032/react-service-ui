import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepButton from '@material-ui/core/StepButton';
import StepConnector from '@material-ui/core/StepConnector';
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl'
/* Icons  */
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    // color: '#784af4',
    color: '#bababf',
    zIndex: 1,
  }
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {active ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

export default function CustomizedSteppers() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <>
      <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
        <Step>
          <StepButton onClick={() => { setActiveStep(0) }} component={Link} to={"/request"} disabled={false} completed={false}>
            <StepLabel StepIconComponent={QontoStepIcon}>
              <FormattedMessage id={'sm.step.lbl.req'} defaultMessage={"Request"} />
            </StepLabel>
          </StepButton>
        </Step>
        <Step>
          <StepButton onClick={() => { setActiveStep(1) }} component={Link} to={"/batch"} disabled={false} completed={false}>
            <StepLabel StepIconComponent={QontoStepIcon}>
              <FormattedMessage id={'sm.step.lbl.bat'} defaultMessage={"Batch"} />
            </StepLabel>
          </StepButton>
        </Step>
        <Step>
          <StepButton onClick={() => { setActiveStep(2) }} component={Link} to={"/design"} disabled={true} completed={false}>
            <StepLabel StepIconComponent={QontoStepIcon}>
            </StepLabel>
          </StepButton>
        </Step>

        <Step>
          <StepButton onClick={() => { setActiveStep(3) }} component={Link} to={"/shipment"} disabled={true} completed={false}>
            <StepLabel StepIconComponent={QontoStepIcon}>
            </StepLabel>
          </StepButton>
        </Step>
      </Stepper>
    </>
  );
}
