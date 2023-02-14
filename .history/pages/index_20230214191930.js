import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import Banner from '../components/banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  function handleOnBannerBtn() {
    console.log("hi");
  }
  return (
    <>
      <Head>
        <title>Coffee D</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       
    <Banner  buttonText='View stores nearby' handleOnClick={handleOnBannerBtn}/>

       

        
           
          
      </main>
    </>
  )
}
