import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

function CustomBarChart({ total, colored }) {
  const data = [{ name: "Bar", total, colored }];

  return (
    <BarChart width={200} height={200} data={data}>
      {/* <XAxis dataKey="name" />
      <YAxis /> */}
      <Tooltip />
      <Bar dataKey="total" fill="#ccc" stackId="a" />
      <Bar dataKey="colored" fill="#8884d8" stackId="a" />
    </BarChart>
  );
}

export default CustomBarChart;
