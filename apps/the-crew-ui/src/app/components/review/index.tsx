import { Grid, Typography } from '@material-ui/core';
import { AccountCircle, StarRate } from '@material-ui/icons';

export default function ReviewComponent() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item>
          <AccountCircle color="primary" style={{ fontSize: '72px' }} />
        </Grid>
        <Grid item xs={8} sm>
          <Typography variantMapping={{ subtitle1: 'h4' }}>Krishna</Typography>
          <Typography variant="body2" color="textSecondary">
            Visakhapatnam, 16th Nov, 2021
          </Typography>
          <Typography variantMapping={{ subtitle1: 'h6' }}>Provided good service</Typography>
        </Grid>
        <Grid item xs={2}>
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
        </Grid>
      </Grid>
    </div>
  );
}
