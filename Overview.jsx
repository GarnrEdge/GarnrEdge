import React from "react";

export default function Overview() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Building Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-green-100 rounded shadow">Supply Temp: 21°C</div>
        <div className="p-4 bg-green-100 rounded shadow">Humidity: 45%</div>
        <div className="p-4 bg-green-100 rounded shadow">CO₂: 650ppm</div>
        <div className="p-4 bg-green-100 rounded shadow">Fan Status: <span className="text-green-600 font-bold">Running</span></div>
      </div>
    </div>
  );
}
