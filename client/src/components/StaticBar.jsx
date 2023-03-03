import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis } from "recharts";

const StaticBar = ({ totalHeight, ratio }) => {
  const data = [{ name: "", value: ratio }];

  const maxBarHeight = totalHeight;

  return (
    <BarChart
      width={150}
      height={totalHeight}
      data={data}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    >
      <XAxis dataKey="name" hide={true} />
      <YAxis type="number" domain={[0, 1]} hide={true} />
      <Bar dataKey="value" barSize={maxBarHeight} background={{ fill: "#eee" }}>
        <Cell fill="#82ca9d" />
      </Bar>
    </BarChart>
  );
};

export default StaticBar;
