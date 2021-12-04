import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Slide,
  Typography,
} from '@mui/material';

import { AddButton } from '../../generic';
import style from './serviceCard.module.scss';
import { StarRate } from '@mui/icons-material';

interface IServiceCard {
  /**
   * Callback to view service details
   */
  viewDetails: () => void;
}

export const ServiceCard: React.FC<IServiceCard> = props => {
  return (
    <Slide direction="up" in={true} timeout={1000}>
      <Card className={style.cardRoot} elevation={6}>
        <Grid className={style.cardActionGrid} container spacing={2}>
          <Grid item xs={4}>
            <CardMedia
              className={style.media}
              image="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_30/images/supply/customer-app-supply/1634118672958-fb2d33.png"
              title="Waste Pipe Leakage"
            />
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="h6">Waste Pipe Leakage</Typography>
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
                <Typography variant="body2" color="textSecondary" component="p">
                  30.5k ratings
                </Typography>
                <Typography variant="subtitle1">₹ 119</Typography>
              </Grid>
              <Grid
                item
                xs={6}
                justifyContent="center"
                alignItems="flex-start"
                style={{ display: 'flex' }}
              >
                <AddButton />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <CardContent style={{ padding: 0 }}>
          <Divider />
          <ul>
            <li>
              <Typography variant="body2" color="textSecondary" component="p">
                Suited for repair or replacement
              </Typography>
            </li>
          </ul>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => props.viewDetails()}>
            View Details {'>'}
          </Button>
        </CardActions>
      </Card>
    </Slide>
  );
};

export default ServiceCard;
