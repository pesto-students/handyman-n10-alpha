import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Button,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Menu, PersonAdd, ExitToApp } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import './headerStyles.scss';

export default function Header() {
  const history = useHistory();

  const [openSideMenu, setSideMenuStatus] = useState(false);

  const handleMenuClick = () => {
    setSideMenuStatus(!openSideMenu);
  };

  const handleLogoClick = () => {
    history.push('/');
  };

  return (
    <div style={{ position: 'sticky', width: '100%', top: 0, zIndex: 100 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu
              onClick={() => {
                handleMenuClick();
              }}
            />
          </IconButton>
          <Typography
            className="headerTitle"
            variant="h5"
            onClick={() => {
              handleLogoClick();
            }}
          >
            The Crew
          </Typography>
          <Button
            className="registerAsProfessionalBtn"
            color="inherit"
            style={{ textDecoration: 'underline' }}
          >
            Register As A Professional
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              history.push('/bookings');
            }}
          >
            My Bookings
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              history.push('/services');
            }}
          >
            services
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              history.push('/login');
            }}
          >
            Login
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              history.push('/register');
            }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={openSideMenu}
        onClose={() => {
          handleMenuClick();
        }}
        onOpen={() => {
          handleMenuClick();
        }}
        style={{ width: '16vw' }}
      >
        <List>
          <ListItem
            button
            key={'login'}
            onClick={() => {
              history.push('/login');
              handleMenuClick();
            }}
          >
            <ListItemIcon>
              <ExitToApp />{' '}
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem
            button
            key={'register'}
            onClick={() => {
              handleMenuClick();
              history.push('/register');
            }}
          >
            <ListItemIcon>
              <PersonAdd />{' '}
            </ListItemIcon>
            <ListItemText primary="Register" />
          </ListItem>
        </List>
      </SwipeableDrawer>
    </div>
  );
}
