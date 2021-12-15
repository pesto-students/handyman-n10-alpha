import { Delete } from '@mui/icons-material';
import { Grid, Paper, Radio, RadioGroup, Typography } from '@mui/material';
import { UserAddress } from '@the-crew/common';
import { useAppSelector } from '../../../store';
import { authSelector } from '../../../store/slices';

interface ISavedAddress {
  data: UserAddress;
  index: number;
}

const SavedAddress: React.FC<ISavedAddress> = props => {
  return (
    <Paper variant="outlined">
      <Grid container padding="16px">
        <Grid item>
          <Radio value={props.data.id} />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1">Address {props.index + 1}</Typography>

          <Typography variant="body2" color="textSecondary">
            {props.data.flat}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {props.data.street + ' ' + props.data.pinCode}
          </Typography>
        </Grid>
        <Grid item>
          <Delete />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SavedAddress;
