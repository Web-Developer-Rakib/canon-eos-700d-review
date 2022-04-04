import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import sellsData from "../ChartData/sellsData.json";

const Sells = () => {
  return (
    <div>
      <AreaChart
        width={500}
        height={400}
        data={sellsData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Camera sold"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </div>
  );
};

export default Sells;
