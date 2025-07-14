"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div className="hero_banner relative w-full pt-20 overflow-x-hidden">
      <div className="absolute inset-0 bg-cover bg-center" />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="relative z-2 banner_content max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          {/* Heading with blur animation */}
          <motion.h1
            className="text-[34px] 2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold mb-4"
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Software Development Company
          </motion.h1>

          {/* Paragraph with blur animation */}
          <motion.div
            className="banner_text"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <p className="text-[14px] xl:text-[22px] lg:text-[20px] md:text-[15px] sm:text-[14px] font-normal text-customwhite mb-12 text-opacity-70">
              We design, develop & deploy across the tech stack, maximizing your software development project team with expert technical talent. Get in touch regarding your next software or web development project!
            </p>
          </motion.div>

          {/* Button group with blur animation */}
          <motion.div
            className="btn_wrapper flex gap-x-4"
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <a
              href="/contact"
              className="bg-white text-black px-3 md:px-6 text-[14px] py-2 rounded-md shadow-md transition flex items-center hover:bg-[#4353FF] hover:text-white"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="trans_button flex items-center text-[#F7F8F8] px-3 md:px-6 text-[16px] py-2 md:py-3 rounded-md transition hover:text-white"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Image without blur */}
      {/* <div className="banner_image mt-[-10rem] xl:mt-[-20rem] lg:mt-[-16rem] relative z-1">
        <Image
          src="/images/banner_incl_screen.webp"
          alt="Banner Image"
          width={1920}
          height={300}
          priority
          className="w-full h-auto object-cover"
        />
      </div> */}
      <div className="banner_image mt-[-10rem] xl:mt-[-20rem] lg:mt-[-16rem] relative z-1">
        <Image
          src="/images/banner_incl_screen.webp"
          alt="Banner Image"
          priority
          // loading="lazy"
          width={1920}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>

    </div>
  );
};

export default HeroBanner;
