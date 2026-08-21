import React from 'react';
import { useNavigate } from "react-router-dom";



function Logout() {
    const navigate = useNavigate();
    const handleLogout = async () => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/logout`,
            {
                method: "GET",
                credentials: "include"
            }
        );

        const data = await response.json();

        if (data.success) {
            navigate("/login");
        }
    } catch (error) {
        console.log(error);
    }
};
  return (
    <div>
        <form onSubmit={handleLogout}>
              <button type="submit">
                        Logout
              </button>
        </form>
    </div>
  )
}

export default Logout