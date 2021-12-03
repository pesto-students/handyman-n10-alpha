import { AppBar, Container, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default function Footer() {
  return (
    <AppBar position="static">
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
