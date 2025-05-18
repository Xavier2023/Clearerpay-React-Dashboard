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
} from "recharts";
import "./Chart.css";

const data = [
  { date: "1", moneyIn: 100000, moneyOut: 0 },
  { date: "8", moneyIn: 15000000, moneyOut: 100000 },
  { date: "15", moneyIn: 15000000, moneyOut: 10000000 },
  { date: "22", moneyIn: 40000000, moneyOut: 8000000 },
  { date: "26", moneyIn: 30000000, moneyOut: 35000000 },
  { date: "31", moneyIn: 500000, moneyOut: 5000000 },
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
            dot={false}
          ></Line>
          <Line
            type="monotone"
            dataKey="moneyOut"
            stroke="#ef4444"
            strokeWidth={2}
            name="Money out ₦1,000,000"
            dot={false}
          ></Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
