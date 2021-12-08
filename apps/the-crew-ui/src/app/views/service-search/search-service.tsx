import { ExpandMore, LocationOnOutlined } from '@mui/icons-material';
import { Autocomplete } from '@mui/lab';
import { Divider, Grid, Popover, TextField, Typography } from '@mui/material';
import { MouseEvent, useState } from 'react';

import AvailableServices from './available-services';
import style from './search-service.module.scss';

interface ServiceSearchProps {
  selectedLocation: string;
}

export default function ServiceSearch() {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className={style.searchPageRoot}>
      <div className={style.searchPageHome}>
        <Typography variant="h2" style={{ fontWeight: 500 }}>
          Home services on demand
        </Typography>
        <Grid container spacing={1} style={{ width: '64%' }}>
          <Grid item xs={3}>
            <div className={style.locationDropDown} onClick={handleClick}>
              <LocationOnOutlined />
              <Typography variant="body1"> Gajuwaka, Visakhapatnam</Typography>
              <ExpandMore />
            </div>
            {/* <ExpandLess /> */}
          </Grid>
          <Grid item xs={9}>
            <Autocomplete
              className={style.servicesAutoComplete}
              id="search-box-demo"
              options={[{ service: 'Haircut' }, { service: 'Plumber' }]}
              getOptionLabel={option => option.service}
              openOnFocus={false}
              renderInput={params => (
                <TextField
                  style={{ overflow: 'hidden' }}
                  {...params}
                  placeholder="Search your service"
                  focused={false}
                  // InputProps={{
                  //   startAdornment: (
                  //     <InputAdornment position="start">
                  //       <IconButton>
                  //         <Search />
                  //       </IconButton>
                  //     </InputAdornment>
                  //   ),
                  // }}
                />
              )}
            />
          </Grid>
        </Grid>

        <Popover
          className={style.locationPopOver}
          style={{ width: '100%' }}
          id={id}
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
      <AvailableServices />
    </div>
  );
}
