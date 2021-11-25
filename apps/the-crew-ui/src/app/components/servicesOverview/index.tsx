import { AppBar, Button, Grid, Slide, Toolbar } from '@material-ui/core';
import { useState } from 'react';
import CheckOutComponent from '../checkOut';
import ServiceDetail from '../serviceDetails';

import ServiceCard from '../servicesCard';

export default function ServiceOverviewComponent() {
  const [showDetails, setShowDetails] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [gridWidth, setGridWidth] = useState('100%');
  const viewDetails = _showDetails => {
    if (!showDetails) {
      setShowDetails(true);
      setGridWidth('60%');
    } else {
      setShowDetails(false);
      setGridWidth('100%');
    }
  };
  const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const getServiceCards = () => {
    return dummy.map(x => {
      return (
        <Grid item key={x}>
          <ServiceCard viewDetails={viewDetails} />
        </Grid>
      );
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <div style={{ width: gridWidth }}>
          <Grid container spacing={3} style={{ margin: 0 }}>
            {getServiceCards()}
          </Grid>
        </div>
        {showDetails ? <ServiceDetail /> : null}
      </div>
      <div style={{ position: 'fixed', width: '100%', bottom: 0, zIndex: 100 }}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Button
              variant="contained"
              color="primary"
              style={{ flexGrow: 2 }}
              onClick={() => {
                setShowCheckout(!showCheckout);
              }}
            >
              Checkout
            </Button>
            {showCheckout ? (
              <CheckOutComponent
                open={showCheckout}
                onClose={() => {
                  console.log('Parent' + showCheckout);
                  setShowCheckout(!showCheckout);
                }}
              />
            ) : null}
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
