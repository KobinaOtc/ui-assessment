import { Link } from "react-router-dom"
import { ReactComponent as DownArrow } from "../../assets/icons/dropdown_black.svg"
import { ReactComponent as WhatsappIcon } from "../../assets/icons/whatsapp.svg"
import { ReactComponent as GlobalIcon } from "../../assets/icons/global_eng.svg"
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg"
import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg"
import { ReactComponent as Avatar } from "../../assets/icons/avatar.svg"

import '../../assets/styles/layout/header.scss'
const Header = () => {
  return (
    <div className="header">
      <div className="yellow-box-one"></div>
      <div className="yellow-box-two"></div>
      <div className="layer-one">
        <div className="languages-container">
          <GlobalIcon />
          <select className="languages">
            <option value="en">EN</option>
          </select>
        </div>
        <p className="advert">sales begin • free shipping on all orders</p>
        <Link to="/" className="whatsapp-container">
          <WhatsappIcon />
          <span>chat <span className="m-hide">with us</span></span>
        </Link>
      </div>
      <div className="layer-two">
        <div className="categories-search">
          <div className="categories">
            <span>All Categories</span>
            <DownArrow />
          </div>
          <div className="search">
            <input type="text" placeholder="What are you looking for ?" />
            <button>
              <span className="text">Search</span>
              <span className="icon"><SearchIcon /></span>
            </button>
          </div>
          <div className="icons">
            <Link to="#" className="cart"><CartIcon /></Link>
            <div className="line"></div>
            <Link to="#" className="profile-dropdown">
              <Avatar />
              <DownArrow />
            </Link>
          </div>
        </div>
      </div>
      <div className="layer-three">
        <Link to="/" className="item active">Home</Link>
        <Link to="#" className="item">
          <span>T-Shirts</span>
          <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.36728 3.60241C3.16932 3.81671 2.83068 3.81671 2.63272 3.60241L0.311188 1.08928C0.0153625 0.769035 0.242499 0.25 0.678465 0.25L5.32154 0.25C5.7575 0.25 5.98464 0.769036 5.68881 1.08928L3.36728 3.60241Z" fill="#8D8D8D"/>
          </svg>
        </Link>
        <Link to="#" className="item">
          <span>NBA</span>
          <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.36728 3.60241C3.16932 3.81671 2.83068 3.81671 2.63272 3.60241L0.311188 1.08928C0.0153625 0.769035 0.242499 0.25 0.678465 0.25L5.32154 0.25C5.7575 0.25 5.98464 0.769036 5.68881 1.08928L3.36728 3.60241Z" fill="#8D8D8D"/>
          </svg>
        </Link>
        <Link to="#" className="item">
          <span>Tracksuits</span>
          <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.36728 3.60241C3.16932 3.81671 2.83068 3.81671 2.63272 3.60241L0.311188 1.08928C0.0153625 0.769035 0.242499 0.25 0.678465 0.25L5.32154 0.25C5.7575 0.25 5.98464 0.769036 5.68881 1.08928L3.36728 3.60241Z" fill="#8D8D8D"/>
          </svg>
        </Link>
        <Link to="#" className="item">Product Delivery • 1 - 2 days</Link>
        <Link to="#" className="item">Contact</Link>
        <Link to="#" className="item">Reviews</Link>
      </div>
      <div className="mobile">
        <div className="left">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1" x2="16" y2="1" stroke="black" strokeWidth="2"/>
            <line y1="6" x2="16" y2="6" stroke="black" strokeWidth="2"/>
            <line y1="11" x2="16" y2="11" stroke="black" strokeWidth="2"/>
          </svg>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.2907 10.3433C12.2088 9.24903 12.7616 7.83803 12.7616 6.2979C12.7616 2.81967 9.94191 5.9873e-07 6.46368 0C2.98544 1.52039e-07 0.165771 2.81967 0.165771 6.2979C0.165771 9.77614 2.98544 12.5958 6.46368 12.5958C7.83398 12.5958 9.10207 12.1582 10.1358 11.415L12.7208 14L13.8341 12.8867L11.2907 10.3433ZM11.1871 6.2979C11.1871 8.90658 9.07235 11.0213 6.46368 11.0213C3.855 11.0213 1.74025 8.90658 1.74025 6.2979C1.74025 3.68923 3.855 1.57448 6.46368 1.57448C9.07235 1.57448 11.1871 3.68923 11.1871 6.2979Z" fill="black"/>
          </svg>
        </div>
        <div className="right">
          <Link to="#" className="cart"><CartIcon /></Link>
          <Link to="#" className="profile-dropdown">
            <Avatar />
            <DownArrow />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header