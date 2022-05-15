import './LeaguePost.css'

export const LeaguePost = ({ name, image }) => {
  return (
    <div className="league">
      <img src={image} alt="league" />
      <div className="league-name"> {name} </div>
    </div>
  )
}
