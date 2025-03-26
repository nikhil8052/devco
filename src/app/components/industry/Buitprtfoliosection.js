import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Buitprtfoliosection({ title, description, templatesdata }) {
  const settings1 = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 8000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false, // Prevents pausing on hover
  };

  const settings2 = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 8000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: true, // Right-to-left scrolling
    pauseOnHover: false, // Prevents pausing on hover
  };

  return (
    <div className="new_section text-customwhite builtwidth-section benefits_section xl:py-20 lg:py-10 py-10 mb-10 md:mb-20 relative bg-black">
      {/* Content Section */}
      <div className="container relative z-10">
        <div className="grid-head w-full md:max-w-[60%] xl:max-w-[678px] xl:mb-10 mb-5">
          <h2
            className="section_head_title font-semibold text-[28px] 2xl:text-[50px] xl:text-[38px] md:text-[32px] sm:text-[28px] md:mb-3 mb-2 text-customwhite"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          <div className="w-full">
            <p
              className="section_head_para text-[14px] 2xl:text-[20px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>
        </div>
      </div>

      {/* Slick Slider Section */}
      <div className="tilt_grid_section">
        {/* Left-to-Right Slider */}
        <Slider {...settings1} className="rotate_grid rotate_grid1">
          {templatesdata.map((item, index) => (
            <div className="rotate_grid_col" key={index}>
              <a href={item.link || "#"} target="_blank" className="temp_thumb">
                <img src={item.image} alt={item.alt || "Grid Item"} />
              </a>
            </div>
          ))}
        </Slider>

        {/* Right-to-Left Slider */}
        <Slider {...settings2} className="rotate_grid rotate_grid2">
          {templatesdata.map((item, index) => (
            <div className="rotate_grid_col" key={index}>
              <a href={item.link || "#"} target="_blank" className="temp_thumb">
                <img src={item.image} alt={item.alt || "Grid Item"} />
              </a>
            </div>
          ))}
        </Slider>

        <Slider {...settings1} className="rotate_grid rotate_grid1">
          {templatesdata.map((item, index) => (
            <div className="rotate_grid_col" key={index}>
              <a href={item.link || "#"} target="_blank" className="temp_thumb">
                <img src={item.image} alt={item.alt || "Grid Item"} />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
