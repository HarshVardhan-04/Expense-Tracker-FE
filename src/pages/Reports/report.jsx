import React, { useEffect, useState } from "react";
import Sidebar from '../../components/Sidebar'
import Nav from "../../components/Nav";
import Stats from "../../components/Stats";

import { FaArrowTrendUp, FaArrowTrendDown, FaWallet } from "react-icons/fa6";
import LineGraph from "../../components/LineGraph";

function report() {
    const [transactions, setTransactions] = useState([]);
    
    const fetchDashboard = async () => {
    
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/dashboard`, {
            credentials: "include"
        });
    
        const data = await response.json();
    
        setTransactions(data);
    };

    useEffect(() => {
    fetchDashboard();
}, []);

     const totalExpense = transactions
  .filter(item => item.type === "Expense")
  .reduce((sum, item) => sum + Number(item.amount), 0);

  const totalIncome = transactions
  .filter(item => item.type === "Income")
  .reduce((sum, item) => sum + Number(item.amount), 0);


  const graphData = [];

for (let i = 1; i <= 31; i++) {
  graphData.push({
    day: i,
    income: 0,
    expense: 0,
  });
}

transactions.forEach((transaction) => {
  const day = new Date(transaction.date).getDate();

  if (transaction.type === "Income") {
    graphData[day - 1].income += transaction.amount;
  } else {
    graphData[day - 1].expense += transaction.amount;
  }
});

    
  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col lg:ml-80">
        <Nav title='Reports'/>

        {/* Main Content */}
        <main className=" bg-gray-100 ">
          <div className="flex">
             <Stats
          Icon={FaArrowTrendUp}
          iconColor="text-white"
          label="Total Income"
          amount={totalIncome}
          />
          <Stats
          Icon={FaArrowTrendDown}
          iconColor="text-white"
          label="Total Expense"
          amount={totalExpense}
          />
          <Stats
          Icon={FaWallet}
          iconColor="text-white"
          label="Net Savings"
          amount={totalIncome - totalExpense}
          />   
          </div>
         
         <div className="p-5 bg-slate-950">
          <LineGraph 
          data={graphData}
          />

         </div>
        </main> 
      </div>
    </div>
  )
}

export default report