'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function StartUps({ title = "", description = "", images = [], imageHeight = 100, imageWidth = 100 }) {

  const settings = {
    infinite: true,
    arrows:false,
    speed: 3000, // Smooth speed
    slidesToShow: Math.min(images.length, 5),
    // slidesToShow:5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1, // For smoother continuous motion
    cssEase: 'linear',
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768, // For tablets and smaller screens
        settings: {
          slidesToShow: 3, // Show 2 slides on mobile
          slidesToScroll: 1,
          speed: 1000, // Smooth speed
        },
      },
      {
        breakpoint: 480, // For smaller mobile screens
        settings: {
          slidesToShow: 2, // Adjust as necessary for smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="startup_section  relative z-2">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-[20px] md:text-[24px] sm:text-[22px] text-customwhite font-semibold mb-1">
            {title}
          </h2>
          <p className="text-[14px] md:text-[24px] sm:text-[18px] font-normal text-customwhite">
            {description}
          </p>
        </div>

        {/* Continuous rotating slider */}
        <div className="overflow-hidden relative w-full max-w-[1000px] mx-auto">
          <Slider {...settings} className="logos_slider flex items-center overflow-hidden">
            {images.map((image, index) => (
              <div key={index} className="flex justify-center items-center px-2">
                <Image className='mx-auto  block max-w-[90px]' src={image} width={imageWidth} height={imageHeight} alt={`Image ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
