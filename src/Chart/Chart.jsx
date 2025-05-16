import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
  LabelList,
} from "recharts";
import "./Chart.css";

const data = [
  { date: "1", moneyIn: 500000, moneyOut: 300000 },
  { date: "8", moneyIn: 1500000, moneyOut: 700000 },
  { date: "15", moneyIn: 2000000, moneyOut: 1600000 },
  { date: "22", moneyIn: 1000000, moneyOut: 1000000 },
  { date: "31", moneyIn: 500000, moneyOut: 300000 },
];

const Chart = () => {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3>Money out/Money in</h3>
        <select className="date-select">
          <option>Date Range</option>
          <option>This Month</option>
          <option>Last Month</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="date" />
          <YAxis
            orientation="right"
            tickFormatter={(value) => `₦${value / 1000000}m`}
          />
          <Tooltip formatter={(value) => `₦${value.toLocaleString()}`} />
          <Legend
            verticalAlign="top"
            align="left"
            iconType="box"
            wrapperStyle={{ paddingBottom: "10px" }}
          />
          <Line
            type="monotone"
            dataKey="moneyIn"
            stroke="#facc15"
            strokeWidth={2}
            name="Money in ₦1,000,000"
          ></Line>
          <Line
            type="monotone"
            dataKey="moneyOut"
            stroke="#ef4444"
            strokeWidth={2}
            name="Money out ₦1,000,000"
          ></Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
