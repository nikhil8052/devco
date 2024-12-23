"use client"; // Add this at the top

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Locationbanner = ({ title = "", description = "",}) => {
  return (
    <div className="Skill_banner locationbanner relative w-full pt-20 pb-20">
        <div className="banner_bg_earth w-full absolute top-[0px] left-0 right-0 mx-auto z-1 mt-[-5rem]">
          <Image
            className="w-[100%] max-w-[100%] mx-auto relative z-1"
            src="/images/locationbanner.png"
            alt="Image"
            width={1160}
            height={440}
          />
          <Image
            className="w-[100%] max-w-[100%] mx-auto absolute z-2 top-[0px] left-0"
            src="/images/inner_page_lefttop.svg"
            alt="Image"
            width={1160}
            height={440}
          />
        </div>
      <div className="container mx-auto text-left flex flex-col items-center justify-center">
        <motion.div
          className="relative z-2 banner_content max-w-[800px]"
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
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
             <a href="/contact" className="bg-customBlue text-customwhite px-6 py-3 rounded-md shadow-md transition flex items-center hover:bg-[#ffffff] hover:text-black">
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

          <motion.p
            className="banner_text text-opacity-70 text-[14px] xl:text-[22px] lg:text-[20px] md:text-[15px] sm:text-[14px] font-normal text-customwhite"

            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.7 }}
            dangerouslySetInnerHTML={{ __html: description }}
          ></motion.p>

        </motion.div>
      </div>
    </div>
  );
};

export default Locationbanner;
