import React from 'react'
import HeroSection from '../sections/HeroSection/HeroSection'
import ProductSection from '../sections/ProductSection/ProductSection'
import ImageGridSection from '../sections/ImgGridSection/ImageGridSection'
import CollectionSection from '../sections/CollectionSection/CollectionSection'
import ImageHieghlightSection from '../sections/ImageHieghlightSection/ImageHieghlightSection'

const HomePage = () => {
  return (
    <>
        <HeroSection />
        <img className='rewardsImg' src={require("../../assets/rewards.png")} alt="" />
        <ProductSection />
        <ImageGridSection />
        <CollectionSection />
        <ImageHieghlightSection />
    </>
  )
}

export default HomePage