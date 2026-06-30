import React from 'react'
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import Stats from "../../components/Stats";
import TransTable from "../../components/TransTable";

import { FaArrowTrendUp, FaArrowTrendDown, FaWallet } from "react-icons/fa6";

function dashboard() {
  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        <Nav />

        {/* Main Content */}
        <main className=" bg-gray-100 ">
          <div className="flex">
             <Stats
          Icon={FaArrowTrendUp}
          iconColor="text-white"
          label="Total Income"
          amount="50000"
          />
          <Stats
          Icon={FaArrowTrendDown}
          iconColor="text-white"
          label="Total Expense"
          amount="26000"
          />
          <Stats
          Icon={FaWallet}
          iconColor="text-white"
          label="Remaining Money"
          amount="24000"
          />
          </div>
         

          <TransTable header='Type'/>
        </main>
      </div>
    </div>
  )
}

export default dashboard