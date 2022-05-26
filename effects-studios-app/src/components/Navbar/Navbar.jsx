import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className='gridStyles'>
        <div className='navLanguage textAlignment'>
          <img style={{ width: '12px', height: '12px' }} src={require('../../assets/icons/png/globe.png')} alt="" />
          <span style={{ paddingLeft: '6px', paddingRight: '4px' }}>EN</span>
          <img src={require('../../assets/icons/png/Polygon 1.png')} alt="" />
        </div>
        <div className='topNavInfo textAlignment'>
          <p>SALES BEGIN  •  FREE SHIPPING ON ALL ORDERS</p>
        </div>
        <div className='navChatInfo textAlignment'>
          <img style={{ width: '12px', height: '12px' }} src={require('../../assets/icons/png/whatsapp.png')} alt="" /> 
          <span style={{ paddingLeft: '6px', paddingRight: '4px' }}>Chat with us</span>
        </div>
      </div>

      <div className='navItemsContainer'>
        <div className='yellowBox'></div>

        <div style={{ width: '100%'}}>
          <div className='navSearchContent'>
            <div className='inputIcon'>
              <label className='txtStylesOne' htmlFor="">All Categories</label>
              <img style={{ width: '8px', height: '5px', paddingLeft: '3px', marginRight: '48px' }} src={require('../../assets/icons/png/down.png')} alt="" />
              <input className='' type="text" placeholder='What are you looking for?' />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', minWidth: '450px' }}>
              <div  className='searchBtn txtStylesOne'>
                Search
                <div className='searchBtnIcon'>
                  <img src={require('../../assets/icons/png/search.png')} alt="" />
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', minWidth: '208px', justifyContent: 'space-around' }}>
                <img src={require('../../assets/icons/png/shopping-cart.png')} alt='' />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={require('../../assets/icons/png/user.png')} alt='' />
                  <img style={{ width: '8px', height: '5px', paddingLeft: '3px' }} src={require('../../assets/icons/png/down.png')} alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className='navElements grid grid-cols-7 txtStylesOne place-content-around'>
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
    </div>
  )
}

export default Navbar