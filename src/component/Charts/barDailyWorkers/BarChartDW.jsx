import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '6 June',
    uv: 400,
    pv: 240,
    amt: 240,
  },
  {
    name: '7 June',
    uv: 300,
    pv: 139,
    amt: 221,
  },
  {
    name: '8 June',
    uv: 200,
    pv: 380,
    amt: 229,
  },
  {
    name: '9 June',
    uv: 278,
    pv: 340,
    amt: 200,
  },
  {
    name: '10 June',
    uv: 189,
    pv: 180,
    amt: 218,
  },
  {
    name: '11 June',
    uv: 239,
    pv: 300,
    amt: 250,
  },
  {
    name: '12 June',
    uv: 349,
    pv: 130,
    amt: 210,
  },
  {
    name: '13 June',
    uv: 100,
    pv: 180,
    amt: 280,
  },
  {
    name: '14 June',
    uv: 280,
    pv: 380,
    amt: 200,
  },
  {
    name: '15 June',
    uv: 310,
    pv: 290,
    amt: 210,
  },
  {
    name: '16 June',
    uv: 200,
    pv: 300,
    amt: 250,
  },
  {
    name: '17 June',
    uv: 390,
    pv: 390,
    amt: 220,
  },
  {
    name: '18 June',
    uv: 310,
    pv: 280,
    amt: 210,
  },
];

const BarChartDW = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} fontSize={'12px'} />
        <YAxis
          type="number"
          tickCount={5}
          ticks={[0, 100, 200, 300, 400]}
          fontSize={'12px'}
        />
        <Tooltip />
        <CartesianGrid vertical={true} horizontal={true} />
        <Bar
          dataKey="pv"
          fill="#4887FF"
          background={{ fill: '#E7EFFF', radius: 10 }}
          radius={[10, 10, 10, 10]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartDW;