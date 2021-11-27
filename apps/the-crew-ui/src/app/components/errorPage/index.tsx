import { Typography } from '@material-ui/core';
import './errorPageStyles.scss';

export default function ErrorComponent() {
  return (
    <div className="errorRoot">
      <div className="errorImg">
        <img
          alt=""
          src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470175715831-NUJOMI6VW13ZNT1MI0VB/image-asset.jpeg?format=500w"
        />
      </div>
      <div className="errorText">
        <Typography variant="h2" style={{ letterSpacing: '8px' }}>
          AWWW...DON’T CRY.
        </Typography>
        <Typography variant="h6" color="textSecondary">
          It's just a 404 Error!{' '}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          What you’re looking for may have been misplaced in Long Term Memory.
        </Typography>
      </div>
    </div>
  );
}
