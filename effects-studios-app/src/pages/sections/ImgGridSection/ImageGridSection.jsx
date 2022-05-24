import React from 'react'
import ProductCard from '../../../components/ProductCard/ProductCard'
import './ImageGridSection.css'

const ImageGridSection = () => {
  return (
    <div className='sectionStyles container mx-auto'>
        <div>
          <h1>Popular</h1>
        </div>
        <div className='sectionItemStyles'>
            <ProductCard 
                customCardStyleParent="bg-white max-w-sm" imageUrl={require('../../../assets/country-leagues/champions-league.jpg')}/>
            <ProductCard 
                customCardStyleParent="bg-white max-w-sm" imageUrl={require('../../../assets/country-leagues/europa-league.jpg')}/>
            <ProductCard 
                customCardStyleParent="bg-white max-w-sm" imageUrl={require('../../../assets/country-leagues/copa-america.jpg')}/>
            <ProductCard 
                customCardStyleParent="bg-white max-w-sm" imageUrl={require('../../../assets/country-leagues/asian-cup.jpg')}/>
            <ProductCard 
                customCardStyleParent="bg-white max-w-sm" imageUrl={require('../../../assets/country-leagues/caf.jpg')}/>
        </div>
    </div>

  )
}

export default ImageGridSection