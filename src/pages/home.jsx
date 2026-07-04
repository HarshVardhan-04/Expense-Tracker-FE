import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-96 h-screen mx-auto">
      <h1 className="text-2xl my-5">Home</h1>

      <Link
        to="/register"
        className="bg-gray-600 text-white p-3 rounded-md hover:bg-blue-500 m-5"
      >
        Register
      </Link>

      <Link
        to="/login"
        className="bg-gray-600 text-white p-3 rounded-md hover:bg-blue-500 m-5"
      >
        Login
      </Link>
    </div>
  );
}

export default Home;