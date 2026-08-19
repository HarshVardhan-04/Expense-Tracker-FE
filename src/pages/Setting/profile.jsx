import React from 'react'
import { useState } from 'react';
import { useAuth } from "../../context/AuthContext";

function profile({open}) {
  if(!open) return null;
  const [newName, setNewName] = useState("");
  const [oldEmail, setOldEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const { setUser } = useAuth();

  const handleName = async () => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/update-name`,
            {
                method: "PUT",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: newName,
                }),
            }
        );

        const updatedUser = await response.json();

        setUser(updatedUser);

        setNewName("");

        alert("Name Updated Successfully");
    } catch (err) {
        console.log(err);
    }
};

        const handleEmail = async () => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/email`,
            {
                method: "PUT",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    oldEmail,
                    newEmail,
                }),
            }
        );

        const updatedUser = await response.json();

        setUser(updatedUser);

        setOldEmail("");
        setNewEmail("");

        alert("Email Updated Successfully");
    } catch (err) {
        console.log(err);
    }
};
  
    return (

            <div className="bg-slate-800  w-[550px] rounded-xl p-6 border border-slate-950 w-full max-w-md shadow">
                <div className='text-white'>
                    <h1 className='text-xl'>Change Name</h1>
                    <input 
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className='my-2 w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none' type="text" placeholder='Type your new Name here...'/>
                    <button 
                    onClick={handleName}
                    className='bg-blue-600 hover:bg-blue-700 text-black rounded-md p-1 hover:text-xl'>Update</button>
                </div>  
                <div className='text-white my-3'>
                    <h1 className='text-xl'>Change Email</h1>
                    <input 
                    value={oldEmail}
                    onChange={(e) => setOldEmail(e.target.value)}
                    className='my-2 w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none' type="text" placeholder='Type your old Email here...'/>
                    <input 
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className='my-2 w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none' type="text" placeholder='Type your new Email here...'/>
                    <button 
                    onClick={handleEmail}
                    className='bg-blue-600 hover:bg-blue-700 text-black rounded-md p-1 hover:text-xl'>Update</button>
                </div>
            </div>

  )
}

export default profile