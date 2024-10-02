import React, { useEffect, useState } from 'react'
import Container from './Layer/Container'
import TitleHeader from './Layer/TitleHeader'
import ProductsItem from './Layer/ProductsItem'
import axios from 'axios'

const SpecialOffer = () => {

  let [allData, setALlData] = useState ([])

  useEffect (()=>{
    const getData = async ()=>{
      let response = await axios.get("https://dummyjson.com/products")
      setALlData(response.data.products);
      
    }
    getData()
  },[]);





  return (

        <Container className='mb-24'>
            <TitleHeader className='mb-12' headerText='Special Offers' />

           <div className='flex justify-between'> 


            
               {
                // allData.slice(0, 4)

                allData.filter((product, index) => index >= 4 && index < 8)
                  .map((item, index) => (
                    <ProductsItem
                      key={index}
                      src={item.thumbnail}
                      pName={item.title}
                      price={item.price}
                      brand={item.brand}
                      offer={item.discountPercentage}
                    />
                  ))
              }
            




           {/* <ProductsItem src='/SpecialOffer/image_1.png' pName="Basic Crew Neck Tee" price='90' brand='Black' />
            <ProductsItem src='/SpecialOffer/image_2.png' pName="Basic Crew Neck Tee" price='90' brand='Black' />
            <ProductsItem src='/SpecialOffer/image_3.png' pName="Basic Crew Neck Tee" price='90' brand='Black' />
            <ProductsItem src='/SpecialOffer/image_4.png' pName="Basic Crew Neck Tee" price='90' brand='Black' /> */}
           </div>
        </Container>

  )
}

export default SpecialOffer