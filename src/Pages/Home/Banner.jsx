import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import BannerImg from "/images/banner.png"

const Banner = () => {
  return (
    <div className='bg-primaryBg py-10 xl:px-28 px-4'>
      <div className='py-6 flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
         {/* images div */}
         <div className="md:w-1/2">
            <img src={BannerImg} alt="" className="mx-auto h-full md:h-[490px] md:w-[410px] w-full" />
         </div>

         <div className="md:w-1/2">
            <h1 className='text-5xl font-light mb-5'>Collections</h1>
            <p className='text-xl mb-7'>You can explore ans shop many differnt collection from various barands here.</p>
            <button className="bg-Black hover:bg-orange-500 px-6 py-2 text-white font-semibold flex gap-2 items-center rounded-sm">
               <FaShoppingBag className='inline-flex'/> Shop Now
            </button>
         </div>
        </div>
    </div>
  )
}

export default Banner