import { Link } from "react-router-dom"
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg"
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg"
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg"

import '../../assets/styles/components/home/pers_social_net.scss'

const PersSocialNet = () => {
  return (
    <div className="pers_social_net">
      <div className="card1">
        <div className="details">
          <p className="title">PERSONALIZATION</p>
          <p className="text">Put a custom print on the football shirt of your choice with our Personalization service. <br /> <br />
          Tell us what name, what number and we put it. <strong>FREE!!!</strong></p>
        </div>
      </div>
      <div className="card2">
        <div className="details">
          <p className="title">Social networks</p>
          <p className="text">Share your shirts with us with the #CamisetasFutbolSpainnn</p>
          <div className="icons">
            <Link to="#" className="icon"><Facebook /></Link>
            <Link to="#" className="icon"><Twitter /></Link> 
            <Link to="#" className="icon"><Instagram /></Link> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersSocialNet