import { Comment, StarRate } from '@mui/icons-material';
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  Typography,
} from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import Flippy, { BackSide, FrontSide } from 'react-flippy';

import { StatusColours } from '../../../enums';
import HoverRating from '../RatingBar';
import style from './BookingCard.module.scss';

export default function BookingCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <Flippy flipOnClick={false} isFlipped={isFlipped} className={style.bookingServiceCard}>
      <FrontSide>
        {/* <Paper variant="outlined" className={style.bookingServiceCard}> */}
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
              sx={{ height: '120px', width: '120px' }}
              alt=""
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
        <div className={style.rateNow}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setIsFlipped(!isFlipped);
            }}
          >
            Rate Now
          </Button>
        </div>
        {/* </Paper> */}
      </FrontSide>
      <BackSide className={style.bookingServiceCard}>
        {/* <Paper variant="outlined" className={style.bookingServiceCard}> */}
        <div style={{ height: '100%' }}>
          <Formik
            initialValues={{ rating: 1, comment: '' }}
            onSubmit={values => {
              console.log('rating saved ' + values.rating);
              setIsFlipped(!isFlipped);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form
                className={style.rating}
                noValidate
                onSubmit={evt => {
                  evt.preventDefault();
                  handleSubmit();
                }}
              >
                <HoverRating
                  name="rating"
                  onChange={(val: number) => {
                    values.rating = val;
                  }}
                />

                <OutlinedInput
                  fullWidth
                  multiline
                  maxRows={5}
                  name="comment"
                  placeholder="Add a comment"
                  autoFocus={true}
                  type="text"
                  value={values.comment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <Comment />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <Button variant="contained" type="submit" color="primary">
                  Save
                </Button>
              </form>
            )}
          </Formik>
        </div>
        {/* </Paper> */}
      </BackSide>
    </Flippy>
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
