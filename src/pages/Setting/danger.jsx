import React from 'react'

function danger({open3}) {
  if(!open3) return null;
  
    return (

            <div className="bg-[#151f38]  w-[550px] rounded-xl p-6 border border-slate-950 w-full max-w-md shadow">
                <h1 className=" text-white my-2 text-xl"> 
                   Danger Zone
                </h1>
                <div className='text-white'>
                    <button className='border border-white my-2 rounded-md hover:text-xl p-2 hover:bg-red-700'>
                        Delete All Transaction
                    </button>
                    <button className='border border-white my-2 rounded-md hover:text-xl p-2 hover:bg-red-700'>
                        Delete your Account Permanently
                    </button>
                </div>
            </div>

  )
}

export default danger