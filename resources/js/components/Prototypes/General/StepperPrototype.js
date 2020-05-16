import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import * as protoypesActions from '../../../actions/protoypesActions'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    avanzarButton: {
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(2),
        textAlign: 'center',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Implantación', 'Germinación', 'Floración', 'Corte', 'Secado'];
}

/* function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
} */

const StepperPrototype = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    /*  const handleBack = () => {
       setActiveStep((prevActiveStep) => prevActiveStep - 1);
     }; */

    /*   const handleReset = () => {
        setActiveStep(0);
      }; */

    return (
        <div className={classes.root}>
            <Stepper activeStep={3} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        {/* <Button onClick={handleReset}>Reset</Button> */}
                    </div>
                ) : (
                        <div>
                            <Typography className={classes.instructions}>{/* {getStepContent(activeStep)} */}</Typography>
                            <div>
                                {/* <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button> */}
                                <Button variant="contained" className={classes.avanzarButton} color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}


const mapStateToProps = (prototypesReducer) => prototypesReducer

/* const mapDispatchToProps = {
    cancelar,
    traerDetalleInterval,
}; */

export default connect(mapStateToProps, protoypesActions)(StepperPrototype);