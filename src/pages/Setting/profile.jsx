import React from 'react'

function profile({open}) {
  if(!open) return null;
  
    return (

            <div className="bg-slate-800  w-[550px] rounded-xl p-6 border border-slate-950 w-full max-w-md shadow">
                <div className='text-white'>
                    <h1 className='text-xl'>Change Name</h1>
                    <input className='my-2 w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none' type="text" placeholder='Type your new Name here...'/>
                    <button className='bg-blue-600 hover:bg-blue-700 text-black rounded-md p-1 hover:text-xl'>Update</button>
                </div>  
                <div className='text-white my-3'>
                    <h1 className='text-xl'>Change Email</h1>
                    <input className='my-2 w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none' type="text" placeholder='Type your old Email here...'/>
                    <input className='my-2 w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none' type="text" placeholder='Type your new Email here...'/>
                    <button className='bg-blue-600 hover:bg-blue-700 text-black rounded-md p-1 hover:text-xl'>Update</button>
                </div>
            </div>

  )
}

export default profile