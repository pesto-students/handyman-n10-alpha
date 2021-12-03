import './headerStyles.scss';

import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ExitToApp, Menu, PersonAdd } from '@material-ui/icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { authSelector } from '../../../store/reducers';
import { AuthThunks } from '../../../store/thunks';

export default function Header() {
  const history = useHistory();
  const authState = useSelector(authSelector);
  const dispatch = useDispatch();
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
          <div className="headerTitle">
            <Typography
              variant="h5"
              style={{ cursor: 'pointer', display: 'inline-block' }}
              onClick={() => {
                handleLogoClick();
              }}
            >
              The Crew
            </Typography>
          </div>
          <Button
            className="registerAsProfessionalBtn"
            color="inherit"
            style={{ textDecoration: 'underline' }}
          >
            Register As A Professional
          </Button>
          {!authState.user ? (
            <>
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
            </>
          ) : (
            <Button color="inherit" onClick={() => dispatch(AuthThunks.logout())}>
              Logout
            </Button>
          )}
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
