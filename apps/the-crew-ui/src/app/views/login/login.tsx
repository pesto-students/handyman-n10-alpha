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
} from '@material-ui/core';
import { Email, Visibility, VisibilityOff } from '@material-ui/icons';
import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { object, string } from 'yup';

import { authSelector } from '../../store/reducers';
import { loginAndFetchTokens } from '../../store/thunks';
import style from './login.module.scss';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const authState = useSelector(authSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  if (authState.user) {
    history.push('/services');
  }

  return (
    <div className={style.root}>
      <Paper elevation={16} className={style['root-paper']}>
        <Grid container direction="column" spacing={4}>
          <Grid item style={{ textAlign: 'center' }}>
            <Typography variant="h6">Login</Typography>
          </Grid>
          <Grid item>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={loginSchema}
              onSubmit={values => {
                dispatch(loginAndFetchTokens(values));
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form
                  noValidate
                  onSubmit={evt => {
                    evt.preventDefault();
                    handleSubmit();
                  }}
                >
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <FormControl fullWidth focused={true} error={errors.email && touched.email}>
                        <OutlinedInput
                          fullWidth
                          required
                          name="email"
                          placeholder="Email"
                          autoFocus={true}
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton edge="end">
                                <Email />
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                        <FormHelperText style={{ paddingLeft: '8px' }}>
                          {errors.email}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <FormControl
                        fullWidth
                        focused={false}
                        error={errors.password && touched.password}
                      >
                        <OutlinedInput
                          fullWidth
                          required
                          name="password"
                          placeholder="Password"
                          type={showPassword ? 'text' : 'password'}
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                              >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                        <FormHelperText style={{ paddingLeft: '8px' }}>
                          {errors.password}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="secondary"
                        disabled={!!(errors.email || errors.password)}
                        style={{ marginTop: '16px' }}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

const loginSchema = object().shape({
  email: string().label('Email').required().email(),
  password: string().label('Password').required(),
});
