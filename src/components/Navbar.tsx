import React  from 'react';

const Navbar: React.FC = () => {
  return (
    <div className='w-[1439px] overflow-hidden'>
      <div className="w-[1439px] absolute top-[0px] left-[0px]  h-[91px] overflow-hidden">
        <b className="text-white absolute top-[36px] left-[175px] cursor-pointer">Logo</b>
        <div className="text-white absolute top-[36px] left-[898px] flex flex-row items-start justify-start gap-[107px]">
          <div className="relative  cursor-pointer ">About</div>
          <div className="relative cursor-pointer">Pricing</div>
          <div className="relative cursor-pointer">Review</div>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;