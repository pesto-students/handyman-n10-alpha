import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

import style from './not-found.module.scss';

export default function ErrorComponent() {
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Grid
      container
      flexWrap="nowrap"
      className={style.errorRoot}
      sx={{ flexDirection: { xs: 'column', md: 'row' } }}
      padding="16px"
    >
      <Grid item container md={4} justifyContent="center" alignItems="center" paddingX="16px">
        <img
          alt=""
          src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470175715831-NUJOMI6VW13ZNT1MI0VB/image-asset.jpeg?format=500w"
          height="auto"
          width="80%"
        />
      </Grid>
      <Grid
        container
        item
        md={8}
        spacing={1}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        paddingX="16px"
      >
        <Typography variant={largeScreen ? 'h2' : 'h6'} letterSpacing="8px" textAlign="center">
          AWWW...DON’T CRY.
        </Typography>
        <Typography variant={largeScreen ? 'h6' : 'body1'} color="textSecondary">
          It's just a 404 Error!{' '}
        </Typography>
        <Typography variant={largeScreen ? 'h6' : 'body1'} textAlign="center" color="textSecondary">
          What you’re looking for may have been misplaced in Long Term Memory.
        </Typography>
      </Grid>
    </Grid>
  );
}
