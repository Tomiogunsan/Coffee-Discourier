import Head from 'next/head'
import Image from 'next/image'


import Banner from '../components/banner'
import Card from '../components/Card'
import coffeeStoresData from "../data/coffee-stores.json"
import Container from '../components/Container'
import { fetchCoffeeStores } from '../library/coffee-stores'



export async function getStaticProps(context){
  
  const coffeeStores = await fetchCoffeeStores();
    
    // .catch(err => console.error(err));
  return{
    props: {
      coffeeStores: data.results,
    },
  };
}

export default function Home(props) {
  
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
       <Container>
    <Banner  buttonText='View stores nearby' 
    handleOnClick={handleOnBannerBtn}/>
    <div className="absolute top-[60px] pt-[60px] md:top-0 z-1 
    md:right-0">
    <Image 
    src="/static/hero-image.png" 
    width={700} 
    height={400}
    alt='/'
    
    />
    </div>
    
    {props.coffeeStores.length > 0 &&  (  <> 
    <h2 className='  mt-4 pt-[180px] text-[#fff] text-4xl font-bold'>Toronto stores</h2>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2  text-[#4B0082]'>
      {props.coffeeStores.map((coffeeStore) => (
       
          <Card key={coffeeStore.id}
          name={coffeeStore.name}
          imgUrl={coffeeStore.imgUrl || "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}
          href={`/coffee-store/${coffeeStore.id}`}
          />
         
      ))}
      
     
    
    </div>
    </>
    )
    

}
</Container>

        
           
          
      </main>
    </>
  )
}
