import { ReactComponent as FbIcon } from '_Images/fb.svg'
import { ReactComponent as TwIcon } from '_Images/tw.svg'
import { ReactComponent as IGIcon } from '_Images/ig.svg'
import { ReactComponent as ArrowIcon } from '_Images/arrow.svg'
import PayImage from '_Images/pay.png'

import './Footer.css'

export const Footer = () => {
  return <div className="footer">
    <div className="footer-menu">
      <div className="section">
        <div className="foot-header">
          Main Menu
        </div>
        <div className="nav-links">
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>T-shirts</a></li>
            <li><a href='/'>NBA</a></li>
            <li><a href='/'>Tracksuits</a></li>
            <li><a href='/'>Products Delivery  •  1 – 2 days</a></li>
            <li><a href='/'>Home</a></li>
          </ul>
        </div>
      </div>
      <div className="section">
        <div className="foot-header">
        Secondary Menu
        </div>
        <div className="nav-links">
          <ul>
            <li><a href='/'>Search</a></li>
            <li><a href='/'>Privacy Policy</a></li>
            <li><a href='/'>Shipping Policy</a></li>
            <li><a href='/'>Returns Policy</a></li>
            <li><a href='/'>Terms of service</a></li>
          </ul>
        </div>
      </div>
      <div className="section">
        <div className="foot-header">
        Subscribe
        </div>
        <div className='subscribe'>Subscribe to our mailing list to receive the latest news.</div>
        <div className="search-footer">
          <input />
          <button><ArrowIcon/></button>
        </div>
      </div>
      <div className="section">
        <div className="foot-header">
          Follow us
        </div>
        <div className="social-catalog">
          <FbIcon />
          <TwIcon />
          <IGIcon />
        </div>
      </div>
    </div>
    <div className="mobile-img">
      <img src={PayImage} alt="Payment" />
    </div>
    <div className="credit">
      <div className="credit-text">© 2021 Jambulani  •  All rights reserved</div>
      <img src={PayImage} alt="Payment" />
    </div>
  </div>
}
