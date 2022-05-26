import React from 'react'
import Carousel from '../../../components/Carousel/Carousel'
import ItemCard from '../../../components/ItemCard/ItemCard'
import './heroSection.css'

const HeroSection = () => {
  return (
    <div className='container mx-auto'>
      <Carousel />
        {/* <img className='heroImg' src={require("../../../assets/hero.jpg")} alt="" /> */}
        <div className='itemCardSection'>
          <div>
            <ItemCard
              title='Secure Shipping'
              desc='on all orders'
              imageUrl={require("../../../assets/HSicon-Truck.png")} />
          </div>
          <div>
            <ItemCard
              title='Secure Shipping'
              desc='on all orders'
              imageUrl={require("../../../assets/HSicon-Truck.png")} />
          </div>
          <div>
            <ItemCard
              title='Secure Shipping'
              desc='on all orders'
              imageUrl={require("../../../assets/HSicon-Truck.png")} />
          </div>
          <div>
            <ItemCard
              title='Secure Shipping'
              desc='on all orders'
              imageUrl={require("../../../assets/HSicon-Truck.png")} />
          </div>
        </div>
    </div>
  )
}

export default HeroSection