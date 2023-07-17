import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'S', uv: 400, pv: 400, amt: 240 },
  { name: 'M', uv: 300, pv: 139, amt: 221 },
  { name: 'T', uv: 200, pv: 380, amt: 229 },
  { name: 'W', uv: 278, pv: 340, amt: 200 },
  { name: 'T', uv: 189, pv: 180, amt: 218 },
  { name: 'F', uv: 239, pv: 300, amt: 250 },
  { name: 'S', uv: 349, pv: 130, amt: 210 },
  { name: 'S', uv: 400, pv: 240, amt: 240 },
  { name: 'M', uv: 300, pv: 139, amt: 221 },
  { name: 'T', uv: 200, pv: 380, amt: 229 },
];

const DailyTrainingChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" fontSize={12} />
        <YAxis />
        <Tooltip />
        <Bar dataKey="pv" fill="#4887FF" background={{ fill: '#E7EFFF', radius: 10 }} radius={[10, 10, 10, 10]} barSize={10}/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DailyTrainingChart;