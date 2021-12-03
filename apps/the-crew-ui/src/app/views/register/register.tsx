import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  Typography,
} from '@material-ui/core';
import { Email, Visibility, VisibilityOff } from '@material-ui/icons';
import { SetStateAction, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { authSelector } from '../../store/reducers';
import style from '../login/login.module.scss';

export default function Register() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const authState = useSelector(authSelector);
  const history = useHistory();

  if (authState.user) {
    history.push('/services');
  }

  const handleChange = (_password: string) => {
    setPassword(_password);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={style.root}>
      <Paper
        elevation={16}
        className={style['root-paper']}
        style={{
          height: '500px',
          width: '300px',
        }}
      >
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <Typography align="center" variant="h6">
              Register
            </Typography>
          </Grid>
          <Grid item container direction="column" spacing={2}>
            <Grid item>
              <FormControl fullWidth focused={false}>
                <OutlinedInput
                  placeholder="First Name"
                  autoFocus={true}
                  type="text"
                  value={password}
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl fullWidth focused={false}>
                <OutlinedInput
                  placeholder="Last Name"
                  autoFocus={true}
                  type="text"
                  value={password}
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl fullWidth focused={false}>
                <OutlinedInput
                  placeholder="Email"
                  autoFocus={true}
                  type="email"
                  value={password}
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <Email />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl fullWidth focused={false}>
                <OutlinedInput
                  placeholder="Password"
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => {
                    handleChange(e.target.value);
                  }}
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
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl fullWidth focused={false}>
                <OutlinedInput
                  placeholder="Confirm Password"
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => {
                    handleChange(e.target.value);
                  }}
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
              </FormControl>
            </Grid>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" fullWidth={true}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
