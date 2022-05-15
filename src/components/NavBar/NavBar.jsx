import { ReactComponent as CartIcon } from '_Images/cart.svg'
import { ReactComponent as MeIcon } from '_Images/me.svg'
import { ReactComponent as CaretIcon } from '_Images/caret_black.svg'
import { ReactComponent as SearchWhiteIcon } from '_Images/search.svg'
import { ReactComponent as SearchIcon } from '_Images/search_black.svg'

import './NavBar.css'

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className='yellow-block'></div>
      <div className='menu'>
        <div className="category-search">
          <select className='select-category' name="ccategories" id="">
            <option value="sd">All Categories</option>
          </select>
          <form className='category-form'>
            <input className="category-input" placeholder='What are you looking for?' type="search" />
            <div className="search-btn-group">
              <button>Search</button>
              <div><SearchWhiteIcon /></div>
            </div>
          </form>
          <div className="mobile-view">
            <div className="hamburger">☰</div>
            <div className="search"><SearchIcon /></div>
          </div>
          <div className='icons'>
            <div><CartIcon fill='#111112' /></div>
            <div className='me'><MeIcon /> <CaretIcon fill="#111112"/></div>
          </div>
        </div>
        <div className="nav-list">
          <ul>
            <li><span className='active' href='/'>Home</span></li>
            <li><span href='/'>T-Shirts </span>  &nbsp; <CaretIcon/></li>
            <li><span href='/'>NBA </span>  &nbsp; <CaretIcon /></li>
            <li><span href='/'>Products Delivery  •  1 – 2 days </span>  &nbsp; <CaretIcon /></li>
            <li><span href='/'>Contact </span>  &nbsp; <CaretIcon /></li>
            <li><span href='/'>Reviews </span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
