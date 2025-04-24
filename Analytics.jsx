import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', temp: 19.1 },
  { time: '01:00', temp: 19.6 },
  { time: '02:00', temp: 19.4 },
  { time: '03:00', temp: 19.8 },
  { time: '04:00', temp: 20.2 },
  { time: '05:00', temp: 20.6 },
];

const Analytics = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Temperature Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#8884d8" />
          <YAxis stroke="#8884d8" />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#10b981" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
// placeholder content for Analytics.jsx
