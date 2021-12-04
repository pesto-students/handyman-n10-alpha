import { Container, Drawer, Grid, styled } from '@mui/material';
import { useState } from 'react';

import { ServiceCard, ServiceDetail } from '../../components';
import style from './service-list.module.scss';

const drawerWidth = 600;

export default function ServiceDetailComponent() {
  const [showDetail, setShowDetail] = useState(false);

  const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  return (
    <div className={style.service_list_container}>
      <Main open={showDetail}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          {dummy.map(x => {
            return (
              <Grid item key={x}>
                <ServiceCard
                  viewDetails={() => {
                    setShowDetail(!showDetail);
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
          // AppBar having 100, Main having 99
          zIndex: 98,
        }}
        variant="persistent"
        anchor="right"
        open={showDetail}
      >
        <Container sx={{ padding: '16px', width: '100%', marginTop: '64px' }}>
          <ServiceDetail toggleDrawer={() => setShowDetail(!showDetail)} />
        </Container>
      </Drawer>
    </div>
    // <div style={{ position: 'fixed', width: '100%', bottom: 0, zIndex: 100 }}>
    //   <AppBar position="static" color="inherit">
    //     <Toolbar>
    //       <Button
    //         variant="contained"
    //         color="primary"
    //         style={{ flexGrow: 2 }}
    //         onClick={() => {
    //           setShowCheckout(!showCheckout);
    //         }}
    //       >
    //         Checkout
    //       </Button>
    //       {showCheckout ? (
    //         <CheckOut
    //           open={showCheckout}
    //           onClose={() => {
    //             setShowCheckout(!showCheckout);
    //           }}
    //         />
    //       ) : null}
    //     </Toolbar>
    //   </AppBar>
    // </div>
  );
}

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flex: 1,
  zIndex: 99,
  padding: theme.spacing(2),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));
