import { Product } from './Product'

import './ProductListing.css'

export const ProductList = ({ data }) => {
  return (
    <div className="product-list">
      {data.map((item, index) => (
        <Product key={index} {...item} />
      ))}
    </div>
  )
}
