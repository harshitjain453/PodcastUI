import React from 'react'
import line1 from '../assets/line-1.svg'
import line2 from '../assets/line-2.svg'
const Plans: React.FC = () => {
  return (

    <div className=" w-[1439px] h-[691px] relative overflow-hidden">
      <div className=" w-[1477px] h-[568px] left-[1px] top-0 absolute">
        <div>
          <img
            className="absolute top-[0px] left-[0px] w-[1439px] h-[531.08px]"
            alt=""
            src={line1}
          />
          <img
            className="absolute top-[17.94px] left-[1px] w-[1439px] h-[531.14px]"
            alt=""
            src={line2}
          />
          <img
            className="absolute top-[36.94px] left-[2px] w-[1439px] h-[531.14px]"
            alt=""
            src={line2}
          />

      
        </div>

        <div className="w-[641px] h-[158px] left-[910px] top-[205px] absolute text-zinc-100 text-[150px] font-bold">Podcast</div>
      </div>
      <div className="h-[577px] left-[175px] top-[76px] absolute">
        <div className="w-[455px] h-[166px] left-[317px] top-0 absolute flex-col justify-start items-center gap-6 inline-flex">
          <div className="flex-col justify-start items-center gap-6 flex">
            <div className="text-black text-[32px] font-bold">Choose your plan</div>
            <div className="w-[455px] text-center text-black text-[14px] font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </div>
          </div>
          <div className="h-[37px] pl-1.5 pr-4 py-1.5 bg-white rounded-lg shadow justify-start items-center gap-2.5 inline-flex">
            <div className="px-[9px] py-[3px] bg-fuchsia-300 bg-opacity-40 rounded-lg justify-center items-center gap-2.5 flex">
              <div className="text-center text-black text-[14px] font-normal">monthly</div>
            </div>
            <div className="text-center text-black text-[14px] font-normal">yearly</div>
          </div>
        </div>
        <div className="w-[1090px] h-[357px] left-0 top-[220px] absolute">
          <div className="w-[303px] h-[357px] px-[27px] py-[35px] left-0 top-0 absolute bg-white rounded-lg border  border-purple-800 flex-col justify-start items-start gap-6 inline-flex">
            <div className="h-[71px] flex-col justify-start items-start gap-4 flex">
              <div className="text-black text-[16px] font-bold">Basic Plan</div>
              <div className="w-[264px] text-black text-[12px] font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting</div>
            </div>
            <div className="justify-start items-center gap-[19px] inline-flex">
              <div className="text-purple-800 text-[32px] font-bold">$ 54</div>
              <div className="text-purple-800 text-[14px] font-normal">/month</div>
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="text-black text-[12px] font-bold">Free access to video class</div>
              </div>
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="text-black text-[12px] font-bold">Free access to video class</div>
              </div>
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="text-black text-[12px] font-bold">Free access to video class</div>
              </div>
            </div>
            <div className="pl-[31px] pr-8 pt-3.5 pb-3 rounded border  border-purple-800 justify-center items-center inline-flex cursor-pointer">
              <div className="text-purple-800 text-[12px] font-normal">Start Free Trial</div>
            </div>
          </div>
          <div className="w-[303px] h-[357px] px-[27px] py-[35px] left-[787px] top-0 absolute bg-white rounded-lg border  border-purple-800 flex-col justify-start items-start gap-6 inline-flex">
            <div className="h-[71px] flex-col justify-start items-start gap-4 flex">
              <div className="text-black text-[16px] font-bold">Basic Plan</div>
              <div className="w-[264px] text-black text-[12px] font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting</div>
            </div>
            <div className="justify-start items-center gap-[19px] inline-flex">
              <div className="text-purple-800 text-[32px] font-bold">$ 54</div>
              <div className="text-purple-800 text-[14px] font-normal">/month</div>
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="text-black text-[12px] font-bold">Free access to video class</div>
              </div>
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="text-black text-[12px] font-bold">Free access to video class</div>
              </div>
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="text-black text-[12px] font-bold">Free access to video class</div>
              </div>
            </div>
            <div className="pl-[31px] pr-8 pt-3.5 pb-3 rounded border  border-purple-800 justify-center items-center inline-flex cursor-pointer">
              <div className="text-purple-800 text-[12px] font-normal">Start Free Trial</div>
            </div>
          </div>
          <div className="w-[303px] h-[357px] px-[27px] py-[35px] left-[393px] top-0 absolute bg-purple-800 rounded-lg flex-col justify-start items-start gap-6 inline-flex">
            <div className="h-[71px] flex-col justify-start items-start gap-4 flex">
              <div className="text-white text-[16px] font-bold">Premium Plan</div>
              <div className="w-[264px] text-white text-[12px] font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting</div>
            </div>
            <div className="justify-start items-center gap-[19px] inline-flex">
              <div className="text-white text-[32px] font-bold">$ 54</div>
              <div className="text-white text-[14px] font-normal">/month</div>
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="text-white text-[12px] font-bold">Free access to video class</div>
              </div>
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="text-white text-[12px] font-bold">Free access to video class</div>
              </div>
              <div className="justify-start items-center gap-2.5 inline-flex">
                <div className="text-white text-[12px] font-bold">Free access to video class</div>
              </div>
            </div>
            <div className="pl-[31px] pr-8 pt-3.5 pb-3 bg-white rounded justify-center items-center inline-flex cursor-pointer">
              <div className="text-purple-800 text-[12px] font-normal">Start Free Trial</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plans