import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <div className='gridStyles'>
        <div className='navLanguage'>
          <p>
            EN
          </p>
        </div>
        <div className='topNavInfo'>
          <p>SALES BEGIN  •  FREE SHIPPING ON ALL ORDERS</p>
        </div>
        <div className='navChatInfo'>
          Chat with us
        </div>
      </div>

      <div className='navItemsContainer'>
        <div className='yellowBox'></div>

        <div>
          <label htmlFor="">All Categories</label>
          <input className='' type="text" placeholder='What are you looking for?' />
          <label htmlFor="">Search</label>
          <input className='' type="text"></input>
          <button>shopping chart</button>
          <button>profile dropdown</button>
          <div className='navSearchContent'></div>
          <div className='navElements grid grid-cols-7'>
            <div>Home</div>
            <div>T-Shirts</div>
            <div>NBA</div>
            <div>Tracksuits</div>
            <div>Products Delivery  •  1 – 2 days</div>
            <div>Contact</div>
            <div>Reviews</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar