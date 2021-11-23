import '../login/loginStyles.scss';

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
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useLoginMutation } from '../../store/queries';
import { fetchTokens } from '../../store/thunks';

export default function Login() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  // const onLogin = useCallback(
  //   () => login({ email: 'akki@gmail.com', password: 'akki@gmail.com' }),
  //   [login],
  // );

  const onLogin = () => {
    dispatch(fetchTokens({ email, password }));
  };

  const handleChange = (_password: string) => {
    setPassword(_password);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="root" style={{ display: 'grid', placeItems: 'center' }}>
      <Paper
        elevation={16}
        style={{
          height: '300px',
          width: '300px',
          overflow: 'hidden',
          margin: '50px',
          padding: '20px',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Grid container sm direction="column" spacing={2}>
          <Grid item style={{ textAlign: 'center' }}>
            <Typography variant="h6">Login</Typography>
          </Grid>
          <Grid item>
            <FormControl focused={false} fullWidth={true}>
              <Grid item style={{ paddingBottom: '16px' }}>
                <OutlinedInput
                  placeholder="Email"
                  autoFocus={true}
                  type="email"
                  value={password}
                  fullWidth={true}
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
              </Grid>
              <Grid item style={{ paddingBottom: '16px' }}>
                <OutlinedInput
                  placeholder="Password"
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  fullWidth={true}
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
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary" fullWidth={true} onClick={onLogin}>
                  Submit
                </Button>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
