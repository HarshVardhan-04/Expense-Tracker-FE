import React, { useEffect, useState } from "react";
import Sidebar from '../../components/Sidebar'
import Nav from "../../components/Nav";
import Stats from "../../components/Stats";

import { FaArrowTrendUp, FaArrowTrendDown, FaWallet } from "react-icons/fa6";
import LineGraph from "../../components/LineGraph";
import Logout from "../../components/Logout";
import Change from "./changePassword";
import Danger from "./danger";
import Preference from "./preference";
import Profile from "./profile";

function setting() {
    const [open, setopen] = useState(false);
    const [open1, setopen1] = useState(false);
    const [open2, setopen2] = useState(false);
    const [open3, setopen3] = useState(false);
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
                <button 
                    onClick={() => setopen(!open)}
                    className="text-xl text-white font-semibold">Profile</button>
                <p className="text-slate-400 text-sm">Edit your profile information</p>
            </div>

             <div className = "my-3">
                <Profile
                open={open}
                />
             </div>   

            <div className="border-b border-slate-700 py-4 hover:bg-slate-800 rounded-lg px-3 cursor-pointer">
                <button 
                    onClick={() => setopen1(!open1)}
                    className="text-xl text-white font-semibold">Password</button>
                <p className="text-slate-400 text-sm">Change your password</p>
            </div>

            <div className = "my-3">
                <Change 
                open1={open1}
                />
            </div>    

            <div className="border-b border-slate-700 py-4 hover:bg-slate-800 rounded-lg px-3 cursor-pointer">
                <button 
                    onClick={() => setopen2(!open2)}
                    className="text-xl text-white font-semibold">Preference</button>
                <p className="text-slate-400 text-sm">Currency settings</p>
            </div>

            <div className = "my-3">
                <Preference
                open2={open2}
                />
            </div>

            <div className="border-b border-slate-700 py-4 hover:bg-red-900/20 rounded-lg px-3 cursor-pointer">
                <button 
                    onClick={() => setopen3(!open3)}
                    className="text-xl text-red-400 font-semibold">Danger Zone</button>
                <p className="text-slate-400 text-sm">Delete account or transactions</p>
            </div>

            <div className="my-3">
                <Danger 
                open3={open3}
                />
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