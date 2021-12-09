import { Cancel, CheckCircle, Close, StarRate } from '@mui/icons-material';
import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Slide,
  Tooltip,
  Typography,
} from '@mui/material';
import { ServiceRequest } from '@the-crew/common';
import { useCallback, useEffect, useState } from 'react';

import FAQsComponent from '../Faqs/Faqs';
import RatingChart from '../RatingChart/RatingChart';
import ReviewComponent from '../Review/Review';
import style from './ServiceDetails.module.scss';

interface IServiceDetails {
  data?: ServiceRequest;
  toggleDrawer?: () => void;
}

const ServiceDetail: React.FC<IServiceDetails> = props => {
  const [service, setService] = useState<Partial<ServiceRequest>>({});

  useEffect(() => {
    setService(props.data ?? {});
  }, [props.data]);

  const getRatings = useCallback(() => {
    if (props.data?.reviewIds?.length) {
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
    <Slide direction="right" in={true} timeout={1000}>
      <Grid container flexDirection="column" style={{ width: '100%' }} spacing={2}>
        <Grid item container flexDirection="row" justifyContent="space-between" alignItems="center">
          <Tooltip title={service.title ?? ''}>
            <Typography variant="h6" className={style['service-title']}>
              {service.title}
            </Typography>
          </Tooltip>
          <IconButton
            onClick={() => {
              props?.toggleDrawer();
            }}
          >
            <Close fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item container flexDirection="column" spacing={1}>
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
          <Grid item>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.data?.reviewIds.length} ratings
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">₹ {service.price}</Typography>
          </Grid>
        </Grid>
        {!!service.included?.length && (
          <Grid item container flexDirection="column">
            <Typography variant="h5" gutterBottom>
              Included
            </Typography>
            <div style={{ backgroundColor: '#f5f9ff' }}>
              <List>
                {service.included.map((item, index) => {
                  return (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircle style={{ color: 'green' }} fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  );
                })}
              </List>
            </div>
          </Grid>
        )}
        {!!service.excluded?.length && (
          <Grid item>
            <Typography variant="h5" gutterBottom>
              Excluded
            </Typography>
            <div style={{ backgroundColor: '#f5f9ff' }}>
              <List>
                {service.excluded.map((item, index) => {
                  return (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <Cancel style={{ color: 'red' }} fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  );
                })}
              </List>
            </div>
          </Grid>
        )}
        <Grid item>
          <Typography variant="h5">Frequently asked questions (//TODO)</Typography>
          <div style={{ marginTop: '10px', marginBottom: '30px' }}>
            <FAQsComponent />
            <FAQsComponent />
            <FAQsComponent />
          </div>
        </Grid>
        <Grid item>
          <Typography variant="h5">Reviews in the past month (//TODO)</Typography>
          <RatingChart />
        </Grid>
        <Grid item>
          <Typography variant="h5">Most helpful reviews (//TODO)</Typography>
          <div style={{ marginTop: '10px', marginBottom: '30px' }}>
            <ReviewComponent />
            <ReviewComponent />
            <ReviewComponent />
          </div>
        </Grid>
      </Grid>
    </Slide>
  );
};

export default ServiceDetail;
