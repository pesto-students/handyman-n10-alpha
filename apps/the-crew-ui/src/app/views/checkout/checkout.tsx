import { Close } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useHistory } from 'react-router';

import { useAppDispatch, useAppSelector } from '../../store';
import { authSelector, cartSelectors } from '../../store/slices';
import { createCheckoutSession } from '../../store/thunks';
import style from './checkout.module.scss';
import SelectedItem from './selected-item';

interface ICheckOutProps {
  open: boolean;
  onClose: () => void;
}

const convenienceFee = 39;

const CheckOut: React.FC<ICheckOutProps> = props => {
  const history = useHistory();
  const [openDialog, setOpenDialog] = useState(props.open);
  const cartItems = useAppSelector(state => cartSelectors.selectAll(state.cart));
  const authState = useAppSelector(authSelector);
  const dispatch = useAppDispatch();
  const handlePayment = () => {
    dispatch(createCheckoutSession(cartItems)).then(res => {
      window.location = res.payload.url;
    });
  };

  return (
    <Dialog open={openDialog} maxWidth="md" fullWidth={true}>
      <DialogTitle className={style.dialogTitle}>
        <div className={style['dialog-header']}>
          <Typography variant="h6" lineHeight={2}>
            Plumbers (Remember to change this title)
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => {
              setOpenDialog(false);
              props.onClose();
            }}
          >
            <Close />
          </IconButton>
        </div>
      </DialogTitle>

      <DialogContent dividers className={style['dialog-content']}>
        {cartItems.map((item, index) => (
          <SelectedItem key={index} data={item} />
        ))}
        <div className={style.dividerThick}></div>
        <div className={style.itemSummaryRoot}>
          <div className={style.itemSummary}>
            <Typography variant="body2" color="textSecondary" style={{ flexGrow: 1 }}>
              Item total
            </Typography>
            <Typography variant="body2" color="textSecondary">
              ₹{' '}
              {cartItems.reduce((acc, item) => {
                acc += item.quantity * item.price;
                return acc;
              }, 0)}
            </Typography>
          </div>
          <div className={style.itemSummary}>
            <Typography variant="body2" color="textSecondary" style={{ flexGrow: 1 }}>
              Convenience Fees
            </Typography>
            <Typography variant="body2" color="textSecondary">
              ₹ {convenienceFee}
            </Typography>
          </div>
          <Divider />
          <div className={style.itemSummary}>
            <Typography variant="subtitle1" style={{ flexGrow: 1 }}>
              Total
            </Typography>
            <Typography variant="body1">
              ₹{' '}
              {cartItems.reduce((acc, item) => {
                acc += item.quantity * item.price;
                return acc;
              }, 0) + convenienceFee}
            </Typography>
          </div>
        </div>
        <div className={style.dividerThick}></div>
      </DialogContent>
      <DialogActions sx={{ padding: '16px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (!authState.user) {
              history.push('/login');
            } else {
              handlePayment();
            }
          }}
        >
          Next
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CheckOut;
