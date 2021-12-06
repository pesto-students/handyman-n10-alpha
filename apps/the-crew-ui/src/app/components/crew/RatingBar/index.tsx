import Rating from '@mui/lab/Rating';
import { Box } from '@mui/material';
import style from './ratingBar.module.scss';
import { Star } from '@mui/icons-material';

import { makeStyles } from '@mui/styles';
import { useState } from 'react';

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
  'icon-1': { color: 'red' },
  'icon-2': { color: 'coral' },
  'icon-3': { color: 'orange' },
  'icon-4': { color: 'skyblue' },
  'icon-5': { color: 'green' },
});

interface RatingProps {
  name: string;
  onChange: (val: number) => void;
}

export default function HoverRating(props: RatingProps) {
  const [value, setValue] = useState(1);
  const [hover, setHover] = useState(-1);
  const classes = useStyles();

  return (
    <div className={style.ratingBarRoot}>
      <Rating
        classes={{
          iconHover: classes[`icon-${Math.ceil(hover)}`],
          iconFilled: classes[`icon-${Math.ceil(value)}`],
        }}
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
          props.onChange(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        icon={<Star fontSize="inherit" />}
        size="large"
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
  );
}
