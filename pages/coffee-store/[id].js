import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import coffeStoresData from '../../data/coffee-stores.json'



export function getStaticProps(staticProps){
  const params = staticProps.params;
  
  return {props:{
    coffeeStores: coffeStoresData.find(coffeeStore => {
      return coffeeStore.id.toString() === params.id
    })
  }}
}

export function getStaticPaths(){
  
    return {
      paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
      fallback: false,
    };
    
  };


export default function CoffeeStore(props) {
  const router = useRouter()

  const {address, name, neighbourhood, imgUrl } = props.coffeeStores;

if(router.isFallback){
  return <div>Loading...</div>
}

function handleUpvoteButton(){
  console.log('up');
}

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <div className='grid md:grid-cols-2 pt-[28px] pb-[28px] pl-[12px] pr-[12px]'>
      <div className='place-self-center'>
        <div>
        <Link href='/' className='mt-[96px] text-[18px] mb-[8px] font-bold'>
        Back to home
      </Link>
        </div>
      
      <h1 className='mb-[16px] mt-[16px] text-[36px] text-[#fff] overflow-hidden text-ellipsis whitespace-normal'>{name}</h1>
      <Image 
      src={imgUrl} 
      width={600} 
      height={360} 
      alt='/'
      className='shadow-md shadow-black/25 rounded max-w-[100%] align-middle'
      />
      </div>

      <div className=' md:w-[75%] rounded p-[16px] flex flex-col ml-[8px] self-center mt-[64px] text-[] bg-purple-rgba backdrop-blur-sm  hover:bg-lilac-rgba
     border border-lilac-rgba shadow-md shadow-black-rgba'>
        <div className='flex gap-2 items-center '>
          <Image src="/icons/location.svg" width={24} height={24} 
          alt='/'
          className='flex mb-[16px] '
          />
        <p className='pl-[8px] text-[24px] m-0 font-bold'>{address}</p>
        </div>
        <div className='flex gap-2 items-center '>
        <Image 
        src="/icons/nearMe.svg" 
        width={24} height={24} 
        alt='/' 
        
        />
        <p>{neighbourhood}</p>
        </div>
        <div className='flex gap-2 items-center '>
        <Image src="/icons/star.svg" width={24} height={24} alt='/'
        
        />
        <p className='text-lg'>1</p>
        </div>
        <button className='mt-[16px] mb-[16px] pl-[8px] pr-[8px] pt-[8px] pb-[8px] cursor-pointer text-[#fff] outline-0 text-base bg-[#4B0082] w-[100px]'
        onClick={handleUpvoteButton}>Up vote!</button>
      </div>
      </div>
     
      
     
      
      
      </div>
  )
}
