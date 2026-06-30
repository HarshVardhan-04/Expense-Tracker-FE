import React from 'react'
function Input() {
  return (
    <div className=" w-full bg-[#151f38] rounded-xl p-4 sm:p-7 shadow-lg border border-slate-700 ">

      <h2 className="text-2xl font-bold text-white mb-6">
        Add Expenses
      </h2>

      <div className="grid grid-cols-2 gap-5">

        <input
          type="number"
          placeholder="Amount"
          className="bg-[#25314d] text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-violet-500"
        />

        <input
          type="date"
          className="bg-[#25314d] text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-violet-500"
        />

        <input
          type="text"
          list="categories"
          placeholder="Category"
          className="bg-[#25314d] text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-violet-500"
        />

        <datalist id="categories">
          <option value="Food" />
          <option value="Transport" />
          <option value="Shopping" />
          <option value="Bills" />
          <option value="Entertainment" />
          <option value="Healthcare" />
        </datalist>

        <input
          type="text"
          placeholder="Description"
          className="bg-[#25314d] text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-violet-500 col-span-2"
        />

         
        

      </div>

      <div className="mt-6 flex justify-end">
        <button className="bg-violet-500 hover:bg-violet-600 transition px-8 py-3 rounded-lg text-white font-semibold">
          Add 
        </button>
      </div>

    </div>
  );
}

export default Input;