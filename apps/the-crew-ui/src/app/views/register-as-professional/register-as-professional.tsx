import { Box, Button, Grid, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { useRef, useState } from 'react';

import { registerBanner } from '../../../assets/images/register';
import { RegisterForm } from '../register/register';
import { getInitialState } from '../register/register.helper';
import { CreateServiceForm } from '../service-create/service-create';
import { AddAddressForm } from '../user-address/user-address';
import style from './register-as-professional.module.scss';

import type { RegisterAsProfessionalDTO } from '../../types';

const steps = ['Register', 'Enter Address', 'Create a Service'];

export default function RegisterAsProfessional() {
  const [registerDetails, setRegisterDetails] = useState<RegisterAsProfessionalDTO>(
    getInitialState(),
  );
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});
  const ref = useRef(null);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleComplete = () => {
    if (ref.current.isValidated()) {
      const newCompleted = completed;
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);
      handleNext();
    }
  };

  const renderActiveComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <RegisterForm
            ref={ref}
            isEmbedded={true}
            initialValues={registerDetails.register}
            onClose={payload => {
              setRegisterDetails({ ...registerDetails, register: payload });
            }}
          />
        );
      case 1:
        return (
          <AddAddressForm
            ref={ref}
            isEmbedded={true}
            initialValues={registerDetails.address}
            onClose={payload => {
              setRegisterDetails({ ...registerDetails, address: payload });
            }}
          />
        );
      case 2:
        return (
          <CreateServiceForm
            ref={ref}
            isEmbedded={true}
            initialValues={registerDetails.service}
            onClose={payload => {
              setRegisterDetails({ ...registerDetails, service: payload });
            }}
          />
        );
      default:
        return <Typography>Hello</Typography>;
    }
  };

  return (
    <Grid container flex={1}>
      <Grid
        item
        container
        xs={6}
        className={style['login-banner']}
        style={{ backgroundImage: `url(${registerBanner})` }}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h2" color="white">
          Register as Professional
        </Typography>
      </Grid>
      <Grid item container flexDirection="column" rowSpacing={3} xs={6} padding={2}>
        <Grid item>
          <Stepper alternativeLabel activeStep={activeStep} style={{ width: '100%' }}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item container flexDirection="column" flex={1}>
          {renderActiveComponent()}
          <Box
            sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'space-between' }}
          >
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
            <Button color="secondary" onClick={handleComplete}>
              {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
