import { ExpandMore, LocationOnOutlined } from '@mui/icons-material';
import {
  Autocomplete,
  Divider,
  Grid,
  Paper,
  Popover,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/system';
import { Role, ServiceLocation, ServiceRequestType } from '@the-crew/common/enums';
import { MouseEvent, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';

import { ServiceList } from '..';
import {
  carpentering,
  electricians,
  homePainting,
  pestControl,
  plumbing,
  salonForMen,
  salonForWomen,
} from '../../../assets/icons';
import { useAppDispatch } from '../../store';
import { authSelector } from '../../store/slices';
import style from './search-service.module.scss';

export default function ServiceSearch() {
  const { search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search), [search]);
  const theme = useTheme();
  const smView = useMediaQuery(theme.breakpoints.down('md'));
  const [location] = useState<ServiceLocation | string>(query.get('city'));
  const [professionType, setProfession] = useState<ServiceRequestType>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const open = Boolean(anchorEl);

  const history = useHistory();
  const user = useSelector(authSelector)?.user;

  useEffect(() => {
    user?.role[0] === Role.HANDYMAN && history.push('/bookings');
  }, [history, user]);

  const handleOpen = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={style.searchPageRoot}>
      <div className={style.searchPageHome}>
        <Grid
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <Typography variant="h2" style={{ fontWeight: 500 }}>
              Home services on demand
            </Typography>
          </Grid>
          <Grid
            container
            item
            spacing={1}
            flexDirection={smView ? 'column' : 'row'}
            justifyContent="center"
            alignItems="center"
            style={{ width: '75%' }}
          >
            <Grid item xs={4} marginRight={2} minWidth={200}>
              <div className={style.locationDropDown} onClick={handleOpen}>
                <LocationOnOutlined />
                <Typography variant="body1">{location}</Typography>
                <ExpandMore />
              </div>
            </Grid>
            <Grid item xs width="100%">
              <Autocomplete
                className={style.servicesAutoComplete}
                options={Object.values(ServiceRequestType).map(service => ({ service }))}
                getOptionLabel={option => option.service}
                openOnFocus={false}
                renderInput={params => (
                  <TextField
                    style={{ overflow: 'hidden' }}
                    {...params}
                    placeholder="Search your service"
                    focused={false}
                  />
                )}
                onChange={(_, value: { service: ServiceRequestType }) => {
                  if (value) {
                    setProfession(value.service);
                  }
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Popover
          className={style.locationPopOver}
          style={{ width: '100%' }}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <div style={{ display: 'flex', margin: '8px' }}>
            <LocationOnOutlined />
            <Typography variant="body1">Current Location</Typography>
          </div>
          <Divider />
          <Autocomplete
            id="city-box-demo"
            options={[{ city: 'Friends Colony' }, { city: 'Vidhyadhar Nagar' }]}
            getOptionLabel={option => option.city}
            renderInput={params => (
              <TextField
                style={{ width: '360px', margin: '16px' }}
                {...params}
                placeholder="Select your area"
                variant="outlined"
              />
            )}
          />
          <Divider />
          <Typography variant="h6" style={{ margin: '8px' }}>
            Saved Address
          </Typography>
          <div className={style.popOverMenuItemRoot}>
            <LocationOnOutlined />
            <div className={style.popOverMenuItem}>
              <Typography variant="subtitle1">Home</Typography>
              <Typography variant="subtitle1" color="textsecondary">
                Sri Nagar, Gajuwaka
              </Typography>
            </div>
          </div>
        </Popover>
      </div>
      <AvailableServices setProfession={setProfession} />

      {location ? (
        <ServiceList location={location} professionType={professionType} />
      ) : (
        history.push('/')
      )}
    </div>
  );
}

interface IAvailableServices {
  setProfession: (profession: ServiceRequestType) => void;
}

const AvailableServices: React.FC<IAvailableServices> = props => {
  const availableServices = [
    {
      name: 'Salon For Women',
      icon: salonForWomen,
      value: ServiceRequestType.SALON_FEMALE,
      size: {
        height: '48px',
        width: 'auto',
      },
    },
    {
      name: 'Carpenters',
      icon: carpentering,
      value: ServiceRequestType.CARPENTERING,
      size: {
        height: '48px',
        width: 'auto',
      },
    },
    {
      name: 'Salon For Men',
      icon: salonForMen,
      value: ServiceRequestType.SALON_MALE,
      size: {
        height: '48px',
        width: 'auto',
      },
    },
    {
      name: 'Home Painting',
      icon: homePainting,
      value: ServiceRequestType.PAINT,
      size: {
        height: '48px',
        width: 'auto',
      },
    },
    {
      name: 'Cleaning & Pest Control',
      icon: pestControl,
      value: ServiceRequestType.CLEANING,
      size: {
        height: '48px',
        width: 'auto',
      },
    },
    {
      name: 'Electricians',
      icon: electricians,
      value: ServiceRequestType.ELECTRICIAN,
      size: {
        height: '48px',
        width: 'auto',
      },
    },
    {
      name: 'Plumbers',
      icon: plumbing,
      value: ServiceRequestType.PLUMBING,
      size: {
        height: '48px',
        width: 'auto',
      },
    },
  ];
  return (
    <Grid container position="relative" padding={1}>
      <Paper elevation={6} className={style.availableServices}>
        <Grid container justifyContent="center" alignItems="center" spacing={2} margin="auto">
          {availableServices.map((service, index) => {
            return (
              <Grid
                key={index}
                item
                container
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                className={style.serviceItem}
                onClick={() => {
                  props.setProfession(service.value);
                }}
              >
                <img
                  src={service.icon}
                  alt={service.name}
                  height={service.size.height}
                  width={service.size.height}
                />
                <Typography variant="body1" textAlign="center">
                  {service.name}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </Grid>
  );
};
