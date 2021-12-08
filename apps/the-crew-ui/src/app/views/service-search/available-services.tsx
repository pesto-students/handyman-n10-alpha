import { Grid, Paper, Typography } from '@mui/material';

import {
  applianceRepair,
  electricians,
  HairServicesForWomen,
  homePainting,
  massageForMen,
  pestControl,
  plumbing,
  salonForMen,
  salonForWomen,
  spaForWomen,
} from '../../../assets/icons';
import style from './available-services.module.scss';

export default function AvailableServices() {
  const availableServices = [
    {
      name: 'Salon For Women',
      icon: salonForWomen,
    },
    {
      name: 'Hair Services For Women',
      icon: HairServicesForWomen,
    },
    {
      name: 'Carpenters',
      icon: spaForWomen,
    },
    {
      name: 'Salon For Men',
      icon: salonForMen,
    },
    {
      name: 'Massage For Men',
      icon: massageForMen,
    },
    {
      name: 'AC/Appliance Repair',
      icon: applianceRepair,
    },
    {
      name: 'Home Painting',
      icon: homePainting,
    },
    {
      name: 'Cleaning & Pest Control',
      icon: pestControl,
    },
    {
      name: 'Electricians',
      icon: electricians,
    },
    {
      name: 'Plumbers',
      icon: plumbing,
    },
  ];
  return (
    <div className={style.availableServicesRoot}>
      <Paper elevation={6} style={{ width: '1008px' }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          {availableServices.map(x => {
            return (
              <Grid
                item
                key={x.name}
                alignItems="center"
                justifyContent="center"
                style={{ display: 'flex', flexDirection: 'column', width: '152px', margin: '4px' }}
                className={style.availableServicesGridItem}
              >
                <img src={x.icon} alt={x.name} />
                <Typography variant="body1">{x.name}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </div>
  );
}
