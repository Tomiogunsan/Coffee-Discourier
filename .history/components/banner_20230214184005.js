import React from 'react'

export default function banner(props) {
  return (
    <div className='flex flex-col items-center'>
      <h1>
        <span className='text-[#dbd7d2] text-xl font-bold'> Coffee</span>
        <span className='text-[#dbd7d2] text-2xl font-bold ml-2'>Discovrier</span>
      </h1>
      <p>Discover your local coffee shops!</p>
      <button onClick={props.handleOnClick}>{props.buttonText}</button>
    </div>
  )
}
