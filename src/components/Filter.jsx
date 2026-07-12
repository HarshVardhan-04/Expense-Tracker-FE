import React, { useState } from "react";

function Filter({ isFilter, handleFilter }) {

    const [type, setType] = useState("All");

    if (!isFilter) return null;

    const handleChange = (e) => {
        const value = e.target.value;
        setType(value);
        handleFilter(value);
    };

    return (
        <div className="mt-4 bg-slate-800 p-5 rounded-lg text-white">

            <h2 className="mb-3">Filters</h2>

            <select
                value={type}
                onChange={handleChange}
                className="text-black p-2 rounded text-white bg-gray-900"
            >
                <option value="All">All</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>

        </div>
    );
}

export default Filter;