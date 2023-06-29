import React from 'react'
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import group from '../assets/Group.svg';
import vactor from '../assets/Vector.svg'


const Box: React.FC = () => {
    return (
        <>

            <div className="w-[1439px] h-[652px] relative overflow-hidden mt-20 ">
            
      
                <div className="w-[580px] left-[175px] top-[94px] absolute">
                    <div className="w-[580px] h-[214.45px] left-0 top-0 absolute">
                       
                        <div className="absolute top-[0px] left-[0px] leading-[52px] text-29xl inline-block w-[580px] h-[127.7px] text-white text-[48px] font-bold  ">
 Learn how to launch a successful podcast
                            </div>
                        <div className="w-[433px] h-[62.75px] left-0 top-[151.70px] absolute text-white text-[16px] font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting in ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
                    </div>
                    <div className="w-[237px] h-[74.86px] pl-[55px] pr-14 pt-[19px] pb-[25.86px] left-0 top-[296.14px] cursor-pointer absolute bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg justify-center items-center inline-flex">
                        <div className="text-white text-[20px] font-bold">Sign up Now</div>
                    </div>
                </div>
                <div className="w-[550px] h-[370px] left-[774.10px] top-[153.96px] absolute">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div
                            key={`circle-${i}`}
                            className="w-2.5 h-2.5 left-0 absolute bg-purple-800 rounded-full"
                            style={{ top: `${60 * i}px` }}
                        />
                    ))}
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div
                            key={`circle-${i}`}
                            className="w-2.5 h-2.5 left-[60px] absolute bg-purple-800 rounded-full"
                            style={{ top: `${60 * i}px` }}
                        />
                    ))}
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div
                            key={`circle-${i}`}
                            className="w-2.5 h-2.5 left-[120px] absolute bg-purple-800 rounded-full"
                            style={{ top: `${60 * i}px` }}
                        />
                    ))}
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div
                            key={`circle-${i}`}
                            className="w-2.5 h-2.5 left-[180px] absolute bg-purple-800 rounded-full"
                            style={{ top: `${60 * i}px` }}
                        />
                    ))}
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div
                            key={`circle-${i}`}
                            className="w-2.5 h-2.5 left-[240px] absolute bg-purple-800 rounded-full"
                            style={{ top: `${60 * i}px` }}
                        />
                    ))}
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div
                            key={`circle-${i}`}
                            className="w-2.5 h-2.5 left-[300px] absolute bg-purple-800 rounded-full"
                            style={{ top: `${60 * i}px` }}
                        />
                    ))}
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div
                            key={`circle-${i}`}
                            className="w-2.5 h-2.5 left-[360px] absolute bg-purple-800 rounded-full"
                            style={{ top: `${60 * i}px` }}
                        />
                    ))}
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div
                            key={`circle-${i}`}
                            className="w-2.5 h-2.5 left-[420px] absolute bg-purple-800 rounded-full"
                            style={{ top: `${60 * i}px` }}
                        />
                    ))}
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div
                            key={`circle-${i}`}
                            className="w-2.5 h-2.5 left-[480px] absolute bg-purple-800 rounded-full"
                            style={{ top: `${60 * i}px` }}
                        />
                    ))}
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div
                            key={`circle-${i}`}
                            className="w-2.5 h-2.5 left-[540px] absolute bg-purple-800 rounded-full"
                            style={{ top: `${60 * i}px` }}
                        />
                    ))}
                </div>

                <img className="w-[491px] h-[281px] left-[773px] top-[94px] absolute rounded-lg" src={banner2} alt="banner1" />
                <img className="w-[491px] h-[281px] left-[720px] top-[184px] absolute rounded-lg" src={banner1} alt="banner2" />
                <div className="w-[63px] h-[62px] px-[7px] py-0.5 left-[1253.19px] top-[431px] absolute origin-top-left rotate-[15.14deg] bg-white rounded shadow justify-center items-center gap-2.5 inline-flex">
                    <div className=" relative">
                        <img className='w-[35.71px] h-[46.43px]' src={group} alt="group" />

                    </div>
                </div>
                <div className="w-[65px] h-[65px] px-[3px] py-[7px] left-[1295px] top-[264.82px] absolute origin-top-left rotate-[-16.83deg] bg-white rounded shadow flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="relative">
                        <img className='w-[44.8px] h-[34.4px]' src={vactor} alt="vactor" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Box