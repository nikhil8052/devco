"use client"; // Add this at the top

import React from 'react';
import { motion } from 'framer-motion';

const Centerbanner = ({ title = "", description = "", subtitle = ""}) => {
  return (
    <div className="Skill_banner main-service-banner relative w-full pt-5 xl:pt-20 pb-0 bg-black text-customwhite">
   
<div className="container mx-auto text-center flex flex-col items-center justify-center">
<motion.div
className="relative z-2 banner_content max-w-[800px]"
initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
transition={{ duration: 0.8, delay: 0.3 }}
>
<motion.p className="papge_subtitle text-headingBlue opacity-1 text-[14px ] md:text-[18px] sm:text-[14px] capitalize text-center">
  {subtitle}
</motion.p>
<motion.h1
  className="text-[34px] 2xl:text-[64px] xl:text-[60px] md:text-[45px] sm:text-[34px] font-semibold text-center mb-0"
  initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
  transition={{ duration: 1, delay: 0.5 }}
  dangerouslySetInnerHTML={{ __html: title }}
>
</motion.h1>

<motion.p
  className="banner_text text-opacity-70 text-[14px] xl:text-[22px] lg:text-[20px] md:text-[15px] sm:text-[14px] font-normal text-customwhite py-[30px]"
  initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
  transition={{ duration: 1, delay: 0.7 }}
  dangerouslySetInnerHTML={{ __html: description }}
></motion.p>

<motion.div
  className="btn_wrapper flex justify-center space-x-4"
  initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
  transition={{ duration: 1, delay: 0.9 }}
>
  <button className="bg-white text-black px-3 md:px-6 text-[14px] py-2 rounded-md shadow-md transition flex items-center hover:bg-[#4353FF] hover:text-white">
  Reserve my Seat
  </button>
  <button className="trans_button flex items-center text-[#F7F8F8] px-3 md:px-6 text-[16px] py-2 md:py-3 rounded-md transition hover:text-white">
    Learn More
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ml-1 w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
</motion.div>
</motion.div>
</div>
<div className="divider flex items-center content-center h-[150px] w-[100%] max-w-2xl mx-auto">
<div className="divider_line h-[1px] w-[100%] bg-[#ffffff] opacity-10"></div>
</div>

</div>
  );
};

export default Centerbanner;
