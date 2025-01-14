"use client"; // Add this at the top

import React from 'react';
import { motion } from 'framer-motion';

const Newbanner = ({ subtitle = "", title = "", description = "", bannerImage = "" }) => {
  return (
    <div className="hero_banner new_banner servicepage_banner relative w-full pt-20">
      <div className="container container-wide mx-auto relative z-2">
        <motion.div
          className="relative z-2 banner_content"
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="banner_row flex flex-col lg:flex-row">
            {/* Banner Text Column */}
            <div className="banner_text_col flex-1">
              {subtitle && (
                <motion.p className="page_subtitle text-[14px] md:text-[18px] sm:text-[14px] capitalize">
                  {subtitle}
                </motion.p>
              )}
              {title && (
                <motion.h1
                  className="2xl:text-[64px] text-[34px] xl:text-[64px] md:text-[50px] sm:text-[34px] font-semibold mb-4"
                  initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {title}
                </motion.h1>
              )}
                    <motion.div
            className="btn_wrapper flex space-x-4"
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <a href="/contact" className="bg-white text-black px-3 md:px-6 text-[14px] py-2 rounded-md shadow-md transition flex items-center hover:bg-[#4353FF] hover:text-white">
              Contact Us
            </a>
            <a href="/portfolio" className="trans_button flex items-center text-[#F7F8F8] px-3 md:px-6 text-[16px] py-2 md:py-3 rounded-md transition hover:text-white">
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
            </div>
            
            {/* Banner Image Column */}
            <div className="banner_image_col flex-1">
              {bannerImage && (
                <motion.img
                  src={bannerImage}
                  alt="Banner"
                  className="w-full max-w-md mx-auto lg:mx-0"
                  animate={{
                    y: [0, 20, 0], // Moves up and down
                  }}
                  transition={{
                    duration: 4, // Time for one full cycle
                    repeat: Infinity, // Loop the animation
                    ease: "easeInOut", // Smooth ease in and out
                  }}
                />
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative z-2 banner_content mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Description */}
          {description && (
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
          )}

          {/* Learn More Button */}

        </motion.div>
      </div>
    </div>
  );
};

export default Newbanner;
