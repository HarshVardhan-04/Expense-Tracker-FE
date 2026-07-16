import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import Stats from "../../components/Stats";
import TransTable from "../../components/TransTable";
import Input from "./input";

import {FaWallet} from "react-icons/fa6";
import PieChart  from "../../components/Piecharts";

function Expense() {

  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {

    try {

      const response = await fetch("http://localhost:5000/api/expenses", {
        credentials: "include"
      });


      const data = await response.json();

      
      setExpenses(data);

    } catch (err) {

      console.log(err);

    }

  };

  useEffect(() => {

    fetchExpenses();

  }, []);

  const totalExpense = expenses.reduce((sum, item) => {
    return sum + Number(item.amount);
  }, 0);

  return (
    <div className="flex min-h-screen bg-black">

      <Sidebar />

     <div className="flex-1 flex flex-col lg:ml-80">

        <Nav title="Expense" />

        <main className=" bg-slate-950  min-h-screen overflow-y-auto">

          <div className="flex">

            <Stats
              Icon={FaWallet}
              iconColor="text-white"
              label="Total Expense"
              amount={totalExpense}
            />

            <Stats
              Icon={FaWallet}
              iconColor="text-white"
              label="Total Expense Entries"
              amount={expenses.length}
            />

          </div>

          {/* This is used to reload the table whenever we login */}
          <div className="p-8">

            <Input fetchExpenses={fetchExpenses} />

          </div>

          <TransTable
            showType={false}
            transactions={expenses}
            type={
              <button className="bg-red-500 px-3 py-1 rounded">
                Delete
              </button>
            }
          />

          <div className="w-full h-[500px] rounded-md">
            <PieChart
            items = {expenses} />
          </div>

        </main>

      </div>

    </div>
  );
}

export default Expense;