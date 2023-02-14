import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function CoffeeStore() {
  const router = useRouter()
 
  return (
    <div>
      CoffeeStore {router.query.slug}
      <Link href='/'>
        Back to home
      </Link>
      <Link href='/'>
        Go to page dynami
      </Link>
      </div>
  )
}
