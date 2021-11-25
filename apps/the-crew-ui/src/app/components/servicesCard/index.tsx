import './serviceCard.scss';

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  Slide,
} from '@material-ui/core';
import StarRateIcon from '@material-ui/icons/StarRate';

import AddButton from '../buttons/addButton';

export default function ServiceCard(props) {
  return (
    <Slide direction="up" in={true} timeout={1000}>
      <Card className="cardRoot" elevation={6}>
        <CardActionArea className="cardAction">
          <Grid className="cardActionGrid" container spacing={2}>
            <Grid item xs={4}>
              <CardMedia
                className="media"
                image="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_template,q_30/images/supply/customer-app-supply/1634118672958-fb2d33.png"
                title="Waste Pipe Leakage"
              />
            </Grid>
            <Grid item xs={8}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Typography variant="h6">Waste Pipe Leakage</Typography>
                  <Typography component="p">
                    <Typography variant="body2" style={{ color: 'green', fontWeight: 600 }}>
                      <StarRateIcon
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
                    <Typography variant="body2" color="textSecondary" component="p">
                      30.5k ratings
                    </Typography>
                    <Typography variant="subtitle1">₹ 119</Typography>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <AddButton />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <CardContent>
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
          <Button
            size="small"
            color="primary"
            onClick={() => {
              props.viewDetails();
            }}
          >
            View Details {'>'}
          </Button>
        </CardActions>
      </Card>
    </Slide>
  );
}
