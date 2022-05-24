import React from 'react'
import './ImageHieghlight.css'

const ImageHieghlight = ({imageUrl, title, desc}) => {
  return (
    <div className='constraints'>
        <img className='imgIndex' src={imageUrl} alt="" />
        <div className='imageHighlightStyles'>
            <div className='highlightTexts'>
                <h3>
                    {title}
                </h3>
                <p>
                    {desc}
                </p>
            </div> 
        </div>
    </div>
  )
}

export default ImageHieghlight