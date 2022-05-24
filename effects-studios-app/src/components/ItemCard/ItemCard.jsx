import React from 'react'
import './itemCard.css'

 const ItemCard = ({title, desc, imageUrl}) => {
  return (
    <>
        <div className='cardStyles'>
          <img src={imageUrl} alt="" />
          <div className='cardText'>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        </div>
    </>
  )
}

export default ItemCard