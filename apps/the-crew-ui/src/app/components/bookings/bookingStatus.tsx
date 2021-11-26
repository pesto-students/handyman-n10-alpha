import { Typography } from '@material-ui/core';
import { StatusColours } from '../../enums';
import './myBookingsStyles.scss';

interface StatusSummary {
  status: string;
  message: string;
}
export default function BookingStatus(props: StatusSummary) {
  return (
    <div>
      <Typography
        className="statusMessage"
        style={{ backgroundColor: StatusColours[props.status] }}
        variant="subtitle2"
      >
        {props.message}
      </Typography>
    </div>
  );
}
