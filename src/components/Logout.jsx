import React from 'react'

function Logout() {
     const handleLogout = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/logout", {
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