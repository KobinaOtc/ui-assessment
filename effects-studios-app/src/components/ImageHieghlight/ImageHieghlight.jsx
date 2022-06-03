import React from 'react'
import './ImageHieghlight.css'

const ImageHieghlight = ({imageUrl, title, desc, social, highlight}) => {

    const imageInfo = imageUrl === 'image-one' ? 'image-one' : 'image-two';

    const check = () => {

        if (social) {
            return (
                <div className='social-icons'>
                    <div>
                        <img src={require('../../assets/icons/png/facebook-f-black.png')} alt="" />
                    </div>
                    <div>
                        <img src={require('../../assets/icons/png/twitter-black.png')} alt="" />
                    </div>
                    <div>
                        <img src={require('../../assets/icons/png/instagram-black.png')} alt="" />
                    </div>
                </div>
            )
        }
    }


  return (
    <div className='constraints'>
        <div className={`imageHighlightStyles ${imageInfo}`}>
            <div className='highlightTexts'>
                <h3>
                    {title}
                </h3>
                <p>
                    {desc}
                </p>

                {check()}
                {highlight}

            </div> 
        </div>
    </div>
  )
}

export default ImageHieghlight