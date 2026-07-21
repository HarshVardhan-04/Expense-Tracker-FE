import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

//Generate random Color
const generateColor = (index) => {
  return `hsl(${index * 60}, 70%, 50%)`;
};

function Piecharts({items  = [] , head})
 {
  //Grouping same data for ex- food - 100 , bills - 1000 ,food - 300
  
  const grouped ={};
  items.forEach(el => {
    if(grouped[el.category]){
    grouped[el.category] += Number(el.amount);
  }else{
    grouped[el.category] = Number(el.amount);
  }
  });


  const chartData = Object.entries(grouped).map(
  ([category, amount]) => ({
    category,
    amount,
  })
);


  return (
    <div className="w-full bg-slate-950 p-7">
      <div className="border border-gray-700 rounded-lg bg-slate-900 p-8">
        <h2 className="text-2xl font-semibold text-white mb-6">
          {head} Distribution
        </h2>

        <div style={{ width: "100%", height: 500 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="amount"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={150}
                label
              >
                {chartData.map((entry, index) => (
                <Cell
                key={index}
                fill={generateColor(index)}
                />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Piecharts;