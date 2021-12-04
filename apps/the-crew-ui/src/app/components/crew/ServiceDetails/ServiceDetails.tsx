import { Cancel, CheckCircle, Close, StarRate } from '@mui/icons-material';
import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Slide,
  Typography,
} from '@mui/material';

import FAQsComponent from '../Faqs/Faqs';
import RatingChart from '../RatingChart/RatingChart';
import ReviewComponent from '../Review/Review';

interface IServiceDetails {
  toggleDrawer?: () => void;
}

const ServiceDetail: React.FC<IServiceDetails> = props => {
  const obj = {
    included: {
      included: true,
      points: [
        'Diagnosis and Repair of leakage between wash-basin and waste pipe',
        'Procurement of spare parts (at extra cost)',
      ],
      color: 'green',
    },
    excluded: {
      included: false,
      points: ['Tiling, cementing and other such masonry work'],
      color: 'red',
    },
  };

  return (
    <Slide direction="right" in={true} timeout={1000}>
      <Grid container flexDirection="column" style={{ width: '100%' }} spacing={1}>
        <Grid item container flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Waste Pipe Leakage</Typography>
          <IconButton
            onClick={() => {
              props?.toggleDrawer();
            }}
          >
            <Close fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item container flexDirection="column" spacing={1}>
          <Grid item>
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
                <span>4.73</span>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textSecondary" component="p">
                30.5k ratings
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h6">₹ 119</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h5">Included</Typography>
          <div style={{ backgroundColor: '#f5f9ff' }}>
            <List>
              {obj.included.points.map(x => {
                return (
                  <ListItem key={x}>
                    <ListItemIcon>
                      <CheckCircle style={{ color: 'green' }} fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary={x} />
                  </ListItem>
                );
              })}
            </List>
          </div>
        </Grid>
        <Grid item>
          <Typography variant="h5">Excluded</Typography>
          <div style={{ backgroundColor: '#f5f9ff' }}>
            <List>
              {obj.excluded.points.map(x => {
                return (
                  <ListItem key={x}>
                    <ListItemIcon>
                      <Cancel style={{ color: 'red' }} fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary={x} />
                  </ListItem>
                );
              })}
            </List>
          </div>
        </Grid>
        <Grid item>
          <Typography variant="h5">Frequently asked questions</Typography>
          <div style={{ marginTop: '10px', marginBottom: '30px' }}>
            <FAQsComponent />
            <FAQsComponent />
            <FAQsComponent />
          </div>
        </Grid>
        <Grid item>
          <Typography variant="h5">Reviews in the past month</Typography>
          <div>
            <RatingChart />
          </div>
        </Grid>
        <Grid item>
          <Typography variant="h5">Most helpful reviews</Typography>
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
