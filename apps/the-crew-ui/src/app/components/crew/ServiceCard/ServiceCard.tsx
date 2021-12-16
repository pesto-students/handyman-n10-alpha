import { StarRate } from '@mui/icons-material';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Slide,
  Typography,
} from '@mui/material';
import { ServiceRequest } from '@the-crew/common';
import { Role } from '@the-crew/common/enums';
import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store';
import { authSelector, cartActions, cartSelectors } from '../../../store/slices';
import { AddButton } from '../../generic';
import style from './serviceCard.module.scss';

interface IServiceCard {
  data: ServiceRequest;
  /**
   * Callback to view service details
   */
  toggleViewDetails: () => void;
}

export const ServiceCard: React.FC<IServiceCard> = props => {
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector(state => cartSelectors.selectById(state.cart, props.data.id));
  const authState = useAppSelector(authSelector);

  const onServiceAdd = (count: number) => {
    if (count) {
      if (count === 1) {
        dispatch(cartActions.addItem({ ...props.data, quantity: 1 }));
      } else {
        dispatch(cartActions.addQuantity({ id: props.data.id, changes: { quantity: count } }));
      }
    }
  };

  const onServiceRemove = (count: number) => {
    if (!count) {
      dispatch(cartActions.removeItem(props.data.id));
    } else {
      dispatch(cartActions.removeQuantity({ id: props.data.id, changes: { quantity: count } }));
    }
  };

  const getRatings = useCallback(() => {
    if (props.data.reviewIds.length) {
      return (
        props.data?.reviews.reduce((acc, item) => {
          acc += item.rating;
          return acc;
        }, 0) / props.data.reviewIds.length
      );
    }
    return 0;
  }, [props.data]);

  return (
    <Slide direction="up" in={true} timeout={1000}>
      <Card className={style.cardRoot} elevation={6}>
        <Grid className={style.cardActionGrid} container spacing={2}>
          <Grid item xs={4}>
            <CardMedia
              className={style.media}
              image="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_30/images/supply/customer-app-supply/1634118672958-fb2d33.png"
              title={props.data.title}
            />
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="h6">{props.data.title}</Typography>
                <Grid
                  container
                  item
                  justifyContent="start"
                  alignItems="center"
                  spacing={0.5}
                  style={{
                    color: 'green',
                    fontWeight: 600,
                  }}
                >
                  <Grid item>
                    <StarRate fontSize="medium" />
                  </Grid>
                  <Grid item>
                    <span>{getRatings()}</span>
                  </Grid>
                </Grid>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.data.reviewIds.length} ratings
                </Typography>
                <Typography variant="subtitle1">₹ {props.data.price}</Typography>
              </Grid>
              {authState.user ? (
                authState.user.role[0] === Role.PROFESSIONAL ? null : (
                  <Grid
                    item
                    xs={6}
                    justifyContent="center"
                    alignItems="flex-start"
                    style={{ display: 'flex' }}
                  >
                    <AddButton
                      count={cartItem?.quantity ?? 0}
                      onAdd={onServiceAdd}
                      onRemove={onServiceRemove}
                    />
                  </Grid>
                )
              ) : (
                <Grid
                  item
                  xs={6}
                  justifyContent="center"
                  alignItems="flex-start"
                  style={{ display: 'flex' }}
                >
                  <AddButton
                    count={cartItem?.quantity ?? 0}
                    onAdd={onServiceAdd}
                    onRemove={onServiceRemove}
                  />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
        <CardContent style={{ padding: 0 }}>
          <Divider />
          <ul>
            {props.data.description.split(/[\r\n]+/g).map((point, index) => {
              return (
                <li key={index}>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {point}
                  </Typography>
                </li>
              );
            })}
          </ul>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => props.toggleViewDetails()}>
            View Details {'>'}
          </Button>
        </CardActions>
      </Card>
    </Slide>
  );
};

export default ServiceCard;
