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
import SelectedItem from './selectedItem';

import './checkOutStyles.scss';

interface checkOutProps {
  open: boolean;
  onClose: () => void;
}
export default function CheckOutComponent(props: checkOutProps) {
  const [openDialog, setOpenDialog] = useState(props.open);
  return (
    <Dialog open={openDialog} maxWidth="md" fullWidth={true}>
      <DialogTitle disableTypography className="dialogTitle">
        <div style={{ display: 'flex' }}>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Plumbers
          </Typography>
          <IconButton className="closeIcon">
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
        <div className="dividerThick"></div>
        <div className="itemSummaryRoot">
          <div className="itemSummary">
            <Typography variant="body2" color="textSecondary" style={{ flexGrow: 1 }}>
              Item total
            </Typography>
            <Typography variant="body2" color="textSecondary">
              ₹ 238
            </Typography>
          </div>
          <div className="itemSummary">
            <Typography variant="body2" color="textSecondary" style={{ flexGrow: 1 }}>
              Visitation fee
            </Typography>
            <Typography variant="body2" color="textSecondary">
              ₹ 60
            </Typography>
          </div>
          <Divider />
          <div className="itemSummary">
            <Typography variant="subtitle1" style={{ flexGrow: 1 }}>
              Total
            </Typography>
            <Typography variant="body2">₹ 298</Typography>
          </div>
        </div>
        <div className="dividerThick"></div>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary">
          Proceed
        </Button>
      </DialogActions>
    </Dialog>
  );
}
