import React, { useState } from "react";

function Input({ fetchExpenses }) {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleAddExpense = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/add`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          date,
          category,
          description,
          type:"Income",
        }),
      });

      const data = await response.json();

      alert(data.message);

      // Reload the table
      await fetchExpenses();

      // Clear form
      setAmount("");
      setDate("");
      setCategory("");
      setDescription("");

    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="w-full bg-[#151f38] rounded-xl p-7 shadow-lg border border-slate-700">
      <h2 className="text-2xl font-bold text-white mb-6">
        Add Income
      </h2>

      <form onSubmit={handleAddExpense}>
        <div className="grid grid-cols-2 gap-5">

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-[#25314d] text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-violet-500"
            required
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-[#25314d] text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-violet-500"
            required
          />

          <input
            type="text"
            list="categories"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-[#25314d] text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-violet-500"
            required
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-[#25314d] text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-violet-500 col-span-2"
            required
          />

        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-violet-500 hover:bg-violet-600 transition px-8 py-3 rounded-lg text-white font-semibold"
          >
            Add Income
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input;