import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import revenuesData from "../ChartData/revenuesData.json";
const Revenues = () => {
  return (
    <div>
      <BarChart
        width={500}
        height={400}
        data={revenuesData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Investment" stackId="a" fill="#8884d8" />
        <Bar dataKey="Revenue" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Revenues;
