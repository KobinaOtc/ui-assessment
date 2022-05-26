import React from 'react'
import './ProductShowcase.css'

const ProductShowcase = () => {
  return (
    <div>
        <div className='constaintsImg'>
            <div>
                <img src={require('../../assets/product-large.jpg')} alt="" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
                <div>
                    <img src={require('../../assets/product-small.jpg')} alt="" />
                </div>
                <div>
                    <img src={require('../../assets/product-small.jpg')} alt="" />
                </div>
                <div>
                    <img src={require('../../assets/product-small.jpg')} alt="" />
                </div>
                <div>
                    <img src={require('../../assets/product-small.jpg')} alt="" />
                </div>
                <div>
                    <img src={require('../../assets/product-small.jpg')} alt="" />
                </div>
                <div>
                    <img src={require('../../assets/product-small.jpg')} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductShowcase