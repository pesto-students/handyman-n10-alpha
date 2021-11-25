import { AppBar, Toolbar, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default function Footer() {
  return (
    <div style={{ position: 'fixed', width: '100%', bottom: 0, zIndex: 100 }}>
      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              © 2021-22 The Crew Technologies India Pvt. Ltd.
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
