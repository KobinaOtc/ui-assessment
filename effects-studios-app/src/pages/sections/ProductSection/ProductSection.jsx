import React from 'react'
import './ProductSection.css'
import ProductCard from '../../../components/ProductCard/ProductCard'
import productImages from './images'



const productData = [
  {
    id: 1,
    desc: 'Manchester United 21-22',
    customCardStyleParent: "border bg-white max-w-sm",
    imageUrl: productImages.product,
    typeName: 'product',
    price: "€30.00",
    discountPercentage: 'Save 67%',
    discount: '€89.95',
  },
  {
    id: 2,
    desc: 'Manchester United 21-22',
    customCardStyleParent: "border bg-white max-w-sm",
    imageUrl: productImages.product,
    typeName: 'product',
    price: "€30.00",
    discountPercentage: 'Save 67%',
    discount: '€89.95',
  },
  {
    id: 3,
    desc: 'Manchester United 21-22',
    customCardStyleParent: "border bg-white max-w-sm",
    imageUrl: productImages.product,
    typeName: 'product',
    price: "€30.00",
    discountPercentage: 'Save 67%',
    discount: '€89.95',
  },
  {
    id: 4,
    desc: 'Manchester United 21-22',
    customCardStyleParent: "border bg-white max-w-sm",
    imageUrl: productImages.product,
    typeName: 'product',
    price: "€30.00",
    discountPercentage: 'Save 67%',
    discount: '€89.95',
  },
  {
    id: 5,
    desc: 'Manchester United 21-22',
    customCardStyleParent: "border bg-white max-w-sm",
    imageUrl: productImages.product,
    typeName: 'product',
    price: "€30.00",
    discountPercentage: 'Save 67%',
    discount: '€89.95',
  },
]
const ProductSection = () => {
  return (
    <div className='sectionStyles container mx-auto'>
        <div>
          <h2 style={{ paddingBottom: '80px' }}>MOST POPULAR T-SHIRTS</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          { productData.map((item) => (
            <div key={item.id}>
              {console.log(item.imageUrl)}
              <ProductCard 
                discount={item.discount} 
                discountPercentage={item.discountPercentage} 
                price={item.price} desc={item.desc} 
                typeName={item.typeName} 
                customCardStyleParent={item.customCardStyleParent} 
                imageUrl={item.imageUrl} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default ProductSection