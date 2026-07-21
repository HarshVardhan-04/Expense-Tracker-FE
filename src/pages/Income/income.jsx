import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import Stats from "../../components/Stats";
import TransTable from "../../components/TransTable";
import Input from "./incomeInput";

import { FaArrowTrendUp, FaArrowTrendDown, FaWallet } from "react-icons/fa6";
import PieChart  from "../../components/Piecharts";

function income() {
  const[income ,setIncome] = useState([]);
  const fetchIncome = async ()=>{
    try{
      
      const response = await fetch("http://localhost:5000/api/income" ,{
        credentials: "include",
      });

      const data = await response.json();

      setIncome(data);

    }catch(err){
      console.log(err);
    }
  }

   useEffect(() => {
  
      fetchIncome();
  
    }, []);

    const totalIncome = income.reduce((sum, item) => {
      return sum + Number(item.amount);
    }, 0);

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col lg:ml-80">
        <Nav title='Income'/>

        {/* Main Content */}
        <main className="  bg-[#050b1d] ">
          <div className="flex">
             <Stats
          Icon={FaWallet}
          iconColor="text-white"
          label="Total Income"
          amount={totalIncome}
          />
          <Stats
          Icon={FaWallet}
          iconColor="text-white"
          label="Total Income entries"
          amount={income.length}
          />
          </div>
         
          <div className=' p-8 bg-[#050b1d] '>
            <Input fetchExpenses = {fetchIncome}/>
          </div>

          <TransTable
            showType={false}
            transactions={income}
            type={
              <button className="bg-red-500 px-3 py-1 rounded">
                Delete
              </button>
            }
          />

          <div className="w-full h-[500px] rounded-md">
            <PieChart 
            items={income}
            head="Income "
            />
          </div>
        </main>
      </div>
    </div>
  )
}

export default income