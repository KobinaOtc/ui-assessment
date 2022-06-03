import React from 'react'
import ImageHieghlight from '../../../components/ImageHieghlight/ImageHieghlight'
import './ImageHieghlightSection.css'

const ImageHieghlightSection = () => {
  return (
    <div className='sectionStyles container mx-auto'>
        <div className='orintation'>
            <div>
                <ImageHieghlight imageUrl='image-one' title='Personalization' 
                    desc={`Put a custom print on the football shirt of your choice with our Personalization service.`} 
                    highlight='Tell us what name, what number and we put it. FREE!!!' />
            </div>
            <div>
                <ImageHieghlight imageUrl='image-two' title='Social networks'
                    desc='Share your shirts with us with the #CamisetasFutbolSpainnn' social={true} />
            </div>
        </div>
    </div>
  )
}

export default ImageHieghlightSection