import React from 'react'
import ImageHieghlight from '../../../components/ImageHieghlight/ImageHieghlight'

const ImageHieghlightSection = () => {
  return (
    <div className='sectionStyles container mx-auto'>
        <div>
          <h1>Popular</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <ImageHieghlight imageUrl={require('../../../assets/personalization.jpg')} title='Personalization' 
                    desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquid porro eius molestiae aliquam totam 
                    architecto ea voluptatem quod! Suscipit, atque dolor fugit voluptatum laboriosam magni ipsum perspiciatis a ipsam?' />
            </div>
            <div style={{ paddingLeft: '40px' }}>
                <ImageHieghlight imageUrl={require('../../../assets/social-networks.jpg')} title='Personalization'
                    desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquid porro eius molestiae aliquam totam 
                    architecto ea voluptatem quod! Suscipit, atque dolor fugit voluptatum laboriosam magni ipsum perspiciatis a ipsam?' />
            </div>
        </div>
    </div>
  )
}

export default ImageHieghlightSection