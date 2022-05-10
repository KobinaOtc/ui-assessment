import { Link } from 'react-router-dom'
import '../../assets/styles/components/home/carousel.scss'
import { ReactComponent as ShopIcon } from "../../assets/icons/shop.svg"

const Carousel = () => {
  return (
    <>
      <div className="home-carousel">
        <div>
          <p className="title">Your favorite customized
            <span className="yellow">Club Jerseys.</span>
          </p>
        </div>
        <div className="bottom">
          <div className="lines">
            <Link to="#" className="line active"></Link>
            <Link to="#" className="line"></Link>
            <Link to="#" className="line"></Link>
            <Link to="#" className="line"></Link>
            <Link to="#" className="line"></Link>
          </div>
          <Link to="#" className="shop_now">
            <span>Shop now</span>
            <div className="icon"><ShopIcon /></div>
          </Link>
        </div>
      </div>
    </>
    
  )
}

export default Carousel