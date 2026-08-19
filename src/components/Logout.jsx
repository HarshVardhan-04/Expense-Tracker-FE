import React from 'react'

function Logout() {
     const handleLogout = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/logout`, {
                method: "GET",
                credentials: "include",
            });

            const data = await response.json();

            alert(data.message);

            navigate("/");
        } catch (error) {
            console.log(error);
            alert("Logout Failed");
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