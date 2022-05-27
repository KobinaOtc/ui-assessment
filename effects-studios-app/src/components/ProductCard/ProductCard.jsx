import React from 'react'
import './ProductCard.css'

export default function ProductCard({ cardTitle ,imageUrl, desc, price, customCardStyleParent, typeName, discountPercentage, discount }) {
 
  const cardType = () => {
  if (typeName === 'product') {
    return (
      <div className="p-6">
        <p className="text-gray-700 text-base mb-4">
        {desc}
        </p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h5 className="text-gray-900 text-xl font-medium mb-2 price">{price}</h5> <span className='discount-price'>{discount}</span>
        </div>
        {/* <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
      </div>
    )} else {
      return (
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{cardTitle}</h5>
          {/* <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
        </div>
      )
    }
  }

  const discountToggle = () => {
    if (discountPercentage !== undefined) {
      return (
        <div className='discount-percentage'>{discountPercentage}</div>
      )
    }
  }

  return (
    <div>
        <div className="flex">
          <div className={customCardStyleParent}>
            <a style={{ textDecoration: 'none' }} href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img className="t-lg w-full" src={imageUrl} alt=""/>
              {discountToggle()}
            </a>
            {cardType()}
          </div>
        </div>
    </div>
  )
}
