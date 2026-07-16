import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

function LineGraph({ data }) {
  return (
    <div className="bg-[#0b1739] rounded-xl p-5">
      <h2 className="text-white text-xl font-semibold mb-5">
        Income vs Expense (This Month)
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />

          <XAxis
            dataKey="day"
            stroke="#fff"
          />

          <YAxis
            stroke="#fff"
          />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="income"
            stroke="#2274c5"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="expense"
            stroke="#ef4444"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineGraph;