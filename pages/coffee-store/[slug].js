import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import coffeStoresData from '../../data/coffee-stores.json'

export function getStaticProps(staticProps){
  const params = staticProps.params;
  return {props:{
    coffeStores: coffeStoresData.find(coffeStore => {
      return coffeStore.id === params.id
    })
  }}
}

export function getStaticPaths(){
  return {
    paths: [
      {
        params: {id: "0"}
      },
      {
        params:{id: "1"}
      }
    ]
  }
}

export default function CoffeeStore() {
  const router = useRouter()
 
  return (
    <div>
      CoffeeStore {router.query.slug}
      <Link href='/'>
        Back to home
      </Link>
      <Link href='/'>
        Go to page dynamic
      </Link>
      </div>
  )
}
