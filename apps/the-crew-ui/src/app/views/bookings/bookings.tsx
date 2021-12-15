import { Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { OrderStatus } from '@the-crew/common/enums';
import { PaymentSession } from '@the-crew/common/models/session.model';
import { useEffect, useMemo, useState } from 'react';

import { BookingCard } from '../../components';
import {
  CartSessionService,
  generateSubOrdersToBeSaved,
  PaymentSessionService,
} from '../../services';
import { useAppDispatch, useAppSelector } from '../../store';
import { authSelector, orderActions, orderSelectors, subOrderSelector } from '../../store/slices';
import { OrderThunks, PaymentThunks, subOrderThunks } from '../../store/thunks';
import { Cart } from '../../types';
import style from './bookings.module.scss';

export default function MyBookings() {
  const [onGoing, setOnGoing] = useState(true);
  const dispatch = useAppDispatch();
  const paymentSession = useMemo(() => new PaymentSession(), []);
  const subOrders = useAppSelector(state => subOrderSelector.selectAll(state.subOrders));
  const orders = useAppSelector(state => orderSelectors.selectAll(state.order));
  const authState = useAppSelector(authSelector);
  const handleOnClicks = () => {
    setOnGoing(!onGoing);
  };

  useEffect(() => {
    if (authState.user) {
      const sessionId = PaymentSessionService.getPaymentSession();
      if (sessionId !== null) {
        paymentSession.sessionId = sessionId;
        dispatch(PaymentThunks.getPaymentSession(paymentSession)).then(res => {
          if (res.payload.payment_status === 'paid') {
            dispatch(OrderThunks.createOrder({ payload: { consumerId: authState.user.id } }))
              .unwrap()
              .then(currentOrder => {
                const cartItems = JSON.parse(CartSessionService.getCartItems());
                dispatch(
                  subOrderThunks.saveSubOrders({
                    payload: generateSubOrdersToBeSaved(cartItems, currentOrder),
                  }),
                ).then(() => {
                  orderActions.clearOrders();
                  CartSessionService.removeCartItems();
                });
              });
          }
          PaymentSessionService.removePaymentSession();
        });
      }
      dispatch(
        subOrderThunks.getSubOrders({
          join: [{ field: 'service' }, { field: 'order' }, { field: 'rating' }],
        }),
      );
    }
  }, [authState.user, dispatch, orders, paymentSession]);
  return (
    <div className={style.bookingRoot}>
      <Typography variant="h5" textAlign="center">
        My Bookings
      </Typography>
      <div style={{ textAlign: 'center' }}>
        <ButtonGroup variant="outlined" color="primary">
          <Button
            variant={onGoing ? 'contained' : 'outlined'}
            onClick={() => {
              if (!onGoing) {
                handleOnClicks();
              }
            }}
          >
            Ongoing
          </Button>
          <Button
            variant={!onGoing ? 'contained' : 'outlined'}
            onClick={() => {
              if (onGoing) {
                handleOnClicks();
              }
            }}
          >
            History
          </Button>
        </ButtonGroup>
      </div>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        {onGoing &&
          subOrders
            .filter(x => x.status === OrderStatus.SCHEDULED)
            .map((_subOrder, index) => {
              return (
                <Grid item key={index}>
                  <BookingCard subOrderDetails={_subOrder} />
                </Grid>
              );
            })}
        {!onGoing &&
          subOrders
            .filter(x => x.status !== OrderStatus.SCHEDULED)
            .map((_subOrder, index) => {
              return (
                <Grid item key={index}>
                  <BookingCard subOrderDetails={_subOrder} />
                </Grid>
              );
            })}
      </Grid>
    </div>
  );
}
