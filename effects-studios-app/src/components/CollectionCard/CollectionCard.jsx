import React from 'react'
import './CollectionCard.css'

const CollectionCard = ({imageUrl, labelDesc}) => {
  return (
    <>
        <div className='collectionItem'>
            <img className='collectionImage' src={imageUrl} alt='' />
            <div className='blurBtmBar'>
                <div className='actionBtn'></div>
                <div className='collectionText'>
                    <p>{labelDesc}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default CollectionCard