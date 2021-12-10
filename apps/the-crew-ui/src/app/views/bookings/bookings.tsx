import { Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { PaymentSession } from '@the-crew/common/models/session.model';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { BookingCard } from '../../components';
import { PaymentSessionService } from '../../services';
import { useAppDispatch, useAppSelector } from '../../store';
import { subOrderSelector } from '../../store/slices';
import { PaymentThunks, subOrderThunks } from '../../store/thunks';
import style from './bookings.module.scss';

export default function MyBookings() {
  const [onGoing, setOnGoing] = useState(true);
  const dispatch = useAppDispatch();
  const sessionId = PaymentSessionService.getPaymentSession();
  const paymentSession = useMemo(() => new PaymentSession(), []);
  paymentSession.sessionId = sessionId;
  const orders = useAppSelector(state => subOrderSelector.selectAll(state.subOrders));

  const handleOnClicks = () => {
    setOnGoing(!onGoing);
  };
  useEffect(() => {
    if (sessionId) {
      dispatch(PaymentThunks.getPaymentSession(paymentSession)).then(res => {
        if (res.payload.payment_status === 'paid') {
          console.log('place orders');
        }
      });
    }
    dispatch(
      subOrderThunks.getSubOrders({
        join: [{ field: 'provider' }, { field: 'reviews' }],
      }),
    );
  }, [dispatch, paymentSession, sessionId]);
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
        <Grid item>
          <BookingCard />
        </Grid>
        <Grid item>
          <BookingCard />
        </Grid>
        <Grid item>
          <BookingCard />
        </Grid>
      </Grid>
    </div>
  );
}
