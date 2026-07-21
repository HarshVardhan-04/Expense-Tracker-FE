import React from 'react'

function changePassword({open1}) {
    
    if(!open1) return null;
  
    return (

            <div className="bg-[#151f38]  w-[550px] rounded-xl p-6 border border-slate-950 w-full max-w-md shadow">
                <h1 className=" text-white"> 
                    <h1 className='text-xl'>Change Password</h1>
                    <input  className='my-2 w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none' type="password" placeholder='Enter your Current Password'/>
                    <input  className='my-2 w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none' type="password" placeholder='Enter your new Password'/>
                    <input  className='my-2 w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none' type="password" placeholder='Re-Enter your new Password'/>
                    <button className='bg-blue-600 hover:bg-blue-700 text-black rounded-md p-1 hover:text-xl'>Submit</button>
                </h1>
            </div>

  )
}

export default changePassword