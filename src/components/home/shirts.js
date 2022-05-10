import { ReactComponent as LeftArrow } from "../../assets/icons/arrow_left.svg"
import { ReactComponent as RightArrow } from "../../assets/icons/arrow_right.svg"
import RedShirt from "../../assets/images/red_shirt.svg"

import '../../assets/styles/components/home/shirts.scss'

const Shirts = () => {
  return (
    <div className="home-shirts">
      <div className="heading">
        <p className="title">MOST POPULAR T-SHIRTS</p>
        <div className="controls">
          <button className="arrow_button"><LeftArrow /></button>
          <button className="arrow_button"><RightArrow /></button>
        </div>
      </div>
      
      <div className="content">
        <ul className="hs full no-scrollbar">
          <li className="item">
            <div className="card">
              <div className="image-container">
                <img src={RedShirt} alt="shirt" className="image" />
                <p className="save-text">Save 67%</p>
              </div>
              <div className="details">
                <p className="name">Manchester United 21-22</p>
                <p className="price">€30.00 <span>€89.95</span></p>
              </div>
            </div>
          </li>
          <li className="item">
            <div className="card">
              <div className="image-container">
                <img src={RedShirt} alt="shirt" className="image" />
                <p className="save-text">Save 67%</p>
              </div>
              <div className="details">
                <p className="name">Manchester United 21-22</p>
                <p className="price">€30.00 <span>€89.95</span></p>
              </div>
            </div>
          </li>
          <li className="item">
            <div className="card">
              <div className="image-container">
                <img src={RedShirt} alt="shirt" className="image" />
                <p className="save-text">Save 67%</p>
              </div>
              <div className="details">
                <p className="name">Manchester United 21-22</p>
                <p className="price">€30.00 <span>€89.95</span></p>
              </div>
            </div>
          </li>
          <li className="item">
            <div className="card">
              <div className="image-container">
                <img src={RedShirt} alt="shirt" className="image" />
                <p className="save-text">Save 67%</p>
              </div>
              <div className="details">
                <p className="name">Manchester United 21-22</p>
                <p className="price">€30.00 <span>€89.95</span></p>
              </div>
            </div>
          </li>
          <li className="item">
            <div className="card">
              <div className="image-container">
                <img src={RedShirt} alt="shirt" className="image" />
                <p className="save-text">Save 67%</p>
              </div>
              <div className="details">
                <p className="name">Manchester United 21-22</p>
                <p className="price">€30.00 <span>€89.95</span></p>
              </div>
            </div>
          </li>
          <li className="item">
            <div className="card">
              <div className="image-container">
                <img src={RedShirt} alt="shirt" className="image" />
                <p className="save-text">Save 67%</p>
              </div>
              <div className="details">
                <p className="name">Manchester United 21-22</p>
                <p className="price">€30.00 <span>€89.95</span></p>
              </div>
            </div>
          </li>
          <li className="item">
            <div className="card">
              <div className="image-container">
                <img src={RedShirt} alt="shirt" className="image" />
                <p className="save-text">Save 67%</p>
              </div>
              <div className="details">
                <p className="name">Manchester United 21-22</p>
                <p className="price">€30.00 <span>€89.95</span></p>
              </div>
            </div>
          </li>
          <li className="item">
            <div className="card">
              <div className="image-container">
                <img src={RedShirt} alt="shirt" className="image" />
                <p className="save-text">Save 67%</p>
              </div>
              <div className="details">
                <p className="name">Manchester United 21-22</p>
                <p className="price">€30.00 <span>€89.95</span></p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Shirts