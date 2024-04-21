import React from 'react'

function Body() {
  return (
    <div>
      <div className='w-[96%] mx-auto text-center my-10'>
        <h1 className='xl:w-[40%] xl:text-5xl mx-auto text-2xl font-bold my-4'>Skills speak louder than words</h1>
        <h1 className='xl:w-[36%] mx-auto text-lg'>We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.</h1>
        <div className='mx-auto my-10 text-center'>
          <button className='bg-green-600 py-2 px-10 text-white rounded-md mx-20 my-10'>Sign Up</button>
          <button className=' border-2 border-black px-6 py-1 rounded-md'>Request demo</button>
        </div>
      </div>
    </div>
  )
}

export default Body
