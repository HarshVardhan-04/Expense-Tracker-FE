import React, { useEffect, useState } from "react";

function TransTable({
  showType,
  transactions = [],
}) {

  const[search , setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(transactions);

  

  const handleSearch = async ()=>{
    if (!search.trim()) {
        setSearchResults(transactions);
        return;
    }
    const res = await fetch(`http://localhost:5000/api/search/${search}`);

    const data = await res.json();
    setSearchResults(data);
  }
  useEffect(() => {
    setSearchResults(transactions);
}, [transactions]);

  return (
    <div className="w-full bg-slate-950 p-4 sm:p-7">

      <div className="border border-gray-700 rounded-lg bg-slate-900 p-4 sm:p-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">

          <h1 className="text-xl sm:text-2xl text-white font-semibold">
            Recent Transactions
          </h1>

          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">

            <input
              type="text"
               value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full sm:w-64 h-10 px-3 rounded bg-white text-black outline-none"
            />

            <button 
            onClick={handleSearch}
            className="h-10 px-4 rounded bg-violet-400 hover:bg-violet-500 text-white">
              Search
            </button>

            <button className="h-10 px-4 rounded bg-violet-400 hover:bg-violet-500 text-white">
              Filter
            </button>

          </div>

        </div>

        <div className="mt-6 overflow-x-auto">

          <table className="w-full table-fixed border-collapse">

            <thead className="bg-slate-800 text-violet-300">
              <tr>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">
                        {showType ? "Type" : "Action"}
                </th>
              </tr>
            </thead>

            <tbody >

              {searchResults.length > 0 ? (
              searchResults.map((item) => (

                  <tr
                    key={item._id}
                    className=" border-b border-gray-700 hover:bg-slate-800"
                  >

                    <td className="p-3 text-white">
                      {new Date(item.date).toLocaleDateString()}
                    </td>

                    <td className="p-3 text-white">
                      {item.category}
                    </td>

                    <td className="p-3 text-white">
                      {item.description}
                    </td>

                    <td className="p-3 text-white">
                      ₹ {item.amount}
                    </td>

                    <td className="p-3 text-white">
                            {showType ? (
                                item.type
                            ) : (
                                <button className="bg-red-500 px-3 py-1 rounded">
                                    Delete
                                </button>
                            )}
                      </td>

                  </tr>

                ))

              ) : (

                <tr>
                  <td
                    colSpan="5"
                    className="text-center text-gray-400 p-5"
                  >
                    No Transactions Found
                  </td>
                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default TransTable;