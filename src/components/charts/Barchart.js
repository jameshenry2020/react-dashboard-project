import React, { Component } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'jan', In: 4000, Out: 2400, amt: 2400,
  },
  {
    name: 'feb', In: 3000, Out: 1398, amt: 2210,
  },
  {
    name: 'mar', In: 2000, Out: 9800, amt: 2290,
  },
  {
    name: 'april',In: 2780, Out: 1200, amt: 2000,
  },
 
];

export default class Barchart extends Component {
 
  render() {
    return (
      <BarChart
        width={400}
        height={150}
        data={data}
        margin={{
          top:15, right: 20, left: 20, bottom: 5,
        }}
      >
        
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="In" fill="#8884d8" />
        <Bar dataKey="Out" fill="#82ca9d" />
      </BarChart>
    );
  }
}
