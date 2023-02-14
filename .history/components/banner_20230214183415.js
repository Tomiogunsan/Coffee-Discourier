import React from 'react'

export default function banner(props) {
  return (
    <div className='flex flex-col items-center'>
      <h1>
        <span className='text-white text-2xl font-bold'> Coffee</span>
        <span>Discovrier</span>
      </h1>
      <p>Discover your local coffee shops!</p>
      <button onClick={props.handleOnClick}>{props.buttonText}</button>
    </div>
  )
}
