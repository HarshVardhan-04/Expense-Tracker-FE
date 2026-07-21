import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

import { MdDashboard } from "react-icons/md";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { HiOutlineChartBar } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

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
    fixed
    top-16 lg:top-0
    left-0
    h-[calc(100vh-4rem)] lg:h-screen
    w-80
    bg-gray-900
    text-white
    z-50
    overflow-y-auto
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

            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg transition-all duration-200
                  ${
                    isActive
                      ? "bg-blue-600/20 text-blue-400 border-l-4 border-blue-500"
                      : "hover:bg-gray-800 text-gray-200"
                  }`
                }
              >
                <MdDashboard className="text-xl" />
                <span>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/expense"
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg transition-all duration-200
                  ${
                    isActive
                      ? "bg-red-600/20 text-red-400 border-l-4 border-red-500"
                      : "hover:bg-gray-800 text-gray-200"
                  }`
                }
              >
                <FaArrowTrendDown className="text-lg" />
                <span>Expense</span>
              </NavLink>
            </li>

  <li>
    <NavLink
      to="/income"
      className={({ isActive }) =>
        `flex items-center gap-3 p-3 rounded-lg transition-all duration-200
        ${
          isActive
            ? "bg-green-600/20 text-green-400 border-l-4 border-green-500"
            : "hover:bg-gray-800 text-gray-200"
        }`
      }
    >
      <FaArrowTrendUp className="text-lg" />
      <span>Income</span>
    </NavLink>
  </li>

        <li>
    <NavLink
      to="/report"
      className={({ isActive }) =>
        `flex items-center gap-3 p-3 rounded-lg transition-all duration-200
        ${
          isActive
            ? "bg-purple-600/20 text-purple-400 border-l-4 border-purple-500"
            : "hover:bg-gray-800 text-gray-200"
        }`
      }
    >
      <HiOutlineChartBar className="text-xl" />
      <span>Report</span>
    </NavLink>
        </li>

  <li>
    <NavLink
      to="/setting"
      className={({ isActive }) =>
        `flex items-center gap-3 p-3 rounded-lg transition-all duration-200
        ${
          isActive
            ? "bg-slate-600/20 text-slate-200 border-l-4 border-slate-400"
            : "hover:bg-gray-800 text-gray-200"
        }`
      }
    >
      <IoSettingsOutline className="text-xl" />
      <span>Setting</span>
    </NavLink>
  </li>

  <li className="mt-6">
    <div className="flex items-center gap-3 p-3 rounded-lg bg-red-600/20 hover:bg-red-600/40 text-red-400 cursor-pointer transition-all">
      <RiLogoutCircleRLine className="text-xl" />
      <Logout />
    </div>
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