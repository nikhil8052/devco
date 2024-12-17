'use client';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Logofloat({ firstrowimages, secondrowimages,fourthrowimages,thirdrowimages }) {
  // Slider settings for left-to-right scroll
  const leftSliderSettings = {
    infinite: true,
    slidesToShow: 10, // Adjust the number of logos visible at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // For smooth continuous scroll
    speed: 8000, // Adjust speed for smoothness
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false, // Prevent pause on hover
  };

  // Slider settings for right-to-left scroll
  const rightSliderSettings = {
    ...leftSliderSettings,
    rtl: true, // Reverse direction for the second slider
  };

  return (
    <div className="logofloat_section w-full lg:pt-20 md:pt-10 sm:pt-5 relative  z-10">
      <div className="logo_slider_wrapper pt-20">
       <div className='slider_outer relative'>
         {/* Left Slider */}
         <div className="logo_slider logo_slider_left">
          <Slider {...leftSliderSettings}>
            {firstrowimages.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))}
          </Slider>
        </div>

        {/* Right Slider */}
        <div className="logo_slider logo_slider_right">
          <Slider {...rightSliderSettings}>
            {secondrowimages.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))}
          </Slider>
        </div>
        <div className="logo_slider logo_slider_left">
          <Slider {...leftSliderSettings}>
            {thirdrowimages.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))}
          </Slider>
        </div>
           {/* Right Slider */}
           <div className="logo_slider logo_slider_right">
          <Slider {...rightSliderSettings}>
            {fourthrowimages.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))}
          </Slider>
        </div>
        <div className='middle_box'>
      <img src="/images/middle_logo_div.svg" alt="Middle Logo" />
      </div>
       </div>
      </div>

    </div>
  );
}
