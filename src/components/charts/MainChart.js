import React, { Component } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: '1', income: 4000, bill: 2400, amt: 2400,
  },
  {
    name: '2', income: 3000, bill: 1398, amt: 2210,
  },
  {
    name: '3', income: 4000, bill: 9800, amt: 2290,
  },
  {
    name: '4', income: 6780, bill: 3908, amt: 2000,
  },
  {
    name: '5', income: 1890, bill: 4800, amt: 2181,
  },
  {
    name: '6', income: 2390, bill: 3800, amt: 2500,
  },
  {
    name: '7', income: 3490, bill: 4300, amt: 2100,
  },
];

export default class MainChart extends Component {
 

  render() {
    return (
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 20, right: 5, left: 25, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="income" stroke="#0c6a96" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="bill" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
