import { Apartment, LocationCity, PinDrop, Public, Traffic } from '@mui/icons-material';
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material';
import { ServiceLocation } from '@the-crew/common/enums';
import { Formik, FormikProps } from 'formik';
import React, {
  forwardRef,
  SetStateAction,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { number, object, string } from 'yup';

import { authSelector } from '../../store/slices';
import { AddressDTO, RegisterAsProfessionalDTO } from '../../types';
import style from '../login/login.module.scss';

interface IUserAddressForm {
  initialValues: RegisterAsProfessionalDTO['address'];
  onClose?: (initialValues: RegisterAsProfessionalDTO['address']) => void;
  /**
   * Either use this element as standalone view component, or embedded component.
   */
  isEmbedded?: boolean;
}

const UserAddressWrapper: React.FC<IUserAddressForm> = props => {
  const authState = useSelector(authSelector);
  const history = useHistory();

  if (authState.user) {
    history.push('/services');
  }

  return (
    <div className={style.root}>
      <AddAddressForm initialValues={props.initialValues} isEmbedded={false} />
    </div>
  );
};

export const AddAddressForm = forwardRef((props: IUserAddressForm, ref) => {
  let details: AddressDTO;
  const formikRef = useRef<FormikProps<AddressDTO>>(null);

  useImperativeHandle(ref, () => {
    return {
      isValidated: () => {
        const isValid = validationSchema.isValidSync(formikRef.current.values);
        if (isValid) {
          details = formikRef.current.values;
        }
        return isValid;
      },
    };
  });

  useEffect(() => {
    return () => {
      props.onClose?.(details);
    };
  }, []);

  return (
    <Formik
      innerRef={formikRef}
      initialValues={{ ...props.initialValues }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => (
        <form
          noValidate
          style={{ flex: 1 }}
          onSubmit={evt => {
            evt.preventDefault();
            handleSubmit();
          }}
        >
          <Grid container direction="column" spacing={4}>
            {!props.isEmbedded && (
              <Grid item xs={1}>
                <Typography align="center" variant="h6">
                  Enter Address Details
                </Typography>
              </Grid>
            )}
            <Grid item container spacing={2} xs={11}>
              <Grid item xs={6}>
                <FormControl fullWidth focused={false} error={errors.flat && touched.flat}>
                  <OutlinedInput
                    name="flat"
                    placeholder="Apartment/DNo:"
                    autoFocus={true}
                    type="text"
                    value={values.flat}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end" tabIndex={-1}>
                          <Apartment />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText style={{ paddingLeft: '8px' }}>{errors.flat}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth focused={false} error={errors.street && touched.street}>
                  <OutlinedInput
                    name="street"
                    placeholder="Street/Colony"
                    autoFocus={true}
                    type="text"
                    value={values.street}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end" tabIndex={-1}>
                          <Traffic />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText style={{ paddingLeft: '8px' }}>{errors.street}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth focused={false} error={errors.city && touched.city}>
                  <OutlinedInput
                    name="city"
                    placeholder="City"
                    autoFocus={true}
                    type="city"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end" tabIndex={-1}>
                          <LocationCity />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText style={{ paddingLeft: '8px' }}>{errors.city}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth focused={false} error={errors.state && touched.state}>
                  <InputLabel>State</InputLabel>
                  <Select
                    name="state"
                    required
                    label="State"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {Object.values(ServiceLocation).map(loc => {
                      return <MenuItem value={loc}>{loc}</MenuItem>;
                    })}
                  </Select>
                  <FormHelperText style={{ paddingLeft: '8px' }}>{errors.state}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth focused={false} error={errors.pinCode && touched.pinCode}>
                  <OutlinedInput
                    name="pinCode"
                    placeholder="Pincode"
                    type="text"
                    value={values.pinCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end" tabIndex={-1}>
                          <PinDrop />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText style={{ paddingLeft: '8px' }}>{errors.pinCode}</FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
            {!props.isEmbedded && (
              <Grid item>
                <Button variant="contained" color="secondary" fullWidth={true}>
                  Submit
                </Button>
              </Grid>
            )}
          </Grid>
        </form>
      )}
    </Formik>
  );
});

export default UserAddressWrapper;

const validationSchema = object().shape({
  flat: string().required().label('Flat'),
  street: string().required().label('Street'),
  city: string().required().label('City'),
  state: string().required().label('State'),
  pinCode: number().required().label('Pin Code'),
});
