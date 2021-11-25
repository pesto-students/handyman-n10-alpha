import { List, ListItem, ListItemIcon, ListItemText, Slide, Typography } from '@material-ui/core';
import { Cancel, CheckCircle, StarRate } from '@material-ui/icons';
import { BarChart } from '../barChart';
import FAQsComponent from '../faqs';
import ReviewComponent from '../review';

export default function ServiceDetail() {
  const obj = {
    included: {
      included: true,
      points: [
        'Diagnosis and Repair of leakage between wash-basin and waste pipe',
        'Procurement of spare parts (at extra cost)',
      ],
      color: 'green',
    },
    excluded: {
      included: false,
      points: ['Tiling, cementing and other such masonry work'],
      color: 'red',
    },
  };

  const renderList = _object => {
    <List>
      <ListItem>
        <ListItemIcon></ListItemIcon>
      </ListItem>
    </List>;
  };

  return (
    <Slide direction="left" in={true} timeout={1000}>
      <div style={{ width: '40%' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>
            <Typography variant="h6">Waste Pipe Leakage</Typography>
            <Typography variant="body2" style={{ color: 'green', fontWeight: 600 }}>
              <StarRate
                fontSize="medium"
                style={{
                  display: 'inline-block',
                  position: 'relative',
                  marginRight: '1px',
                  color: 'green',
                }}
              />
              4.73
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              30.5k ratings
            </Typography>
            <Typography variant="subtitle1">₹ 119</Typography>
          </div>
          <div>
            <Typography variant="h5">Included</Typography>
            <div style={{ backgroundColor: '#f5f9ff' }}>
              <List>
                {obj.included.points.map(x => {
                  return (
                    <ListItem key={x}>
                      <ListItemIcon>
                        <CheckCircle style={{ color: 'green' }} fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary={x} />
                    </ListItem>
                  );
                })}
              </List>
            </div>
            <Typography variant="h5">Excluded</Typography>
            <div style={{ backgroundColor: '#f5f9ff' }}>
              <List>
                {obj.excluded.points.map(x => {
                  return (
                    <ListItem key={x}>
                      <ListItemIcon>
                        <Cancel style={{ color: 'red' }} fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary={x} />
                    </ListItem>
                  );
                })}
              </List>
            </div>
          </div>
        </div>
        <Typography variant="h5">Frequently asked questions</Typography>
        <div style={{ marginTop: '10px', marginBottom: '30px' }}>
          <FAQsComponent />
          <FAQsComponent />
          <FAQsComponent />
        </div>
        <Typography variant="h5">Reviews in the past month</Typography>
        <div>
          <BarChart />
        </div>
        <Typography variant="h5">Most helpful reviews</Typography>
        <div style={{ marginTop: '10px', marginBottom: '30px' }}>
          <ReviewComponent />
          <ReviewComponent />
          <ReviewComponent />
        </div>
      </div>
    </Slide>
  );
}
