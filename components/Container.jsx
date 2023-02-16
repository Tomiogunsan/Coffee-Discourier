import React from 'react'

export default function Container({children}) {
  return (
    <div className='max-w-7xl mx-auto pt-[80px] pl-4'>
        {children}
    </div>
  )
}
