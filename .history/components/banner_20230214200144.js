import React from 'react'

export default function banner(props) {
  return (
    <div className='max-w-6xl mx-auto md:ml-12 mt-[80px] ml-4'>
      <h1 >
        <span className='text-[#f5f5f5]  text-[45px] md:text-6xl font-extrabold'> Coffee</span>
        <span className='text-[#4B0082] block md:inline-block text-[42px] md:text-6xl font-bold md:ml-2 '>Discourier</span>
      </h1>
      <p className='text-[#f5f5f5] text-xl md:text-2xl py-2 md:py-4'>Discover your local coffee shops!</p>
      <button className='md:w-[20%] bg-[#4B0082] text-[#f5f5f5] text-lg px-4 py-4 rounded-md' onClick={props.handleOnClick}>{props.buttonText}</button>
    </div>
  )
}