import { useRouter } from 'next/router'
import React from 'react'

export default function CoffeeStore() {
  const router = useRouter()
 
  return (
    <div>
      CoffeeStore {router.query.slug}
      <L
      </div>
  )
}
