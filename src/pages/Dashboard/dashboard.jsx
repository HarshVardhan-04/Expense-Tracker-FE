import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import Stats from "../../components/Stats";
import TransTable from "../../components/TransTable";

import { FaArrowTrendUp, FaArrowTrendDown, FaWallet } from "react-icons/fa6";

function dashboard() {
  const [transactions, setTransactions] = useState([]);

const fetchDashboard = async () => {

    const response = await fetch("http://localhost:5000/api/dashboard", {
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

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col lg:ml-80">
        <Nav/>

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
          label="Remaining Money"
          amount={totalIncome - totalExpense}
          />
          </div>
         

         <TransTable
            showType={true}
            transactions={transactions}
         />
        </main>
      </div>
    </div>
  )
}

export default dashboard