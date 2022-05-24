import React from 'react'
import './ProductSection.css'
import ProductCard from '../../../components/ProductCard/ProductCard'

const ProductSection = () => {
  return (
    <div className='sectionStyles container mx-auto'>
        <div>
          <h1>Popular</h1>
        </div>
        <ProductCard customCardStyleParent="border bg-white max-w-sm" imageUrl={require('../../../assets/product-medium.jpg')} />
    </div>
  )
}

export default ProductSection