import React from 'react';
import { Chart } from 'react-google-charts';

export const data = [
  ['Year', 'percentage(%)', { role: 'style' }],
  ['Excellent', 88.7, 'color: green'],
  ['Good', 6.2, 'color: green'],
  ['Average', 2.1, 'color: orange'],
  ['Worst', 2.2, 'color: red'],
  ['Poor', 0.9, 'color: red'],
];

export const options = {
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

export function BarChart() {
  return <Chart chartType="BarChart" width="100%" height="200px" data={data} options={options} />;
}
