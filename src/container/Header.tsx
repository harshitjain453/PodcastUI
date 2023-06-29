import React from 'react';
import group1 from '../assets/group-1.svg';
import pinwing from '../assets/pngwing.png';
import Box from '../components/Box';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Plans from '../components/Plans';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Header = () => {
  return (
    <div className="relative bg-default-white w-full overflow-hidden text-left text-base text-default-white font-heading-heading-3">
      <img className="absolute top-0 left-0" alt="" src={group1} />
      <img
        className="absolute top-[540px] left-[902px] w-[610px] h-[455px] object-contain"
        alt=""
        src={pinwing}
      />
      <Navbar />
      <Box />
      <About />
      <Plans />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Header;
