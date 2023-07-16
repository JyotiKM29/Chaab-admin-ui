import React from 'react';
import { AreaChart, Area, XAxis, YAxis, defs } from 'recharts';

const Chart = ({ isPositive }) => {
  const data = [
    { day: 'M', numberWorkers: 0 },
    { day: 'T', numberWorkers: 80 },
    { day: 'W', numberWorkers: 60 },
    { day: 'T', numberWorkers: 60 },
    { day: 'F', numberWorkers: 90 },
    { day: 'S', numberWorkers: 70 },
    { day: 'S', numberWorkers: 0 }
  ];

  const normalizedData = data.map(item => ({
    ...item,
    numberWorkers: item.numberWorkers / 100
  }));

  const gradientId = isPositive ? "positiveGradient" : "negativeGradient";

  return (
    <AreaChart width={120} height={120} data={normalizedData}>
      <defs>
        <linearGradient id="positiveGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#008E43" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id="negativeGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
      <Area
        dataKey="numberWorkers"
        fill={`url(#${gradientId})`}
        stroke="none"
        fillOpacity={0.9}
      />
      <XAxis dataKey="day" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
      <YAxis hide={true} />
    </AreaChart>
  );
}

export default Chart;
