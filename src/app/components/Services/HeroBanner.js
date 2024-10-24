"use client"; // Add this at the top

import React from 'react';
import { motion } from 'framer-motion';

const HeroBanner = () => {
  return (
    <div className="hero_banner relative w-full pt-20">
      <div className="absolute inset-0 bg-cover bg-center" />
      <div className="container mx-auto text-center flex flex-col items-center justify-center">
        <motion.div
          className="relative z-2 banner_content max-w-2xl"
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1
            className="2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold mb-4 text-center" // Ensure text-center
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Software Development Staffing Company
          </motion.h1>

          <motion.p
            className="xl:text-[22px] lg:text-[20px] md:text-[15px] sm:text-[14px] font-normal text-customwhite mb-8 text-center" // Ensure text-center
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            One of the biggest challenges in software development (and IT) experienced professionals necessary to see your project to completion.
   
          </motion.p>

          <motion.div
            className="btn_wrapper flex justify-center space-x-4" // Ensure buttons are centered
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {/* Add buttons here if needed */}
          </motion.div>
        </motion.div>
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
