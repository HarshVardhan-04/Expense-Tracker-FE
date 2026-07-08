import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/logout", {
                method: "GET",
                credentials: "include",
            });

            const data = await response.json();

            alert(data.message);

            navigate("/login");
        } catch (error) {
            console.log(error);
            alert("Logout Failed");
        }
    };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-gray-900 text-white flex items-center justify-between px-4 z-[60] shadow-md">
        <h1 className="text-xl font-bold">Expense Tracker</h1>

        <button
          onClick={toggleSidebar}
          className="text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static
          top-16 lg:top-0
          left-0
          h-[calc(100vh-4rem)] lg:h-screen
          w-80
          bg-gray-900
          text-white
          z-50
          transform
          transition-transform
          duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Desktop Title */}
        <div className="hidden lg:block">
          <h1 className="text-3xl font-bold p-6">
            Expense Tracker
          </h1>
          <hr className="border-gray-700" />
        </div>

        {/* Menu */}
        <ul className="p-5 space-y-2">
          <li className="p-3 rounded hover:bg-gray-700 cursor-pointer">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>

          <li className="p-3 rounded hover:bg-gray-700 cursor-pointer">
            <NavLink to="/expense">Expense</NavLink>
          </li>

          <li className="p-3 rounded hover:bg-gray-700 cursor-pointer">
            <NavLink to="/income">Income</NavLink>
          </li>

          <li className="p-3 rounded hover:bg-gray-700 cursor-pointer">
            <NavLink to="/report">Report</NavLink>
          </li>

          <li className="p-3 rounded hover:bg-gray-700 cursor-pointer">
            <NavLink to="/setting">Setting</NavLink>
          </li>

          <li className="p-3 rounded hover:bg-red-600 cursor-pointer text-white">
             <form onSubmit={handleLogout}>
              <button type="submit">
                        Logout
              </button>
             </form>
          </li>
        </ul>

        <div className="absolute bottom-0 w-full border-t border-gray-700 p-4 text-center text-xs text-gray-400">
          © 2026 Expense Tracker
          <br />
              Track today, save tomorrow.
        </div>
      </aside>
    </>
  );
}

export default Sidebar;