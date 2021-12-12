import { AddCircleOutline, CurrencyRupee, RemoveCircleOutline } from '@mui/icons-material';
import {
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import { FieldArray, Formik, FormikProps } from 'formik';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { number, object, string } from 'yup';

import { RegisterAsProfessionalDTO, ServiceDTO } from '../../types';

interface ICreateServiceForm {
  initialValues: RegisterAsProfessionalDTO['service'];
  onClose?: (initialValues: RegisterAsProfessionalDTO['service']) => void;
  /**
   * Either use this element as standalone view component, or embedded component.
   */
  isEmbedded?: boolean;
}

export const CreateServiceForm = forwardRef((props: ICreateServiceForm, ref) => {
  let details: ServiceDTO;
  const formikRef = useRef<FormikProps<ServiceDTO>>(null);

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
              <Grid item>
                <Typography align="center" variant="h6">
                  Create new Service
                </Typography>
              </Grid>
            )}
            <Grid item container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth focused={false} error={errors.type && touched.type}>
                  <TextField
                    name="type"
                    select
                    placeholder="Select"
                    value={values.type ?? ''}
                    onChange={e => {
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    helperText="Please select type of service"
                  >
                    <MenuItem value={'plumbing'}>Plumbing</MenuItem>
                    <MenuItem value={'carpentering'}>Carpentry</MenuItem>
                    <MenuItem value={'electrician'}>Electrician</MenuItem>
                  </TextField>
                  <FormHelperText style={{ paddingLeft: '8px' }}>{errors.type}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth focused={false} error={errors.title && touched.title}>
                  <OutlinedInput
                    name="title"
                    placeholder="Service Title"
                    type="text"
                    value={values.title}
                    onChange={e => {
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                  />
                  <FormHelperText style={{ paddingLeft: '8px' }}>{errors.title}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  focused={false}
                  error={errors.description && touched.description}
                >
                  <OutlinedInput
                    name="description"
                    placeholder="Service description"
                    type="text"
                    value={values.description}
                    onChange={e => {
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                  />
                  <FormHelperText style={{ paddingLeft: '8px' }}>
                    {errors.description}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <FieldArray name="included">
                    {fieldArrayProps => {
                      const { push, remove, form } = fieldArrayProps;
                      const { values } = form;
                      const { included } = values;
                      return (
                        <div>
                          {included.map((item, index) => {
                            console.log(fieldArrayProps);
                            return (
                              <FormControl key={index} fullWidth focused={false}>
                                <div style={{ display: 'flex', margin: '4px' }}>
                                  <OutlinedInput
                                    fullWidth
                                    name={`included[${index}]`}
                                    placeholder="services included"
                                    value={included[index]}
                                    onChange={e => {
                                      handleChange(e);
                                    }}
                                  />
                                  {index === 0 && (
                                    <IconButton color="primary" onClick={() => push('')}>
                                      <AddCircleOutline />
                                    </IconButton>
                                  )}
                                  {index > 0 && (
                                    <IconButton color="primary" onClick={() => remove(index)}>
                                      <RemoveCircleOutline />
                                    </IconButton>
                                  )}
                                </div>
                              </FormControl>
                            );
                          })}
                        </div>
                      );
                    }}
                  </FieldArray>
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <FieldArray name="excluded">
                    {fieldArrayProps => {
                      const { push, remove, form } = fieldArrayProps;
                      const { values } = form;
                      const { excluded } = values;
                      return (
                        <div>
                          {excluded.map((item, index) => {
                            return (
                              <FormControl key={index} fullWidth focused={false}>
                                <div style={{ display: 'flex', margin: '4px' }}>
                                  <OutlinedInput
                                    fullWidth
                                    name={`excluded[${index}]`}
                                    placeholder="services excluded"
                                    onChange={e => {
                                      handleChange(e);
                                    }}
                                  />
                                  {index === 0 && (
                                    <IconButton color="primary" onClick={() => push('')}>
                                      <AddCircleOutline />
                                    </IconButton>
                                  )}
                                  {index > 0 && (
                                    <IconButton color="primary" onClick={() => remove(index)}>
                                      <RemoveCircleOutline />
                                    </IconButton>
                                  )}
                                </div>
                              </FormControl>
                            );
                          })}
                        </div>
                      );
                    }}
                  </FieldArray>
                </FormGroup>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth focused={false} error={errors.price && touched.price}>
                  <OutlinedInput
                    name="price"
                    placeholder="Service price"
                    type="text"
                    value={values.price}
                    onChange={e => {
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    startAdornment={
                      <InputAdornment position="start">
                        <IconButton>
                          <CurrencyRupee />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText style={{ paddingLeft: '8px' }}>{errors.price}</FormHelperText>
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

export default CreateServiceForm;

const validationSchema = object().shape({
  title: string().label('Title').required(),
  description: string().label('Description').required(),
  type: string().label('Service Type').required(),
  price: number().label('Price').required().integer({ message: 'Not valid proce' }),
});
