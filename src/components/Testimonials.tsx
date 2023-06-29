import React from 'react'
import Card from './Card'

const Testimonials: React.FC= () => {
  return (
    <div className="w-[1439px] h-[512px] relative overflow-hidden ">
      <div className=" left-[630px] top-[467px] absolute justify-start items-start gap-6 inline-flex mt-5">
        <div className="w-2.5 h-2.5  justify-center items-center bg-purple-800 rounded-full  gap-2.5 flex" />
        <div className="w-2.5 h-2.5 justify-center items-center bg-gray-200 rounded-full gap-2.5 flex" />
        <div className="w-2.5 h-2.5 justify-center items-center  bg-gray-200 rounded-full gap-2.5 flex" />
        <div className="w-2.5 h-2.5 justify-center items-center  bg-gray-200 rounded-full gap-2.5 flex" />
        <div className="w-2.5 h-2.5 justify-center items-center  bg-gray-200 rounded-full gap-2.5 flex" />
      </div>
      <div className="h-[378px] left-[175px] top-[57px] absolute flex-col justify-center items-start gap-8 inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-black text-[40px] font-bold ">Review from customers</div>
          <div className="w-[399px] text-black text-[12px] font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</div>
        </div>
        <div className="w-[1459px] h-[238px] relative flex-row justify-start items-start flex gap-5">
            <Card/>
        </div>  

      </div>
    </div>
  )
}

export default Testimonials