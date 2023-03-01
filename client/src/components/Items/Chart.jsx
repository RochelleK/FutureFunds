import React, { PureComponent } from 'react';
// import React from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const Chart = ({number}) => {
console.log(number)
  const data = [
    {
      // name: "Page A",
      uv: number,
      pv: 2400,
      amt: 2400,
    },
  ];
    

return (
    <div className='w-100 h-100'>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
        <BarChart width={150} height={200} data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      {/* </ResponsiveContainer> */}

            
        </div>
    );
};

export default Chart;