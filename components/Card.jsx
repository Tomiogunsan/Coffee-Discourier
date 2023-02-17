import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Container from './Container'

export default function Card(props) {
  return (
    <>
   <Container>
    <div className=' bg-purple-rgba backdrop-blur-sm p-6 hover:bg-lilac-rgba
    rounded-xl border border-lilac-rgba shadow-md shadow-black-rgba'>
        <Link href={props.href}>
        <h2 className='font-semibold text-lg pb-4'>{props.name}</h2>
        
        <Image 
        src={props.imgUrl}
        width={260}
        height={160}
        alt='/'
        className='rounded-md'
        />
       
        
        </Link>
        
    </div>
   
    </Container>
    </>
    
  )
}

