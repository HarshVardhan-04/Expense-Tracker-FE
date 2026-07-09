import React from "react";
import Register from "./register";

import {
  FaWallet,
  FaMoneyBillTrendUp,
  FaUserShield,
  FaTableCellsLarge,
  FaArrowRightArrowLeft,
} from "react-icons/fa6";

function Home() {
  return (
    <div className="flex ">
      <div className="min-h-screen w-[60vw] bg-[#0B1120] text-white ">

      {/* Navbar */}
      <div className="h-16 w-full bg-gray-800 border-b border-violet-500/20 flex items-center px-6">
        <FaWallet className="text-4xl text-violet-500" />

        <h1 className="ml-3 text-2xl font-bold tracking-wide">
          Expense Tracker
        </h1>
      </div>

      {/* Hero Section */}
      <div className="px-10 pt-10">
        <p className="text-cyan-400 font-medium">
          Take control of your expenses
        </p>

        <h1 className="text-5xl font-bold mt-2">
          Smart Expense
        </h1>

        <h1 className="text-7xl font-extrabold text-violet-500">
          Tracker
        </h1>

        <p className="text-slate-400 text-lg mt-6 leading-8">
          Track all your income and expenses,
          <br />
          manage your budget and achieve your financial goals.
        </p>
      </div>

      {/* Features */}
      <div className="px-10 mt-10 space-y-5">

        {/* Card 1 */}
        <div className="flex items-center bg-slate-900 border border-slate-700 rounded-xl p-5 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">

          <div className="bg-emerald-500/10 p-4 rounded-lg">
            <FaMoneyBillTrendUp className="text-3xl text-emerald-400" />
          </div>

          <div className="ml-5">
            <h2 className="text-lg font-semibold">
              Income Management
            </h2>

            <p className="text-slate-400 text-sm">
              Track every source of income separately.
            </p>
          </div>

        </div>

        {/* Card 2 */}
        <div className="flex items-center bg-slate-900 border border-slate-700 rounded-xl p-5 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">

          <div className="bg-cyan-500/10 p-4 rounded-lg">
            <FaUserShield className="text-3xl text-cyan-400" />
          </div>

          <div className="ml-5">
            <h2 className="text-lg font-semibold">
              Secure Authentication
            </h2>

            <p className="text-slate-400 text-sm">
              JWT + Cookies keep your account secure.
            </p>
          </div>

        </div>

        {/* Card 3 */}
        <div className="flex items-center bg-slate-900 border border-slate-700 rounded-xl p-5 hover:border-violet-400 hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300">

          <div className="bg-violet-500/10 p-4 rounded-lg">
            <FaTableCellsLarge className="text-3xl text-violet-400" />
          </div>

          <div className="ml-5">
            <h2 className="text-lg font-semibold">
              Organized Categories
            </h2>

            <p className="text-slate-400 text-sm">
              Categorize transactions for better insights.
            </p>
          </div>

        </div>

        {/* Card 4 */}
        <div className="flex items-center bg-slate-900 border border-slate-700 rounded-xl p-5 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 mb-5">

          <div className="bg-orange-500/10 p-4 rounded-lg">
            <FaArrowRightArrowLeft className="text-3xl text-orange-400" />
          </div>

          <div className="ml-5">
            <h2 className="text-lg font-semibold">
              Recent Transactions
            </h2>

            <p className="text-slate-400 text-sm">
              View the latest transactions instantly.
            </p>
          </div>

        </div>

      </div>

    </div>

     <div className="w-[40vw] min-h-screen bg-gray-900  flex items-center justify-center p-10">
        <Register/>
      </div>
    </div>
  );
}

export default Home;