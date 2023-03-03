import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

function CustomBarChart({ total, colored }) {
  const data = [{ name: "Bar", total, colored }];

  return (
    <BarChart width={150} height={200} data={data}>
      {/* <XAxis dataKey="name" />
      <YAxis /> */}
      <Tooltip />
      <Bar dataKey="total" fill="#8884d8" stackId="a" />
      <Bar dataKey="colored" fill="#ccc" stackId="a" />
    </BarChart>
  );
}

export default CustomBarChart;
