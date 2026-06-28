import React from "react";

function TransTable() {
  return (
    <div className="w-full bg-slate-950 p-4 sm:p-7">

      {/* Container */}
      <div className="border border-gray-700 rounded-lg bg-slate-900 p-4 sm:p-16">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">

          <h1 className="text-xl sm:text-2xl text-white font-semibold">
            Recent Transactions
          </h1>

          {/* Search + Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">

            <input
              type="text"
              placeholder="Search..."
              className="w-full sm:w-64 h-10 px-3 rounded bg-white text-black outline-none"
            />

            <button className="h-10 px-4 rounded bg-violet-400 hover:bg-violet-500 text-white">
              Search
            </button>

            <button className="h-10 px-4 rounded bg-violet-400 hover:bg-violet-500 text-white">
              Filter
            </button>

          </div>
        </div>

        {/* Table Wrapper (IMPORTANT for responsiveness) */}
        <div className="mt-6 overflow-x-auto">

          <table className="w-full min-w-[600px] text-left border-collapse">

            <thead className="bg-slate-800 text-violet-300">
              <tr>
                <th className="p-3">Date</th>
                <th className="p-3">Category</th>
                <th className="p-3">Description</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Type</th>
              </tr>
            </thead>

            <tbody>
              {Array(5).fill(0).map((_, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-700 hover:bg-slate-800 transition"
                >
                  <td className="p-3 text-white">26/06/2026</td>
                  <td className="p-3 text-white">Party</td>
                  <td className="p-3 text-white">Birthday Celebration</td>
                  <td className="p-3 text-white">2000</td>
                  <td className="p-3 text-white">Expense</td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>
    </div>
  );
}

export default TransTable;