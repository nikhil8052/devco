"use client";

import React, { useState, useEffect } from "react";

const phrases = ["We develop", "We design", "We innovate"];
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
        <div className="relative z-2 ux_banner_row flex flex-wrap pt-20 pb-[50px]">
          <div className="banner_head_col w-[55%] px-[50px]">
            <div className="ux_banner_head">
              <h5 className="text-[18px] mb-5">DESIGN LEADER: 100K+ FOLLOWERS 🌎</h5>
              <h1 className="text-[34px] 2xl:text-[68px] xl:text-[45px] md:text-[36px] sm:text-[34px] font-semibold mb-4">
                <span className="relative overflow-hidden block h-[80px]">
                  <span
                    className={`left-0 absolute w-full transition-transform duration-600 ease-in-out text-headingBlue ${
                      isAnimating ? "slide-up" : "reset-position"
                    }`}
                  >
                    {phrases[currentPhraseIndex]}
                  </span>
                </span>{" "}
                apps, design websites, and build brands.
              </h1>
            </div>
          </div>
          <div className="banner_text_col w-[45%] px-[50px]">
            <div className="banner_textwrap w-full max-w-[460px]">
              <p className="text-[14px] xl:text-[22px] lg:text-[20px] md:text-[15px] sm:text-[14px] font-normal text-customwhite text-opacity-70">
                User experience (UX) is key to retaining and converting visitors. While design matters, true engagement comes from a seamless, intuitive journey—driven by a strong user interface (UI).
              </p>
              <div className="ux-btn_wrapper flex gap-x-4 mt-[49px]">
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
          <div className="media_wrap w-full leading-none">
            <img src="/images/as.png" width="100" height="50" alt="Download Case Study" className="rounded-2xl w-full banner_vid_image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiTopbanner;
