import React from 'react'
import CollectionCard from '../../../components/CollectionCard/CollectionCard'
import './CollectionSection.css'

const CollectionSection = () => {
  return (
    <div className='sectionStyles container mx-auto'>
        <div>
          <h1>Popular</h1>
        </div>
        <div className='grid grid-cols-3'>
          <div>
            <CollectionCard imageUrl={require('../../../assets/other-collections/kids.jpg')} labelDesc='Kids' />
          </div>
          <div>
            <CollectionCard imageUrl={require('../../../assets/other-collections/kids.jpg')} labelDesc='Kids' />
          </div>
          <div>
            <CollectionCard imageUrl={require('../../../assets/other-collections/kids.jpg')} labelDesc='Kids' />
          </div>
          <div className='bottomRow'>
            <CollectionCard imageUrl={require('../../../assets/other-collections/kids.jpg')} labelDesc='Kids' />
          </div>
          <div className='bottomRow'>
            <CollectionCard imageUrl={require('../../../assets/other-collections/kids.jpg')} labelDesc='Kids' />
          </div>
          <div className='bottomRow'>
            <CollectionCard imageUrl={require('../../../assets/other-collections/kids.jpg')} labelDesc='Kids' />
          </div>
        </div>
    </div>
  )
}

export default CollectionSection