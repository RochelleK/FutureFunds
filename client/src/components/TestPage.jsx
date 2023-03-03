import React from 'react';
import CustomBarChart from './CustomBarChart';
// import { PieChart } from 'recharts';
import Chart from './Items/Chart';
import PieCharts from './Items/PieCharts';
import Optional from './Optional';
import StaticBar from './StaticBar';

const TestPage = () => {
    return (
      <div>
        hello
<StaticBar totalHeight={100} ratio={.75}/>      </div>
    );
};

export default TestPage;