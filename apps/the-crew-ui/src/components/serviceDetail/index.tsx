import Grid from '@material-ui/core/Grid';

import ServiceOverviewCard from '../servicesCard';

export default function ServiceDetailComponent() {
  const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const getServiceCards = () => {
    return dummy.map(x => {
      return (
        <Grid item>
          <ServiceOverviewCard />
        </Grid>
      );
    });
  };

  return (
    <Grid container spacing={3} style={{ margin: 0 }}>
      {getServiceCards()}
    </Grid>
  );
}
