import { Button, ButtonGroup, Grid, Typography } from '@material-ui/core';
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
      <Typography className="myBookingsHeader" variant="h5">
        My Bookings
      </Typography>
      <div className="bookingsButtonGroup">
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
      <div className="bookingsGrid">
        <Grid container spacing={1}>
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
    </div>
  );
}
