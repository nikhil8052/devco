'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

export default function Logofloat({ firstrowimages = [], secondrowimages = [], thirdrowimages = [], fourthrowimages = [] }) {
  // Check if there is data in any of the image arrays
  const hasImages = 
    firstrowimages.length > 0 || 
    secondrowimages.length > 0 || 
    thirdrowimages.length > 0 || 
    fourthrowimages.length > 0;

  // If there is no data, return null (no rendering)
  if (!hasImages) return null;

  const leftSliderSettings = {
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 8 } },
      { breakpoint: 768, settings: { slidesToShow: 6 } },
      { breakpoint: 480, settings: { slidesToShow: 4 } },
    ],
  };

  const rightSliderSettings = {
    ...leftSliderSettings,
    rtl: true,
  };

  return (
    <div className="logofloat_section w-full pt-20 relative z-10">
      <div className="logo_slider_wrapper pt-5 xl:pt-20">
        <div className="slider_outer relative">
          {/* Left Slider: First Row */}
          {firstrowimages.length > 0 && (
            <div className="logo_slider logo_slider_left">
              <Slider {...leftSliderSettings}>
                {firstrowimages.map((image, index) => (
                  <Image
                    key={`firstrow-${index}`}
                    src={image.src}
                    alt={image.alt || `Image ${index + 1}`}
                    width={100}
                    height={100}
                  />
                ))}
              </Slider>
            </div>
          )}

          {/* Right Slider: Second Row */}
          {secondrowimages.length > 0 && (
            <div className="logo_slider logo_slider_right">
              <Slider {...rightSliderSettings}>
                {secondrowimages.map((image, index) => (
                  <Image
                    key={`secondrow-${index}`}
                    src={image.src}
                    alt={image.alt || `Image ${index + 1}`}
                    width={100}
                    height={100}
                  />
                ))}
              </Slider>
            </div>
          )}

          {/* Left Slider: Third Row */}
          {thirdrowimages.length > 0 && (
            <div className="logo_slider logo_slider_left">
              <Slider {...leftSliderSettings}>
                {thirdrowimages.map((image, index) => (
                  <Image
                    key={`thirdrow-${index}`}
                    src={image.src}
                    alt={image.alt || `Image ${index + 1}`}
                    width={100}
                    height={100}
                  />
                ))}
              </Slider>
            </div>
          )}

          {/* Right Slider: Fourth Row */}
          {fourthrowimages.length > 0 && (
            <div className="logo_slider logo_slider_right">
              <Slider {...rightSliderSettings}>
                {fourthrowimages.map((image, index) => (
                  <Image
                    key={`fourthrow-${index}`}
                    src={image.src}
                    alt={image.alt || `Image ${index + 1}`}
                    width={100}
                    height={100}
                  />
                ))}
              </Slider>
            </div>
          )}

          {/* Middle Box */}
          <div className="middle_box">
            <Image src="/images/middle_logo_div.svg" alt="Middle Logo" width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
}
