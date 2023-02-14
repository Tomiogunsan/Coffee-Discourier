import React from 'react'

export default function banner(props) {
  return (
    <div className='flex flex-col items-center'>
      <h1>
        <span className='text-[#f5f5f5] text-5xl font-bold'> Coffee</span>
        <span className='text-[#f5f5f5] text-5xl font-bold ml-2'>Discourier</span>
      </h1>
      <p className='text-[#c5c6d0] text-lg py-4'>Discover your local coffee shops!</p>
      <button className='bg-[#c5c6d0] text-[#232023] px-4 py-2 rounded-md' onClick={props.handleOnClick}>{props.buttonText}</button>
    </div>
  )
}
