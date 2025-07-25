import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend
} from 'recharts';

const data = [
  { month: 'Jan', amount: 2000 },
  { month: 'Feb', amount: 3000 },
  { month: 'Mar', amount: 1800 },
  { month: 'Apr', amount: 2500 }
];

const pieData = [
  { name: 'Food', value: 500 },
  { name: 'Rent', value: 1200 },
  { name: 'Utilities', value: 300 },
  { name: 'Other', value: 700 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function ExpenseCharts() {
  return (
    <div className="charts-container">
      <h3>Monthly Expense Trend</h3>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={2} />
      </LineChart>

      <h3>Category-wise Distribution</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={pieData}
          cx={200}
          cy={150}
          labelLine={false}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          outerRadius={100}
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default ExpenseCharts;
