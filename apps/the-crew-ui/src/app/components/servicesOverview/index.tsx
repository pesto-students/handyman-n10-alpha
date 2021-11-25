import { Grid, Slide } from '@material-ui/core';
import { useState } from 'react';
import ServiceDetail from '../serviceDetails';

import ServiceCard from '../servicesCard';

export default function ServiceOverviewComponent() {
  const [showDetails, setShowDetails] = useState(false);
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
  const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
    <div style={{ display: 'flex' }}>
      <div style={{ width: gridWidth }}>
        <Grid container spacing={3} style={{ margin: 0 }}>
          {getServiceCards()}
        </Grid>
      </div>
      {showDetails ? <ServiceDetail /> : <div></div>}
    </div>
  );
}
