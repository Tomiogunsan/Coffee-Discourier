import React from 'react'

export default function banner(props) {
  return (
    <div className='flex flex-col ml-[80px] mt-'>
      <h1>
        <span className='text-[#f5f5f5] text-5xl font-extrabold'> Coffee</span>
        <span className='text-[#4B0082] text-5xl font-bold ml-2 block'>Discourier</span>
      </h1>
      <p className='text-[#f5f5f5] text-2xl py-4'>Discover your local coffee shops!</p>
      <button className='w-[20%] bg-[#4B0082] text-[#f5f5f5] px-4 py-2 rounded-md' onClick={props.handleOnClick}>{props.buttonText}</button>
    </div>
  )
}
