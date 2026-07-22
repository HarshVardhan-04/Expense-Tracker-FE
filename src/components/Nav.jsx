import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

function Nav({ title = "Dashboard"}) {
  const { user } = useAuth();
  return (
    <nav className="bg-gray-800 text-white shadow h-16 flex items-center justify-between px-6 lg:ml-0 mt-16 lg:mt-0">
      <h1 className="text-2xl font-bold">
        {title}
      </h1>

      <div className="hidden md:flex items-center gap-6">

        <a href="#" className="hover:text-gray-300">
          <h2>Hi, {user?.name}</h2>
        </a>
        
      </div>
    </nav>
  );
}

export default Nav;