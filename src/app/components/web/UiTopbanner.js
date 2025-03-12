"use client";

import React, { useState, useEffect } from "react";

const phrases = ["Web", "Web", "Web"];
const UiTopbanner = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [nextPhraseIndex, setNextPhraseIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true); // Start slide-up animation

      setTimeout(() => {
        setCurrentPhraseIndex(nextPhraseIndex);
        setNextPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsAnimating(false); // Reset animation after transition
      }, 600); // Match duration with CSS animation
    }, 2500); // Change phrase every 2.5 seconds

    return () => clearInterval(interval);
  }, [nextPhraseIndex]);

  return (
    <div className="hero_bannerux relative w-full pt-20 overflow-x-hidden">
      <div className="container mx-auto relative z-10">
        <div className="relative z-2 ux_banner_row flex flex-wrap xl:pt-20 xl:pb-[50px] pb-[30px]">
          <div className="banner_head_col lg:w-[55%] w-full xl:px-[50px] lg:px-[20px] px-[0px]">
            <div className="ux_banner_head">
              <h5 className="text-[18px] mb-5">Services</h5>
              <h1 className="text-[34px] 2xl:text-[68px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold mb-4">
                <span className="relative overflow-hidden block 2xl:h-[80px] lg:h-[40px] h-[40px]">
                  <span
                    className={`left-0 absolute w-full transition-transform duration-600 ease-in-out text-headingBlue ${
                      isAnimating ? "slide-up" : "reset-position"
                    }`}
                  >
                    {phrases[currentPhraseIndex]}
                  </span>
                </span>{" "}
                Development Company
              </h1>
            </div>
          </div>
          <div className="banner_text_col lg:w-[45%] w-full xl:px-[50px] lg:px-[20px] px-[0px] ">
            <div className="banner_textwrap w-full max-w-[460px]">
              <p className="text-[14px] xl:text-[22px] lg:text-[20px] md:text-[15px] sm:text-[14px] font-normal text-customwhite text-opacity-70">
              If your current website design is outdated, needs an overhaul, or you’d like to start from scratch, we’re here to help. Our professional web development and web design team has decades of experience developing custom websites, web pages and web applications across multiple programming languages. Whether you need front end developers or back end web developers, our our team of full stack software developers has you covered.
              </p>
              <div className="ux-btn_wrapper flex gap-x-4 2xl:mt-[49px] mt-[20px]">
                <a
                  href="/contact"
                  className="bg-white ux_cta text-black px-3 md:px-6 text-[14px] md:text-[16px] py-3 rounded-md shadow-md transition flex items-center hover:bg-[#4353FF] hover:text-white"
                >
                  Contact Us
                </a>
                <a
                  href="/services"
                  className="ux_cta flex items-center text-[#F7F8F8] px-2 md:px-6 text-[16px] py-2 md:py-3 rounded-md transition"
                >
                  <img src="/images/learnmore.svg" width="90" height="50" alt="Download Case Study" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="full_video py-[50px]">
        <div className="media_wrap w-full leading-none relative">
            {/* <video
              className="w-full rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/images/banner_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
             <img src="/images/web_media_banner.png" width="100%" height="50" alt="Web media banner" />

          </div>

        </div>
      </div>
    </div>
  );
};

export default UiTopbanner;
