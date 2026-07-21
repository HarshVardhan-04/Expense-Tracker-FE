import React, { useEffect, useState } from "react";
import Sidebar from '../../components/Sidebar'
import Nav from "../../components/Nav";
import Stats from "../../components/Stats";

import { FaArrowTrendUp, FaArrowTrendDown, FaWallet } from "react-icons/fa6";
import LineGraph from "../../components/LineGraph";
import Logout from "../../components/Logout";

function setting() {
  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col lg:ml-80">
        <Nav title='Setting'/>

        {/* THE MAIN DIV CONTAINER */}
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-[#151f38]  w-[550px] rounded-xl p-6 border border-slate-700 w-full max-w-md shadow">
                <h1 className="text-3xl font-bold text-white mb-6"> 
                 Settings
                </h1>

            <div className="border-b border-slate-700 py-4 hover:bg-slate-800 rounded-lg px-3 cursor-pointer">
                <h2 className="text-xl text-white font-semibold">Profile</h2>
                <p className="text-slate-400 text-sm">Edit your profile information</p>
            </div>

            <div className="border-b border-slate-700 py-4 hover:bg-slate-800 rounded-lg px-3 cursor-pointer">
                <h2 className="text-xl text-white font-semibold">Password</h2>
                <p className="text-slate-400 text-sm">Change your password</p>
            </div>

            <div className="border-b border-slate-700 py-4 hover:bg-slate-800 rounded-lg px-3 cursor-pointer">
                <h2 className="text-xl text-white font-semibold">Preference</h2>
                <p className="text-slate-400 text-sm">Currency settings</p>
            </div>

            <div className="border-b border-slate-700 py-4 hover:bg-red-900/20 rounded-lg px-3 cursor-pointer">
                <h2 className="text-xl text-red-400 font-semibold">Danger Zone</h2>
                <p className="text-slate-400 text-sm">Delete account or transactions</p>
            </div>

            <div className="py-4 hover:bg-slate-800 rounded-lg px-3 cursor-pointer">
                <h2 className="text-xl text-cyan-400 font-semibold">
                    <Logout />
                </h2>
                <p className="text-slate-400 text-sm">Logout from your account</p>
            </div>
        </div>
    </div>
        
      </div>
    </div>
  )
}

export default setting