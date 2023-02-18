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

  const {address, name, neighbourhood, imgUrl } = props.coffeeStores
if(router.isFallback){
  return <div>Loading...</div>
}

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <div>
      <div>
      <Link href='/'>
        Back to home
      </Link>
      <h1>{name}</h1>
      <Image 
      src={imgUrl} 
      width={600} 
      height={360} 
      alt='/'/>
      </div>

      <div>
        <div>
        <p>{address}</p>
        </div>
        <div>
        <p>{neighbourhood}</p>
        </div>
        <div>
        <p>1</p>
        </div>
        <button onClick={handleUpvoteButton}>Up vote</button>
      </div>
      </div>
     
      
     
      
      
      </div>
  )
}
