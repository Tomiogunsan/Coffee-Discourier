import React from 'react'

export default function banner(props) {
  return (
    <div className='flex flex-col '>
      <h1>
        <span className='text-white text-2xl'> Coffee</span>
        <span>Discovrier</span>
      </h1>
      <p>Discover your local coffee shops!</p>
      <button onClick={props.handleOnClick}>{props.buttonText}</button>
    </div>
  )
}
