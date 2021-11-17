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
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Menu, PersonAdd, ExitToApp } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

export default function Header() {
  const history = useHistory();

  const [openSideMenu, setSideMenuStatus] = useState(false);

  const handleMenuClick = () => {
    setSideMenuStatus(!openSideMenu);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu
              onClick={() => {
                handleMenuClick();
              }}
            />
          </IconButton>
          <Typography variant="h5">The Crew</Typography>
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
              handleMenuClick();
              history.push('/');
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
