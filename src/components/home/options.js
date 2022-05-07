import { Link } from 'react-router-dom'

import { ReactComponent as RewardIconOne } from "../../assets/images/rewards/1.svg"
import { ReactComponent as RewardIconTwo } from "../../assets/images/rewards/2.svg"

import '../../assets/styles/components/home/options.scss'

const Options = () => {
  return (
    <>
      <div className="options">
        <div className="card1">
          <div className="details">
            <p className="main">Secure Shipping</p>
            <p className="support">on all orders</p>
          </div>
        </div>

        <div className="card2">
          <div className="details">
            <p className="main">Telephone</p>
            <p className="support">+34 660 63 64 27</p>
          </div>
        </div>

        <div className="card3">
          <div className="details">
            <p className="main">Chat WhatsApp</p>
            <p className="support">Mon – Fri: 9:00 – 21:00  •  Sat – Sun: 9:00 – 17:00</p>
          </div>
        </div>

        <div className="card4">
          <div className="details">
            <p className="main">Quality Guarantee</p>
            <p className="support">Verified Purchase Reviews</p>
          </div>
        </div>

      </div>

      <Link to="#" className="get-rewards-sticker">
        <RewardIconOne />
        <RewardIconTwo />
      </Link>
    </>
  )
}

export default Options