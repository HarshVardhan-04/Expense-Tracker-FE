import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch("http://localhost:5000/api/login", {

                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();

            alert(data.message);

            setEmail("");
            setPassword("");
            navigate("/dashboard");

        } catch (error) {

            console.log(error);
            alert("Something went wrong!");

        }
    };

    return (
        <div className="h-screen w-full bg-gray-900 flex items-center justify-center">

            <div className="w-96 bg-gray-700 p-8 rounded-md">

                <h1 className="text-white text-3xl text-center mb-6">
                    Login Now
                </h1>

                <form onSubmit={handleLogin}>

                    <label className="text-white">
                        Email
                    </label>

                    <input
                        className="w-full border border-gray-300 p-3 mt-2 mb-4 rounded-md bg-gray-600 text-white"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className="text-white">
                        Password
                    </label>

                    <input
                        className="w-full border border-gray-300 p-3 mt-2 mb-6 rounded-md bg-gray-600 text-white"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Login;