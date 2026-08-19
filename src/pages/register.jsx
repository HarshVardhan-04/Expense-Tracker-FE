import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          age,
          email,
          password,
        }),
      });

      const data = await response.json();

      alert(data.message);

      // Clear form after successful registration
      setName("");
      setAge("");
      setEmail("");
      setPassword("");
      navigate("/login");

    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="h-screen w-full bg-gray-900 flex items-center justify-center">
      <div className="w-96 bg-gray-700 p-8 rounded-md shadow-lg">
        <h1 className="text-white text-3xl text-center mb-6">
          Register Now
        </h1>

        <form onSubmit={handleRegister}>
          <label htmlFor="name" className="text-white">
            Name
          </label>
          <input
            className="w-full border border-gray-300 p-3 mt-2 mb-4 rounded-md bg-gray-600 text-white"
            type="text"
            id="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="age" className="text-white">
            Age
          </label>
          <input
            className="w-full border border-gray-300 p-3 mt-2 mb-4 rounded-md bg-gray-600 text-white"
            type="number"
            id="age"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />

          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            className="w-full border border-gray-300 p-3 mt-2 mb-4 rounded-md bg-gray-600 text-white"
            type="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" className="text-white">
            Password
          </label>
          <input
            className="w-full border border-gray-300 p-3 mt-2 mb-6 rounded-md bg-gray-600 text-white"
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md"
          >
            Create Account
          </button>
        </form>

        <div className="text-white text-center">
                    <h5 className="p-3">Already have an account </h5>
                    <Link to="/login" className="text-l rounded-md border-2 border-blue-500 px-5 py-2 hover:bg-gray-600 hover:text-xl">
                            Login Now
                    </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;