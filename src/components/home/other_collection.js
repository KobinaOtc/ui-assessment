import KidsImage from "../../assets/images/kids.svg"
import Large_SizeImage from "../../assets/images/large_size.svg"
import GoalkeeperImage from "../../assets/images/goal_keeper.svg"
import Pro_PlayerImage from "../../assets/images/pro_player.svg"
import ShortsImage from "../../assets/images/sport.svg"
import SocksImage from "../../assets/images/socks.svg"
import { ReactComponent as RightArrow } from "../../assets/icons/arrow_right.svg"

import '../../assets/styles/components/home/other_collection.scss'

const OtherCollection = () => {
  return (
    <div className="other_collection">
      <p className="title">Other Collections</p>
      <div className="content">
        <div className="card">
          <img src={KidsImage} alt="kids" />
          <div className="details">
            <p>Kids</p>
            <button className="arrow_button"><RightArrow /></button>
          </div>
        </div>
        <div className="card">
          <img src={Large_SizeImage} alt="kids" />
          <div className="details">
            <p>Large sizes</p>
            <button className="arrow_button"><RightArrow /></button>
          </div>
        </div>
        <div className="card">
          <img src={GoalkeeperImage} alt="kids" />
          <div className="details">
            <p>Goalkeeper</p>
            <button className="arrow_button"><RightArrow /></button>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="card">
          <img src={Pro_PlayerImage} alt="kids" />
          <div className="details">
            <p>Authentic / Pro Player</p>
            <button className="arrow_button"><RightArrow /></button>
          </div>
        </div>
        <div className="card">
          <img src={ShortsImage} alt="kids" />
          <div className="details">
            <p>Shorts</p>
            <button className="arrow_button"><RightArrow /></button>
          </div>
        </div>
        <div className="card">
          <img src={SocksImage} alt="kids" />
          <div className="details">
            <p>Socks</p>
            <button className="arrow_button"><RightArrow /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherCollection