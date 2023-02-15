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
        <title>Coffee Discourier</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       
    <Banner  buttonText='View stores nearby' 
    handleOnClick={handleOnBannerBtn}/>
    <Image 
    src="/static/hero-image.png" 
    width={700} 
    height={400}
    className="absolute top-[62px] md:top-10 z-1 md:right-[20%]"
    />

       

        
           
          
      </main>
    </>
  )
}
