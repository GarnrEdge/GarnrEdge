import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { time: "10:00", temperature: 21, humidity: 45 },
  { time: "11:00", temperature: 22, humidity: 47 },
  { time: "12:00", temperature: 23, humidity: 49 },
  { time: "13:00", temperature: 24, humidity: 50 },
  { time: "14:00", temperature: 23, humidity: 48 },
  { time: "15:00", temperature: 22, humidity: 46 },
];

export default function Analytics() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
          <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
