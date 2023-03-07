import React from 'react';
import CustomBarChart from './CustomBarChart';
// import { PieChart } from 'recharts';
import Chart from './Items/Chart';
import PieCharts from './Items/PieCharts';
import NavBar2 from './NavBar2';
import Optional from './Optional';
import StaticBar from './StaticBar';

const TestPage = () => {
    return (
      <div>
        hello
        <NavBar2/>
<StaticBar totalHeight={100} ratio={.75}/>      </div>
    );
};

export default TestPage;