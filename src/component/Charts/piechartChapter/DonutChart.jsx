import React, { useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Finished Training', value: 33 },
  { name: 'Chapter A', value: 30 },
  { name: 'Chapter B', value: 10 },
  { name: 'Chapter C', value: 33 },
  { name: 'Not started', value: 51 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const DonutChart = () => {
  const [activeBrowser, setActiveBrowser] = useState(null);

  const handleClick = (data) => {
    setActiveBrowser(activeBrowser === data.name ? null : data.name);
  };

  const handleMouseEnter = (index) => {
    setActiveBrowser(data[index].name);
  };

  const handleMouseLeave = () => {
    setActiveBrowser(null);
  };

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="black"
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const renderCenterLabel = () => {
    if (activeBrowser) {
      const selectedBrowser = data.find((item) => item.name === activeBrowser);
      const words = selectedBrowser.name.split(' ');
      const dy = 18; // Vertical spacing between lines

      return (
        <text
          x="50%"
          y="26%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="11px"
          fill="#000000"
        >
          {words.map((word, index) => (
            <tspan x="50%" dy={index === 0 ? '0' : dy} key={index}>
              {word}
            </tspan>
          ))}
        </text>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={400} >
      <PieChart>
        <defs>
          <filter id="donutChartInnerShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
            <feComposite operator="atop" in="SourceGraphic" />
          </filter>
          <filter id="donutChartDropShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
            <feColorMatrix
              result="matrixOut"
              in="blurOut"
              type="matrix"
              values="0.4 0 0 0 0 0 0.4 0 0 0 0 0 0.4 0 0 0 0 0 1 0"
            />
            <feComposite operator="atop" in="SourceGraphic" in2="matrixOut" />
          </filter>
        </defs>
        <Pie
          data={data}
          cx="50%"
          cy="26%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          innerRadius={50}
          fill="#8884d8"
          dataKey="value"
          onClick={handleClick}
          stroke="none"
          filter="url(#donutChartInnerShadow)" // Apply inner shadow filter to the pie
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              stroke="none"
              filter={activeBrowser === entry.name ? 'url(#donutChartDropShadow)' : 'none'} // Apply drop shadow filter to the selected element
            />
          ))}
        </Pie>
        {renderCenterLabel()}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChart;
