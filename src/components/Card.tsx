import React from 'react'
import liola from '../assets/Lolla 1.png'
import star from '../assets/fluent-emoji-flat_star.svg'
import arrow from '../assets/pepicons-pencil_arrow-right.svg'

const  Card: React.FC =()=> {
  return (
    
    
       <>
    
          <div className="px-12 py-9 bg-white rounded-lg shadow-2xl border  border-fuchsia-300 border-opacity-40 flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="justify-start items-center gap-6 inline-flex">
                <img className="w-[70px] h-[70px] rounded-[56.50px]" src={liola} alt="liola" />
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="w-[88px] h-4 text-black text-[16px] font-bold">Lolla Smith</div>
                    <div className="w-[65px] h-4 text-black text-[14px] font-normal">Microsoft</div>
                  </div>
                  <div className="justify-start items-center gap-2 inline-flex">


                    {Array.from({ length: 5 }, (_, index) => (
                      <img key={index} src={star} alt="star" className="w-5 h-5 relative" />
                    ))}

                  </div>
                </div>
              </div>
              <div className="w-[369px] text-black text-[12px] font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </div>
            </div>
          </div>
          <div className="px-12 py-9 bg-white rounded-lg border border-fuchsia-300 border-opacity-40 flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="justify-start items-center gap-6 inline-flex">
                <img className="w-[70px] h-[70px] rounded-[56.50px]" src={liola} alt="liola" />
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="w-[88px] h-4 text-black text-[16px] font-bold">Lolla Smith</div>
                    <div className="w-[65px] h-4 text-black text-[14px] font-normal">Microsoft</div>
                  </div>
                  <div className="justify-start items-center gap-2 inline-flex">


                    {Array.from({ length: 5 }, (_, index) => (
                      <img key={index} src={star} alt="star" className="w-5 h-5 relative" />
                    ))}

                  </div>
                </div>
              </div>
              <div className="w-[369px] text-black text-[12px] font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </div>
            </div>
          </div>
          <div className="px-12 py-9 bg-white rounded-lg border  border-fuchsia-300 border-opacity-40 flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="justify-start items-center gap-6 inline-flex">
                <img className="w-[70px] h-[70px] rounded-[56.50px]" src={liola} alt="liola" />
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="w-[88px] h-4 text-black text-[16px] font-bold">Lolla Smith</div>
                    <div className="w-[65px] h-4 text-black text-[14px] font-normal">Microsoft</div>
                  </div>
                  <div className="justify-start items-center gap-2 inline-flex">


                    {Array.from({ length: 5 }, (_, index) => (
                      <img key={index} src={star} alt="star" className="w-5 h-5 relative" />
                    ))}

                  </div>
                </div>
              </div>
              <div className="w-[369px] text-black text-[12px] font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </div>

            </div>

          </div>
          <div className="absolute p-[5px] left-[66.6%] top-[43%] bg-fuchsia-300 bg-opacity-40 rounded-[100px] shadow justify-center items-center gap-2.5 inline-flex z-10">
            <div className="flex justify-center items-center w-10 h-10 relative rounded-[80px]">
              <div className="flex justify-center items-center w-[33px] h-[18px] ">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          </>

  )
}

export default Card;