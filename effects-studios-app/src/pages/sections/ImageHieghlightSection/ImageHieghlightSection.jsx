import React from 'react'
import ImageHieghlight from '../../../components/ImageHieghlight/ImageHieghlight'

const ImageHieghlightSection = () => {
  return (
    <div className='sectionStyles container mx-auto'>
        <div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <ImageHieghlight imageUrl={require('../../../assets/personalization.jpg')} title='Personalization' 
                    desc={`Put a custom print on the football shirt of your choice with our Personalization service.`} 
                    highlight='Tell us what name, what number and we put it. FREE!!!' />
            </div>
            <div style={{ paddingLeft: '40px' }}>
                <ImageHieghlight imageUrl={require('../../../assets/social-networks.jpg')} title='Social networks'
                    desc='Share your shirts with us with the #CamisetasFutbolSpainnn' social={true} />
            </div>
        </div>
    </div>
  )
}

export default ImageHieghlightSection