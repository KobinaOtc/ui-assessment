import CLImage from "../../assets/images/champions_l.svg"
import ELImage from "../../assets/images/europa_l.svg"
import CAImage from "../../assets/images/copa_america.svg"
import AACImage from "../../assets/images/sfc.svg"
import CAFImage from "../../assets/images/caf.svg"

import '../../assets/styles/components/home/country_leagues.scss'

const CountyLeagues = () => {
  return (
    <div className="country_leagues">
      <p className="title">Country Leagues</p>
      <div className="content">
        <div className="card">
          <img src={CLImage} alt="football_image" className="image" />
          <p className="title">Champions League</p>
        </div>

        <div className="card">
          <img src={ELImage} alt="football_image" className="image" />
          <p className="title">Europe League</p>
        </div>

        <div className="card">
          <img src={CAImage} alt="football_image" className="image" />
          <p className="title">Copa America</p>
        </div>

        <div className="card">
          <img src={AACImage} alt="football_image" className="image" />
          <p className="title">Asian Cup</p>
        </div>

        <div className="card">
          <img src={CAFImage} alt="football_image" className="image" />
          <p className="title">African Nations Cup</p>
        </div>
      </div>
    </div>
  )
}

export default CountyLeagues