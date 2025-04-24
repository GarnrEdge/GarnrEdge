import React from 'react';

const Overview = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="p-6 rounded-2xl shadow bg-white dark:bg-gray-800">
        <h2 className="text-lg font-semibold mb-2">Supply Air Temp</h2>
        <p className="text-3xl">18.2°C</p>
      </div>
      <div className="p-6 rounded-2xl shadow bg-white dark:bg-gray-800">
        <h2 className="text-lg font-semibold mb-2">Room CO₂</h2>
        <p className="text-3xl">620 ppm</p>
      </div>
      <div className="p-6 rounded-2xl shadow bg-white dark:bg-gray-800">
        <h2 className="text-lg font-semibold mb-2">Fan Status</h2>
        <p className="text-3xl text-green-500">Running</p>
      </div>
    </div>
  );
};

export default Overview;
// placeholder content for Overview.jsx
