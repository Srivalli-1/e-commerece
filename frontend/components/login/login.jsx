import React from 'react'

const login = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-gray-100'>
    <div className='box-border flex flex-col border h-96 w-96 shadow-xl shadow-black-600mb rounded-xl'>
    <div>l
        <h1 className='text-center text-2xl font-bold'>User Login</h1>
    </div>
    <div className='w-full'>
        
        <form className='w-full flex flex-col justify-center items-center mt-5'>
<div>
    <input type='email' required autoComplete='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
<IoMailSharp />
</div>

        </form>
    </div>
    </div>
    </div>
  )
}

export default login