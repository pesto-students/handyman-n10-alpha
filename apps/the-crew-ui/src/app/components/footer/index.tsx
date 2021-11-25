import { AppBar, Toolbar, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default function Footer() {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2021-22 The Crew Technologies India Pvt. Ltd.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
