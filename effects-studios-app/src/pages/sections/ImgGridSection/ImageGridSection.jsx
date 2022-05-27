import React from 'react'
import ProductCard from '../../../components/ProductCard/ProductCard'
import './ImageGridSection.css'
import productImages from '../ProductSection/images'

const data = [
  {
    id: 1,
    cardTitle:'Champions League',
    imageUrl: productImages.countryLeagues.cL
  },
  {
    id: 2,
    cardTitle:'Europa League',
    imageUrl: productImages.countryLeagues.eL
  },
  {
    id: 3,
    cardTitle:'Copa America',
    imageUrl: productImages.countryLeagues.cA
  },
  {
    id: 4,
    cardTitle:'Asian Cup',
    imageUrl: productImages.countryLeagues.aC
  },
  {
    id: 5,
    cardTitle:'African Nations Cup',
    imageUrl: productImages.countryLeagues.cF
  },
]

const ImageGridSection = () => {
  return (
    <div className='sectionStyles container mx-auto'>
        <div>
          <h2 style={{ paddingBottom: '80px' }}>Country Leagues</h2>
        </div>
        <div className='sectionItemStyles'>
            {data.map((item) => <ProductCard key={item.id} 
                cardTitle={item.cardTitle} customCardStyleParent="bg-white max-w-sm card-size" imageUrl={item.imageUrl}/>)}
        </div>
    </div>

  )
}

export default ImageGridSection