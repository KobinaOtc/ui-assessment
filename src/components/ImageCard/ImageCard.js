import './ImageCard.css'

export const ImageCard = ({
  image,
  header,
  description,
  overlay,
  extras,
}) => {
  return (
    <div
      className="image-card"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
      }}
    >
      {overlay && <div className="overlay-image"></div>}
      <div className="text-content">
        <div className="card-header">{header}</div>
        <div className="card-description">{description}</div>
        <div className="card-extras">{extras}</div>
      </div>
    </div>
  )
}
