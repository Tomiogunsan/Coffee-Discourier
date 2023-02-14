import { useRouter } from 'next/router'
import React from 'react'

export default function CoffeeStore() {
  const router = useRouter()
  console.log(router)
  return (
    <div>CoffeeStore {router.query.slug}</div>
  )
}
