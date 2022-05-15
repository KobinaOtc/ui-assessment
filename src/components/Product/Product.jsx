import { Link } from 'react-router-dom'

import PostImg from '_Images/post.png'

import './Product.css'

export const Product = ({ name, price, discount, link }) => {
  return (
    <div className="product">
      <Link to={link || '/'} >
        <div className="prod-image">
          <img src={PostImg} alt="Post" />
        </div>
        <div className="prod-description">
          <div className='prod-name'>{name}</div>
          <div className='prod-price'>
            <span>{ discount || price}</span>
            {
              discount && <span>{discount}</span>
            }
          </div>
        </div>
      </Link>
    </div>
  )
}
