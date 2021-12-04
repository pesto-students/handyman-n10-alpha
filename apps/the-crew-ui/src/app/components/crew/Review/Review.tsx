import { Grid, Typography } from '@mui/material';
import { AccountCircle, StarRate } from '@mui/icons-material';

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
        <Grid
          container
          item
          justifyContent="start"
          alignItems="center"
          xs={2}
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
      </Grid>
    </div>
  );
}
