import { Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { useState } from 'react';

import { BookingCard } from '../../components';
import style from './bookings.module.scss';

export default function MyBookings() {
  const [onGoing, setOnGoing] = useState(true);

  const handleOnClicks = () => {
    setOnGoing(!onGoing);
  };

  return (
    <div className={style.bookingRoot}>
      <Typography variant="h5" textAlign="center">
        My Bookings
      </Typography>
      <div style={{textAlign: 'center'}}>
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
