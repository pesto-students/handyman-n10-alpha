import { Close, StarRate } from '@mui/icons-material';
import {
  Avatar,
  Button,
  Divider,
  Grid,
  IconButton,
  OutlinedInput,
  Tooltip,
  Typography,
} from '@mui/material';
import { SubOrder, User } from '@the-crew/common';
import { Role, OrderStatus, OrderStatusColour } from '@the-crew/common/enums';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import Flippy, { BackSide, FrontSide } from 'react-flippy';
import { useDispatch } from 'react-redux';

import { StatusColours } from '../../../enums';
import { useAppSelector } from '../../../store';
import { authSelector, userSelectors } from '../../../store/slices';
import {
  OrderThunks,
  reviewThunks,
  serviceThunks,
  subOrderThunks,
  userThunks,
} from '../../../store/thunks';
import HoverRating from '../RatingBar/RatingBar';
import style from './BookingCard.module.scss';

interface IBookingCardProps {
  subOrderDetails?: SubOrder;
  serviceProviderDetails?: User;
}

export const BookingCard: React.FC<IBookingCardProps> = props => {
  const [isFlipped, setFlipped] = useState(false);
  const dispatch = useDispatch();
  const user = useAppSelector(state => userSelectors.selectAll(state.user))[0];
  const authState = useAppSelector(authSelector);
  const [shouldReRender, setShouldReRender] = useState(false);

  useEffect(() => {
    if (authState.user?.role[0] === Role.PROFESSIONAL) {
      dispatch(userThunks.getUser({ id: props.subOrderDetails.order.consumerId }));
    } else {
      dispatch(userThunks.getUser({ id: props.subOrderDetails.service.providerId }));
    }
  }, [
    authState.user?.role,
    dispatch,
    props.subOrderDetails.order.consumerId,
    props.subOrderDetails.service.providerId,
  ]);

  return (
    <Flippy flipOnClick={false} isFlipped={isFlipped} className={style.bookingServiceCard}>
      <FrontSide>
        {/* <Paper variant="outlined" className={style.bookingServiceCard}> */}
        <div className={style.bookingSummary}>
          <div className={style.serviceNameAndStatus}>
            <Typography variant="subtitle1" className={style.serviceName}>
              {props.subOrderDetails.service?.title}
            </Typography>
            <BookingStatus
              status={props.subOrderDetails.status}
              message={'Request ' + props.subOrderDetails.status}
            />
          </div>
          <Typography>
            {new Date(props.subOrderDetails.createdOn).toJSON().slice(0, 10).replace(/-/g, '/')}
          </Typography>
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
              {user?.fullName}
            </Typography>
          </div>
          {authState.user?.role[0] !== Role.PROFESSIONAL && (
            <>
              {' '}
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
                  {props.subOrderDetails.rating?.rating}
                </Typography>
              </div>
              <div className={style.bookingReviewDetails}>
                <Typography variant="subtitle1" color="textPrimary">
                  Comments:
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {props.subOrderDetails.rating?.comment}
                </Typography>
              </div>
            </>
          )}
        </div>
        <div className={style.rateNow}>
          {authState.user.role[0] === Role.PROFESSIONAL ? (
            <Button
              variant="contained"
              color="primary"
              disabled={props.subOrderDetails.status === OrderStatus.COMPLETED}
              onClick={() => {
                //let temp = new SubOrder();
                const temp = { ...props.subOrderDetails };
                temp.status = OrderStatus.COMPLETED;
                dispatch(
                  subOrderThunks.saveSubOrders({
                    payload: { bulk: [temp] },
                  }),
                );
              }}
            >
              Changes status to completed
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              disabled={props.subOrderDetails.status !== OrderStatus.COMPLETED}
              onClick={() => {
                setFlipped(!isFlipped);
              }}
            >
              Rate Now
            </Button>
          )}
          {/* <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setFlipped(!isFlipped);
            }}
          >
            Rate Now
          </Button> */}
        </div>
        {/* </Paper> */}
      </FrontSide>
      <BackSide className={style.bookingServiceCard}>
        <Grid container flexDirection="column" style={{ height: '100%' }}>
          <Grid item alignSelf="flex-end">
            <Tooltip title="Close">
              <IconButton onClick={() => setFlipped(!isFlipped)}>
                <Close fontSize="medium" />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item flex={1}>
            <Formik
              initialValues={{
                rating: props.subOrderDetails?.rating?.rating,
                comment: props.subOrderDetails?.rating?.comment,
              }}
              onSubmit={values => {
                dispatch(
                  reviewThunks.createReview({
                    payload: {
                      comment: values.comment,
                      rating: values.rating,
                      reviewerId: authState.user?.id,
                      serviceId: props.subOrderDetails.serviceId,
                    },
                  }),
                );
                setFlipped(!isFlipped);
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
                    rows={5}
                    maxRows={5}
                    name="comment"
                    placeholder="Add a comment"
                    autoFocus={true}
                    type="text"
                    value={values.comment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Button variant="contained" type="submit" color="primary">
                    Save
                  </Button>
                </form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </BackSide>
    </Flippy>
  );
};

interface StatusSummary {
  status: string;
  message: string;
}

export function BookingStatus(props: StatusSummary) {
  return (
    <div>
      <Typography
        className={style.statusMessage}
        style={{ backgroundColor: OrderStatusColour[props.status] }}
        variant="subtitle2"
      >
        {props.message}
      </Typography>
    </div>
  );
}

export default BookingCard;
