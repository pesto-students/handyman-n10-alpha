import { Avatar, Divider, Paper, Typography } from '@mui/material';
import { StarRate } from '@mui/icons-material';

import { StatusColours } from '../../../enums';
import style from './BookingCard.module.scss';

export default function BookingCard() {
  return (
    <Paper variant="outlined" className={style.bookingServiceCard}>
      <div className={style.bookingSummary}>
        <div className={style.serviceNameAndStatus}>
          <Typography variant="subtitle1" className={style.serviceName}>
            Air Conditioner
          </Typography>
          <BookingStatus status={'Completed'} message={'Request Completed'} />
        </div>
        <Typography>October 3,2021</Typography>
      </div>
      <Divider />
      <div className={style.bookingDetails}>
        <div className={style.bookingAvatar}>
          <Avatar
            variant="circular"
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhhbmR5bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div className={style.bookingReviewDetails}>
          <Typography variant="subtitle1" color="textPrimary">
            Name:{' '}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Krishna
          </Typography>
        </div>
        <div className={style.bookingReviewDetails}>
          <Typography variant="subtitle1" color="textPrimary">
            You rated:{' '}
          </Typography>
          <Typography variant="body2" style={{ color: 'green', fontWeight: 600 }}>
            <StarRate
              fontSize="medium"
              style={{
                display: 'inline-block',
                position: 'relative',
                marginRight: '1px',
                color: 'green',
              }}
            />
            4.73
          </Typography>
        </div>
        <div className={style.bookingReviewDetails}>
          <Typography variant="subtitle1" color="textPrimary">
            Comments:
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Excellent work received
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

interface StatusSummary {
  status: string;
  message: string;
}

export function BookingStatus(props: StatusSummary) {
  return (
    <div>
      <Typography
        className={style.statusMessage}
        style={{ backgroundColor: StatusColours[props.status] }}
        variant="subtitle2"
      >
        {props.message}
      </Typography>
    </div>
  );
}
