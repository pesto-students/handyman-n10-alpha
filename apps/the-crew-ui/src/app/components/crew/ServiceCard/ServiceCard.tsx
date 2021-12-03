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
} from '@material-ui/core';
import StarRateIcon from '@material-ui/icons/StarRate';

import { AddButton } from '../../generic';
import style from './serviceCard.module.scss';

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
        <CardActionArea className={style.cardAction}>
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
                  <span
                    style={{
                      color: 'green',
                      fontWeight: 600,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'start',
                      alignItems: 'center',
                    }}
                  >
                    <StarRateIcon
                      fontSize="medium"
                      style={{
                        display: 'inline-block',
                        position: 'relative',
                        marginRight: '1px',
                        color: 'green',
                      }}
                    />
                    <span>4.73</span>
                  </span>
                  <Typography variant="body2" color="textSecondary" component="p">
                    30.5k ratings
                  </Typography>
                  <Typography variant="subtitle1">₹ 119</Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  justifyContent="center"
                  alignItems="center"
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
        </CardActionArea>
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
