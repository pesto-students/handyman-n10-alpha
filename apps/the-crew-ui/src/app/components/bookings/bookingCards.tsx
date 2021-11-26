import { Avatar, Divider, Grid, Paper, Typography } from '@material-ui/core';
import { StarRate } from '@material-ui/icons';
import BookingStatus from './bookingStatus';
import './myBookingsStyles.scss';

export default function BookingCard() {
  return (
    <Paper variant="outlined" className="bookingServiceCard">
      <div className="bookingSummary">
        <div className="serviceNameAndStatus">
          <Typography variant="subtitle1" className="serviceName">
            Air Conditioner
          </Typography>
          <BookingStatus status={'Completed'} message={'Request Completed'} />
        </div>
        <Typography>October 3,2021</Typography>
      </div>
      <Divider />
      <div className="bookingDetails">
        <div className="bookingavatar">
          <Avatar
            variant="circle"
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhhbmR5bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div className="bookingReviewDetails">
          <Typography variant="subtitle1" color="textPrimary">
            Name:{' '}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Krishna
          </Typography>
        </div>
        <div className="bookingReviewDetails">
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
        <div className="bookingReviewDetails">
          <Typography variant="subtitle1" color="textPrimary">
            Comments:
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Excellent work recieved
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
