"use client"; // Add this at the top

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroBanner = ({title="", description="", subtitle="", bannertop_icon=""}) => {
  return (
    <div className="hero_banner relative w-full pt-20">
      <div className="absolute inset-0 bg-cover bg-center" />
      <div className="container mx-auto text-left flex flex-col items-center justify-center">
        <motion.div
          className="relative z-2 banner_content max-w-2xl"
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.p className='papge_subtitle text-[14px ] md:text-[18px] sm:text-[14px] capitalize text-center '>{subtitle}</motion.p>
          <motion.h1
            className="2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold text-center mb-4" // Ensure text-center
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {title}
          </motion.h1>

          <motion.div
            className="btn_wrapper flex justify-center space-x-4 mt-2" // Ensure buttons are centered
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <button className="bg-white text-black px-3 md:px-12 text-[14px] md:text-[16px] md:py-3 py-2 rounded-md  shadow-md transition flex items-center hover:bg-[#4353FF] hover:text-white">
              Contact Us
            </button>
          </motion.div>

          <motion.div className='service_banner_icon'  initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.9 }}>
              <Image
              className='mx-auto block my-10 md:my-[50px] xl:my-[80px] 2xl:my-[110px]'
              src={"/images/threeusuer.svg"}
              alt="Banner Image"
              width={170}
              height={170}
            />
          </motion.div>

          <motion.p
            className=" banner_text text-[14px ]xl:text-[22px] lg:text-[20px] md:text-[15px] sm:text-[14px] font-normal text-customwhite mb-8" // Ensure text-center
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.7 }}
            dangerouslySetInnerHTML={{ __html: description }}
          >
   
          </motion.p>

          <motion.div
            className="btn_wrapper flex space-x-4" // Ensure buttons are centered
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <button className="bg-white text-black px-3 md:px-6 text-[14px] py-2 rounded-md  shadow-md transition flex items-center hover:bg-[#4353FF] hover:text-white">
              Contact Us
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
      <div className='divider flex items-center content-center h-[150px] w-[100%] max-w-2xl mx-auto'>
        <div className='divider_line h-[1px] w-[100%] bg-[#ffffff] opacity-10'>
        </div>
      </div>

      {/* Banner Image Animation - coming from top-right */}
      <motion.div
        className="banner_image pl-20"
        initial={{ opacity: 0, x: 200, y: -300 }} 
        animate={{ opacity: 1, x: 0, y: 0 }}    
        transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}   
      >
        {/* <Image
          src="/images/bannerimg.png"
          alt="Banner Image"
          width={1920}
          height={300}
        /> */}
      </motion.div>
    </div>
  );
};

export default HeroBanner;
