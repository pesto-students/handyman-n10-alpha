import { Box, Container, Drawer, Grid, styled, Typography } from '@mui/material';
import { ServiceRequest } from '@the-crew/common';
import { useEffect, useState } from 'react';

import { ServiceCard, ServiceDetail } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store';
import { cartSelectors, serviceSelectors } from '../../store/slices';
import { serviceThunks } from '../../store/thunks';
import style from './service-list.module.scss';

const drawerWidth = 600;

export default function ServiceDetailComponent() {
  const dispatch = useAppDispatch();
  const [showDetail, setShowDetail] = useState(false);
  const services = useAppSelector(state => serviceSelectors.selectAll(state.services));
  const cartItems = useAppSelector(state => cartSelectors.selectAll(state.cart));

  useEffect(() => {
    dispatch(serviceThunks.getServices({ join: [{ field: 'provider' }, { field: 'reviews' }] }));
  }, [dispatch]);

  return (
    <div className={style.service_list_container}>
      <Main open={showDetail}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          {services.map((x: ServiceRequest, index: number) => {
            return (
              <Grid item key={index}>
                <ServiceCard
                  details={x}
                  toggleViewDetails={() => {
                    setShowDetail(!showDetail);
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
        {!!cartItems.length && (
          <Box className={style['checkout-container']}>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              flexWrap="nowrap"
              paddingX="16px"
              className={style['checkout-bar']}
            >
              <Grid
                item
                container
                display="inline-flex"
                justifyContent="start"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <Typography
                    variant="h6"
                    component="div"
                    textAlign="center"
                    style={{ width: '32px', border: '1px solid' }}
                  >
                    {cartItems.reduce((acc, item) => {
                      acc = acc + (item.quantity ?? 1);
                      return acc;
                    }, 0)}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    {cartItems.reduce((acc, item) => {
                      const total = (item.quantity ?? 1) * item.price;
                      acc = acc + total;
                      return acc;
                    }, 0)}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h6">Continue</Typography>
              </Grid>
            </Grid>
          </Box>
        )}
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
