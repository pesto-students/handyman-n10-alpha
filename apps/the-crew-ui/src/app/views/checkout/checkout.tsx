import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useState } from 'react';

import style from './checkout.module.scss';
import SelectedItem from './selected-item';

interface ICheckOutProps {
  open: boolean;
  onClose: () => void;
}

const CheckOut: React.FC<ICheckOutProps> = props => {
  const [openDialog, setOpenDialog] = useState(props.open);

  return (
    <Dialog open={openDialog} maxWidth="md" fullWidth={true}>
      <DialogTitle disableTypography className={style.dialogTitle}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Plumbers
          </Typography>
          <IconButton className={style.closeIcon}>
            <Close
              onClick={() => {
                setOpenDialog(false);
                props.onClose();
              }}
            />
          </IconButton>
        </div>
      </DialogTitle>

      <DialogContent dividers>
        <SelectedItem
          Title="Waste Pipe Leakage"
          Description={['Suited for repair or replacement']}
          Price={119}
        />
        <SelectedItem
          Title="Waste Pipe Leakage"
          Description={['Suited for repair or replacement']}
          Price={119}
        />
        <div className={style.dividerThick}></div>
        <div className={style.itemSummaryRoot}>
          <div className={style.itemSummary}>
            <Typography variant="body2" color="textSecondary" style={{ flexGrow: 1 }}>
              Item total
            </Typography>
            <Typography variant="body2" color="textSecondary">
              ₹ 238
            </Typography>
          </div>
          <div className={style.itemSummary}>
            <Typography variant="body2" color="textSecondary" style={{ flexGrow: 1 }}>
              Visitation fee
            </Typography>
            <Typography variant="body2" color="textSecondary">
              ₹ 60
            </Typography>
          </div>
          <Divider />
          <div className={style.itemSummary}>
            <Typography variant="subtitle1" style={{ flexGrow: 1 }}>
              Total
            </Typography>
            <Typography variant="body2">₹ 298</Typography>
          </div>
        </div>
        <div className={style.dividerThick}></div>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary">
          Proceed
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CheckOut;
