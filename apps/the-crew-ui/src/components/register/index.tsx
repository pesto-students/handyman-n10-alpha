import { SetStateAction, useState } from 'react';
import '../login/loginStyles.scss';
import {
  Paper,
  Grid,
  Typography,
  FormControl,
  Button,
  OutlinedInput,
  IconButton,
  InputAdornment,
  TextField,
} from '@material-ui/core';
import { Visibility, VisibilityOff, Email } from '@material-ui/icons';

export default function Register() {
  const [password, setpassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');

  const handleChange = (_password: string) => {
    setpassword(_password);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="root" style={{ display: 'grid', placeItems: 'center' }}>
      <Paper
        elevation={16}
        style={{
          height: '500px',
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
            <Typography variant="h6">Register</Typography>
          </Grid>
          <Grid item>
            <FormControl focused={false}>
              <Grid item style={{ padding: '0 10px 10px 0' }}>
                <OutlinedInput
                  placeholder="First Name"
                  autoFocus={true}
                  type="text"
                  value={password}
                  fullWidth={true}
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item style={{ padding: '0 10px 10px 0' }}>
                <OutlinedInput
                  placeholder="Last Name"
                  autoFocus={true}
                  type="text"
                  value={password}
                  fullWidth={true}
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item style={{ padding: '0 10px 10px 0' }}>
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
              <Grid item style={{ padding: '0 10px 10px 0' }}>
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
                      <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Grid>
              <Grid item style={{ padding: '0 10px 10px 0' }}>
                <OutlinedInput
                  placeholder="Confirm Password"
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  fullWidth={true}
                  onChange={e => {
                    handleChange(e.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary" fullWidth={true}>
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
