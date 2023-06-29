import React from 'react'
import facebook from '../assets/mdi_facebook.svg'
import instagram from '../assets/basil_instagram-solid.svg'
import twitter from '../assets/uil_twitter.svg'
import youtube from '../assets/uil_youtube.svg'
import polygon2 from '../assets/polygon-2.svg'

const Footer:React.FC = () => {
  return (
    <div className="w-[1439px] h-[493px] relative  overflow-hidden"> 
    <img
    className="absolute top-[6.5px] left-[0px] w-[1440px] h-[486.44px]"
    alt=""
    src={polygon2}
  />

    <div className="w-[995px] h-[74px] left-[222px] top-[419px] absolute border border-t-1 border-l-0 border-r-0 justify-center items-center gap-48 inline-flex">
      <div className="text-white text-[12px] font-normal">All Right Reserved @Copyright 2023</div>
      <div className="justify-start items-center gap-16 flex">
        <div className="justify-start items-start gap-6 flex cursor-pointer">
          <div className="text-white text-[12px] font-normal">Terms of Service</div>
          <div className="text-white text-[12px] font-normal">Privacy Policy</div>
          <div className="text-white text-[12px] font-normal">Product</div>
        </div>
        <div className="h-6 justify-start items-center gap-4 flex cursor-pointer">
          <img src={facebook} alt="facebook" className="w-6 h-6 relative" />       
          <img src={youtube} alt="youtube" className="w-6 h-6 relative" />
          <img src={instagram} alt="instagram" className="w-6 h-6 relative" />
          <img src={twitter} alt="twitter" className="w-6 h-6 relative" />
        </div>
      </div>
    </div>
    <div className="left-[422px] top-[68px] absolute flex-col justify-start items-center gap-16 inline-flex">
      <div className="flex-col justify-start items-center gap-6 flex">
        <div className="text-black text-[32px] font-bold">We have what you’re looking for</div>
        <div className="w-[593px] text-center text-[13.5px] font-normal text-blue-600 font-poppins">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a</div>
      </div>
      <div className="pl-9 pr-[35px] py-[15px] bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg justify-center items-center inline-flex cursor-pointer">
        <div className="text-white text-[20px] font-bold">Get Started Now</div>
      </div>
    </div>
  </div>
  )
}

export default Footer