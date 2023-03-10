import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const PieCharts = ({num1, num2}) => {
  
  const data = [
    { name: "Group A", value: num1 },
    { name: "Group B", value: num2 },
    // { name: "Group C", value: 300 },
    // { name: "Group D", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="">
        {/* <div className=""> */}
      <PieChart 
      width={200} height={200} 
      className="">
        {/* <ResponsiveContainer width="100%" className="h-40 md:h-32 lg:h-24"> */}
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            >
            {data.map((entry, index) => (
              <Cell
              key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                />
                ))}
          </Pie>
        {/* </ResponsiveContainer> */}
      </PieChart>
                {/* </div> */}
    </div>
  );
};

export default PieCharts;
