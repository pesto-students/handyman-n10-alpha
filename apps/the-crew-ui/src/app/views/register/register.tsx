import { Abc, Email, Phone, Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  Typography,
} from '@mui/material';
import { Formik, FormikProps } from 'formik';
import {
  forwardRef,
  SetStateAction,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { object, ref, string } from 'yup';

import { authSelector } from '../../store/slices';
import { RegisterAsProfessionalDTO, RegisterDTO } from '../../types';
import style from '../login/login.module.scss';

interface IRegisterForm {
  initialValues: RegisterAsProfessionalDTO['register'];
  onClose?: (initialValues: RegisterAsProfessionalDTO['register']) => void;
  /**
   * Either use this element as standalone view component, or embedded component.
   */
  isEmbedded?: boolean;
}

export default function Register() {
  const authState = useSelector(authSelector);
  const history = useHistory();
  const [userDto] = useState(new RegisterDTO());

  if (authState.user) {
    history.push('/services');
  }

  return (
    <div className={style.root}>
      <Paper
        elevation={16}
        className={style['root-paper']}
        style={{
          height: '500px',
          width: '600px',
        }}
      >
        <RegisterForm initialValues={userDto} isEmbedded={false} />
      </Paper>
    </div>
  );
}

export const RegisterForm = forwardRef((props: IRegisterForm, ref) => {
  let details: RegisterDTO;
  const [showPassword, setShowPassword] = useState(false);
  const formikRef = useRef<FormikProps<RegisterDTO>>(null);

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

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
          style={{ flex: 1 }}
          noValidate
          onSubmit={evt => {
            evt.preventDefault();
            handleSubmit();
          }}
        >
          <Grid container direction="column" rowSpacing={4}>
            {!props.isEmbedded && (
              <Grid item xs={1}>
                <Typography align="center" variant="h6">
                  Register
                </Typography>
              </Grid>
            )}
            <Grid item container spacing={2} xs={11}>
              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  focused={false}
                  error={errors.firstName && touched.firstName}
                >
                  <OutlinedInput
                    name="firstName"
                    placeholder="First Name"
                    autoFocus={true}
                    type="text"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end" tabIndex={-1}>
                          <Abc />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText style={{ paddingLeft: '8px' }}>{errors.firstName}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth focused={false} error={errors.lastName && touched.lastName}>
                  <OutlinedInput
                    name="lastName"
                    placeholder="Last Name"
                    autoFocus={true}
                    type="text"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end" tabIndex={-1}>
                          <Abc />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText style={{ paddingLeft: '8px' }}>{errors.lastName}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth focused={false} error={errors.email && touched.email}>
                  <OutlinedInput
                    name="email"
                    placeholder="Email"
                    autoFocus={true}
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end" tabIndex={-1}>
                          <Email />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText style={{ paddingLeft: '8px' }}>{errors.email}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth focused={false} error={errors.phone && touched.phone}>
                  <OutlinedInput
                    name="phone"
                    required
                    placeholder="Mobile"
                    autoFocus={true}
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end" tabIndex={-1}>
                          <Phone />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText style={{ paddingLeft: '8px' }}>{errors.phone}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth focused={false} error={errors.password && touched.password}>
                  <OutlinedInput
                    name="password"
                    placeholder="Password"
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText style={{ paddingLeft: '8px' }}>{errors.password}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  fullWidth
                  focused={false}
                  error={errors.confirmPassword && touched.confirmPassword}
                >
                  <OutlinedInput
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    type={showPassword ? 'text' : 'password'}
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText style={{ paddingLeft: '8px' }}>
                    {errors.confirmPassword}
                  </FormHelperText>
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

const validationSchema = object().shape({
  firstName: string().label('First Name').required(),
  lastName: string().label('Last Name').required(),
  email: string().label('Email').required().email(),
  phone: string()
    .label('Mobile')
    .required()
    .matches(/^[789]\d{9}$/, { message: 'Enter Valid mobile number' }),
  password: string().label('Password').required(),
  confirmPassword: string()
    .label('Confirm Password')
    .required()
    .oneOf([ref('password'), null], 'Passwords must match'),
});
