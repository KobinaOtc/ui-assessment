import HeroImage from '_Images/hero.png'

import './Slider.css'

export const Slider = ({ heroText }) => {
  return (
    <div className='slider-container'>
      <div className="hero-text">{heroText}</div>
      <img src={HeroImage} alt='hero-img' />
    </div>)
}
