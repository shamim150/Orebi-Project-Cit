import React from 'react'
import Container from './Layer/Container'
import TitleHeader from './Layer/TitleHeader'
import ProductsItem from './Layer/ProductsItem'

const SpecialOffer = () => {
  return (

        <Container className='mb-24'>
            <TitleHeader className='mb-12' headerText='Special Offers' />

           <div className='flex justify-between'> 
           <ProductsItem src='/SpecialOffer/image_1.png' pName="Basic Crew Neck Tee" price='90' brand='Black' />
            <ProductsItem src='/SpecialOffer/image_2.png' pName="Basic Crew Neck Tee" price='90' brand='Black' />
            <ProductsItem src='/SpecialOffer/image_3.png' pName="Basic Crew Neck Tee" price='90' brand='Black' />
            <ProductsItem src='/SpecialOffer/image_4.png' pName="Basic Crew Neck Tee" price='90' brand='Black' />
           </div>
        </Container>

  )
}

export default SpecialOffer