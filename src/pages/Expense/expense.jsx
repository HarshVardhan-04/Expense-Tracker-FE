import React from 'react'
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import Stats from "../../components/Stats";
import TransTable from "../../components/TransTable";
import Input from "./input";

import { FaArrowTrendUp, FaArrowTrendDown, FaWallet } from "react-icons/fa6";

function expense() {
  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        <Nav title='Expense'/>


        {/* Main Content */}
        <main className=" bg-gray-100 ">
          <div className="flex">
             <Stats
          Icon={FaWallet}
          iconColor="text-white"
          label="Total Expense"
          amount="12000"
          />
          <Stats
          Icon={FaWallet}
          iconColor="text-white"
          label="Total Income Entries"
          amount="5"
          />
          </div>

           <div className=' p-8 bg-[#050b1d] '>
            <Input />
            
           </div>
           
            <TransTable type={<button className="bg-violet-500 px-3 py-1 rounded">DELETE</button>}/>
          
        </main>
      </div>
    </div>
  )
}

export default expense