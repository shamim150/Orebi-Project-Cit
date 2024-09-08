import React from 'react'
import Container from './Layer/Container'
import TitleHeader from './Layer/TitleHeader'
import ProductsItem from './Layer/ProductsItem'

const BestSeller = () => {
  return (
 <Container className='mt-24 '>
  <TitleHeader className='mb-12' headerText='Best Seller' />
  <div className='flex justify-between '>
    <ProductsItem src='/BestSeller/Image1.png' pName="Bangladeshi" price='55' brand='M&S' />
    <ProductsItem src='/BestSeller/Image2.png' pName="Bangladeshi" price='55' brand='M&S' />
    <ProductsItem src='/BestSeller/Image3.png' pName="Bangladeshi" price='55' brand='M&S' />
    <ProductsItem src='/BestSeller/Image4.png' pName="Bangladeshi" price='55' brand='M&S' />
  </div>
 </Container>
  )
}

export default BestSeller