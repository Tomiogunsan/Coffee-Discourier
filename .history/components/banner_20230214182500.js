import React from 'react'

export default function banner(props) {
  return (
    <div>
      <h1>
        <span> Coffee</span>
        <span>Discovrier</span>
      </h1>
      <p>Discover your local coffee shops!</p>
      <button>{props}</button>
    </div>
  )
}
