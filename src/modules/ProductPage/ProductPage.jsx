import { useState, useEffect } from 'react'
import ClassName from 'classname'
import { NotificationBar } from '_Home/components/NotificationBar'
import { NavBar } from '_Home/components/NavBar'
import { Footer } from '_Home/components/Footer'

import { ReactComponent as CartIcon } from '_Images/cart.svg'
import { ReactComponent as CaretIcon } from '_Images/caret_black.svg'
import { ReactComponent as CaretLeftIcon } from '_Images/caret-left.svg'
import { ReactComponent as CarerRightIcon } from '_Images/caret-right.svg'
import { ReactComponent as RewardIcon } from '_Images/rewards.svg'
import PostImg from '_Images/post.png'
import PostLargeImg from '_Images/postLarge.png'


import './ProductPage.css'

export const ProductPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="productpage-cont">
      <NotificationBar />
      <NavBar />
      <div className="product-content">
        <div className="breadcrumbs"></div>
        <div className="product-item">
          <div className="product-display">
            <div className="large-img">
              <img src={PostLargeImg} alt='Product' />
              <div className="controls">
                <div>
                  <CaretLeftIcon fill="#ffffff" />
                </div>
                <div>
                  <CarerRightIcon fill="#ffffff" />
                </div>
              </div>
            </div>
            <div className="small-imgs">
              {Array(6).fill(0)
                .map((_, index) => <div key={index}>
                  <div className='product-caret'> {selectedImageIndex === index && <CaretIcon />} </div>
                  <img
                    className={ClassName({ 'active': selectedImageIndex === index })}
                    onClick={() => setSelectedImageIndex(index)}
                    src={PostImg} alt='Product rest' />
                </div>
                )}
            </div>
          </div>
          <div className="product-description">
            <div className="product-name">Manchester United 21-22 Home Shirt</div>
            <div className='product-pricing'>
              <div className="product-price">€30.00</div>
              <div className="product-discount">€89.95</div>
              <div className="product-promo">Save 67%</div>
              <div className="favorites">Add to Favorites</div>
            </div>
            <div className="product-description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod lacinia aliquam. Morbi est nis, at lacus. Donec ornare, dui vel facilisis luctus,
              metus mi ttitor erat sapien scelerisque nunc. Pellentesque ornare elit tellus... <span>Read More</span>
            </div>
            <form className='product-form'>
              <div className="input-group">
                <label htmlFor="name">Size <span>*</span></label>
                <div className="size-group">
                  <select name="name" defaultValue="DEFAULT">
                    <option selected value="DEFAULT">Select a shirt size</option>
                  </select>
                  <div className="size-chart">
                    View Size Chart
                  </div>

                </div>
              </div>
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input name="name" placeholder='What name would you want in the shirt?'/>
              </div>
              <div className="input-group">
                <label htmlFor="name">Number on Shirt</label>
                <input name="name" placeholder='Enter a number between 0 and 99?'/>
              </div>
              <div className="input-group">
                <label htmlFor="name">Patch</label>
                <select name="name" defaultValue="DEFAULT">
                  <option value="DEFAULT" disabled>Select a patch</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="name">Quantity</label>
                <input name="name" type="number" defaultValue="1"/>
              </div>
              <div className='btn-group'>
                <button> Add to Cart </button>
                <div className='cart-icon'><CartIcon fill='#ffffff' /></div>
              </div>
            </form>

          </div>
        </div>
        <div className="rewards">
          <RewardIcon />
        </div>
      </div>
      <Footer />
    </div>
  )
}
