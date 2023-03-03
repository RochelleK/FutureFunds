import React from 'react';
import CustomBarChart from './CustomBarChart';
// import { PieChart } from 'recharts';
import Chart from './Items/Chart';
import PieCharts from './Items/PieCharts';

const TestPage = () => {
    return (
      <div>
        hello
        <CustomBarChart total={100} colored={75} />
      </div>
    );
};

export default TestPage;