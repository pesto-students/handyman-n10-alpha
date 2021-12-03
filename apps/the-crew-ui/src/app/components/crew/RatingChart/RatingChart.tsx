import { Chart } from 'react-google-charts';
import { ChartWrapperOptions } from 'react-google-charts/dist/types';

export const data = [
  ['Year', 'percentage(%)', { role: 'style' }],
  ['Excellent', 88.7, 'color: green'],
  ['Good', 6.2, 'color: green'],
  ['Average', 2.1, 'color: orange'],
  ['Worst', 2.2, 'color: red'],
  ['Poor', 0.9, 'color: red'],
];

export const options: ChartWrapperOptions['options'] = {
  legend: 'none',
  bar: { groupWidth: '35%' },
  hAxis: {
    textPosition: 'none',
    gridlines: { count: 0 },
    baselineColor: 'none',
  },
  vAxis: {
    textPosition: '',
  },
};

function RatingChart() {
  return <Chart chartType="BarChart" width="100%" height="200px" data={data} options={options} />;
}

export default RatingChart;
