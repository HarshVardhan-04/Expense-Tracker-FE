import React from 'react'

function preference({open2}) {
  if(!open2) return null;
  
    return (

            <div className="bg-[#151f38]  w-[550px] rounded-xl p-6 border border-slate-950 w-full max-w-md shadow">
                <h1 className=" text-white my-2 text-xl"> 
                    Preference
                </h1>   
                <div className='text-white my-2'>
                    Choose your Currency:
                    <select 
                    className="text-black p-2 rounded text-white bg-gray-900 mx-3 border border-white"
                    >
                        <option value="">Rupee</option>
                        <option value="">Dollar</option>
                        <option value="">Yen</option>
                        <option value="">Euro</option>
                        <option value="">Pounds</option>
                        <option value="">Yuan</option>
                    </select>
                </div>
                    
                
            </div>

  )
}

export default preference