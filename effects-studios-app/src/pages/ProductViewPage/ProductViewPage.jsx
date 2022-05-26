import React from 'react'
import ProductShowcase from '../../components/ProductShowcase/ProductShowcase'
import './ProductViewPage.css'

const ProductViewPage = () => {
  return (
    <>
        <div className='sectionStyles container mx-auto flex'>
            <div>
                <ProductShowcase />
            </div>
            <div className='formSize'>
                <h1>
                    Hello
                </h1>
                <p>price<span>discount</span><span> discount%</span> </p>
                <button>Add to Favorites</button>

                <div>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint fugit perferendis 
                        qui dolor rem omnis provident corporis voluptatem, ad eum commodi veniam est eius 
                        repellendus aliquam voluptatibus dolores ut? Nostrum?
                    </p>
                </div>

                <div>
                    <form action="">
                        <div style={{ display: 'flex' }}>
                            <label className='form-label mb-2' htmlFor="">Name</label>
                            <input type="text" className="
                                form-control 
                                block 
                                w-full 
                                px-3 
                                py-1.5 
                                text-base 
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                        </div>

                        <div style={{ display: 'flex' }}>
                            <label className='form-label mb-2' htmlFor="">Name</label>
                            <input type="text" className="
                                form-control 
                                block 
                                w-full 
                                px-3 
                                py-1.5 
                                text-base 
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                        </div>

                        <div style={{ display: 'flex' }}>
                            <label className='form-label mb-2' htmlFor="">Name</label>
                            <input type="text" className="
                                form-control 
                                block 
                                w-full 
                                px-3 
                                py-1.5 
                                text-base 
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                        </div>

                        <div style={{ display: 'flex' }}>
                            <label className='form-label mb-2' htmlFor="">Name</label>
                            <input type="text" className="
                                form-control 
                                block 
                                w-full 
                                px-3 
                                py-1.5 
                                text-base 
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                        </div>
                        
                        <div style={{ display: 'flex' }}>
                            <label className='form-label mb-2' htmlFor="">Name</label>
                            <input type="text" className="
                                form-control 
                                block 
                                w-full 
                                px-3 
                                py-1.5 
                                text-base 
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductViewPage