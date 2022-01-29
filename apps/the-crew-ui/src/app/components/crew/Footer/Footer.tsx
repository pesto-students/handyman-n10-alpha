import { AppBar, Container, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#212121' }}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography
            variant="body1"
            color="inherit"
            style={{ width: '100%', textAlign: 'center' }}
          >
            © 2021-22 The Crew India Private Ltd.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
