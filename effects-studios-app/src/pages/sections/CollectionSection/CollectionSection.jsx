import React from 'react'
import CollectionCard from '../../../components/CollectionCard/CollectionCard'
import './CollectionSection.css'
import productImages from '../ProductSection/images'

const collectionData = [
  {
    id: 1,
    imageUrl: productImages.collections.kids,
    labelDesc: 'Kids',
  },
  {
    id: 2,
    imageUrl: productImages.collections.largeSizes,
    labelDesc: 'Large sizes',
  },
  {
    id: 3,
    imageUrl: productImages.collections.goalkeeper,
    labelDesc: 'Goalkeeper',
  },
  {
    id: 4,
    imageUrl: productImages.collections.authentic,
    labelDesc: 'Authentic / Pro Player',
  },
  {
    id: 5,
    imageUrl: productImages.collections.shorts,
    labelDesc: 'Shorts',
  },
  {
    id: 6,
    imageUrl: productImages.collections.socks,
    labelDesc: 'Socks',
  },
]

const CollectionSection = () => {

  return (
    <div className='sectionStyles container mx-auto'>
        <div>
          <h2 style={{ paddingBottom: '80px' }}>Other Collections</h2>
        </div>
        <div className='sectionItemStyles'>

          {
            collectionData.map((item) => {
              if (item.id > 3) {
                return (
                  <div className='bottomRow'>
                    <CollectionCard imageUrl={item.imageUrl} labelDesc={item.labelDesc} />
                  </div>
                )
              } else {
                return (
                  <div>
                    <CollectionCard imageUrl={item.imageUrl} labelDesc={item.labelDesc} />
                  </div>        
                )
              }
            })
          }
        </div>
    </div>
  )
}

export default CollectionSection