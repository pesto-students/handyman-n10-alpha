import './selectedItemStyles.scss';

import { Paper, Typography } from '@material-ui/core';

import { AddButton } from '../../../components';

interface ISelectedItem {
  Title: string;
  Description: string[];
  Price: number;
}

export default function SelectedItem(item: ISelectedItem) {
  return (
    <div>
      <Paper variant="outlined" style={{ height: '100px' }}>
        <div style={{ margin: '10px' }}>
          <Typography variant="body1">{item.Title}</Typography>
          <ul>
            {item.Description.map(x => {
              return (
                <li key={x}>
                  <Typography variant="body2" color="textSecondary">
                    {x}
                  </Typography>
                </li>
              );
            })}
          </ul>
          <div style={{ display: 'flex' }}>
            <Typography variant="subtitle1" style={{ flexGrow: 1 }}>
              ₹ {item.Price}
            </Typography>
            <AddButton />
          </div>
        </div>
      </Paper>
    </div>
  );
}
