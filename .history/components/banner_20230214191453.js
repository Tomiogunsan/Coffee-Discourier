import React from 'react'

export default function banner(props) {
  return (
    <div className='flex flex-col items-center md:ml-12 mt-[80px] px-4'>
      <h1>
        <span className='text-[#f5f5f5]  text-4xl md:text-5xl font-extrabold'> Coffee</span>
        <span className='text-[#4B0082] text-4md:text-5xl font-bold ml-2 '>Discourier</span>
      </h1>
      <p className='text-[#f5f5f5] text-2xl py-4'>Discover your local coffee shops!</p>
      <button className='md:w-[20%] bg-[#4B0082] text-[#f5f5f5] text-lg px-4 py-2 rounded-md' onClick={props.handleOnClick}>{props.buttonText}</button>
    </div>
  )
}
