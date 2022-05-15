import './InfoCard.css'

export const InfoCard = ({ header, description, icon }) => {
  return (
    <div className="info-card">
      <div className="cuboid">
        <div className="square cube">{icon}</div>
        <div className="cube left"></div>
        <div className="cube top"></div>
      </div>
      <div className="header">{header}</div>
      <div className="desc">{description}</div>
    </div>
  )
}
