import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';

export default function AddButton() {
  const [count, setCount] = useState(0);
  return (
    <ButtonGroup disableElevation variant="outlined" color="primary">
      {count !== 0 ? (
        <Button
          onClick={() => {
            setCount(count - 1);
          }}
          variant="contained"
        >
          -
        </Button>
      ) : null}
      <Button>{count === 0 ? 'Add' : count}</Button>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
        variant={count !== 0 ? 'contained' : 'outlined'}
      >
        +
      </Button>
    </ButtonGroup>
  );
}
