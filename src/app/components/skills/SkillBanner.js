"use client"; // Add this at the top

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SkillBanner = ({ title = "", description = "", subtitle = "", bannericon = "" }) => {
  return (
    <div className="Skill_banner relative w-full pt-20 pb-20">
              <motion.div
          className="banner_bg_dots absolute top-[180px] left-0 right-0 mx-auto z-1"
          animate={{
            y: [0, 20, 0], // Moves up and down
          }}
          transition={{
            duration: 4, // Time for one full cycle
            repeat: Infinity, // Loop the animation
            ease: "easeInOut", // Smooth ease in and out
          }}
        >
          <Image
            className="w-[90%] max-w-[1160px] mx-auto"
            src="/images/Skillsbg.svg"
            alt="Image"
            width={1160}
            height={440}
          />
        </motion.div>
      <div className="absolute inset-0 bg-cover bg-center" />
      <div className="container mx-auto text-left flex flex-col items-center justify-center">
        <motion.div
          className="relative z-2 banner_content max-w-[800px]"
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {bannericon && ( // Conditionally render the service_banner_icon if bannericon exists
            <motion.div
              className="service_banner_icon"
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Image
                className="mx-auto block w-full max-w-[170px] md:max-w-[270px] my-10"
                src={bannericon}
                alt="Banner Image"
                width={267}
                height={267}
              />
            </motion.div>
          )}
          <motion.p className="papge_subtitle text-[14px ] md:text-[18px] sm:text-[14px] capitalize text-center">
            {subtitle}
          </motion.p>
          <motion.h1
            className="text-[34px] 2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold text-center mb-4"
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {title}
          </motion.h1>

          <motion.div
            className="btn_wrapper flex justify-center space-x-4 mt-10 mb-10 md:mb-20"
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <a href="/contact" className="bg-white text-black px-3 md:px-12 text-[14px] md:text-[16px] md:py-3 py-2 rounded-md shadow-md transition flex items-center hover:bg-[#4353FF] hover:text-white">
              Contact Us
            </a>
          </motion.div>

          <motion.p
            className="banner_text text-opacity-70 text-[14px] xl:text-[22px] lg:text-[20px] md:text-[15px] sm:text-[14px] font-normal text-customwhite mb-8 p-5 md:p-10 md:pt-[50px] xl:pt-[80px] 2xl:pt-[110px]"
            style={{
              backgroundImage: `url('/images/skilltext-bg.svg')`,
              backgroundColor: 'rgba(0, 0, 0, 0.25)',
              borderTop: '1px solid',
              borderImageSlice: 1,
              borderImageSource: 'linear-gradient(90deg, #000000 0%, #4353FF 50%, #000000 100%)',
              backgroundSize: 'contain',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
              borderRadius: '8px',
            }}
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.7 }}
            dangerouslySetInnerHTML={{ __html: description }}
          ></motion.p>

          <motion.div
            className="btn_wrapper flex space-x-4 pl-5 md:pl-10"
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <a href="/contact" className="bg-white text-black px-3 md:px-6 text-[14px] py-2 rounded-md shadow-md transition flex items-center hover:bg-[#4353FF] hover:text-white">
              Contact Us
            </a>
            <a href="/services" className="trans_button flex items-center text-[#F7F8F8] px-3 md:px-6 text-[16px] py-2 md:py-3 rounded-md transition hover:text-white">
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
            </a>
          </motion.div>
        </motion.div>
      </div>
      {/* <div className="divider flex items-center content-center h-[150px] w-[100%] max-w-2xl mx-auto">
        <div className="divider_line h-[1px] w-[100%] bg-[#ffffff] opacity-10"></div>
      </div> */}

      <motion.div
        className="banner_image pl-20"
        initial={{ opacity: 0, x: 200, y: -300 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
      ></motion.div>
    </div>
  );
};

export default SkillBanner;
