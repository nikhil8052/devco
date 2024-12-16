"use client"; // Add this at the top

import React from 'react';

const Centerbanner = () => {
  return (
    <div className="Skill_banner centerbanner relative w-full pt-20 pb-20">
      <div className="container mx-auto text-left flex flex-col items-center justify-center">
        <div
          className="relative z-2 banner_content max-w-[800px]"
        >
          <p className="papge_subtitle text-[14px ] md:text-[18px] sm:text-[14px] capitalize text-center">
          Services
          </p>
          <h1
             className="textcustomwhite text-[34px] 2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold text-center mb-4"
          >
           Software Development Services
          </h1>

          <p
            className="banner_text text-opacity-70 text-[14px] xl:text-[22px] lg:text-[20px] md:text-[15px] sm:text-[14px] font-normal text-customwhite mb-8 p-5 md:p-10 md:pt-[50px] xl:pt-[80px] 2xl:pt-[110px]"
          > 
          Full stack Custom software development Company, teams and services for small businesses and enterprise clients alike.</p>

          <div
            className="btn_wrapper flex space-x-4 pl-5 md:pl-10"
          >
            <button className="bg-white text-black px-3 md:px-6 text-[14px] py-2 rounded-md shadow-md transition flex items-center hover:bg-[#4353FF] hover:text-white">
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
          </div>
        </div>
      </div>
      <div className="divider flex items-center content-center h-[150px] w-[100%] max-w-2xl mx-auto">
        <div className="divider_line h-[1px] w-[100%] bg-[#ffffff] opacity-10"></div>
      </div>
    </div>
  );
};

export default Centerbanner;
