import React from 'react'
import './CollectionCard.css'

const CollectionCard = ({imageUrl, labelDesc}) => {
  return (
    <>
        <div className='collectionItem'>
            <img className='collectionImage' src={imageUrl} alt='' />
            <div className='blurBtmBar'>
                <div className='actionBtn'>
                  <img src={require('../../assets/icons/png/right-black.png')} alt="" />
                </div>
                <div className='collectionText'>
                    <p>{labelDesc}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default CollectionCard