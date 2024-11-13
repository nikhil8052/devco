"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import $ from 'jquery';  // Import jQuery
import 'slick-carousel/slick/slick.css';  // Import Slick CSS
import 'slick-carousel/slick/slick-theme.css';  // Import Slick theme CSS

const cardData = [
  {
    title: "Experience",
    description:
      "Valuable IT and software development staffing companies have plenty of experience. They understand the core needs of most of their clientele and can anticipate the usual barriers to success.",
    imgSrc: "/images/card_1.svg",
  },
  {
    title: "Speed",
    description:
      "Even if your project isn’t time-sensitive, you’ll still want a partner who can get you the staff members you need as quickly as possible. That way, you can get results faster—and potentially start generating revenue faster.",
    imgSrc: "/images/card_real.svg",
  },
  {
    title: "Access",
    description:
      "What kinds of talent is this staffing agency able to secure? Do they have access to people in a variety of different niches? What are your needs?",
    imgSrc: "/images/accessimg.svg",
  },
  {
    title: "Communication",
    description:
      "A good staffing partner will collaborate with you, and collaboration demands effective communication. Is it easy to talk with this partner and discuss your vision?",
    imgSrc: "/images/comminuctn.svg",
  },
];

export default function ChooseService() {
  useEffect(() => {
    // Initialize Slick Slider after the component mounts
    const $devCardRow = $('.dev_card_row');
    
    if ($devCardRow.length) {
      $devCardRow.slick({
        dots: true, // Show navigation dots
        infinite: true, // Loop the slides
        speed: 300, // Transition speed in ms
        slidesToShow: 3, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        responsive: [
          {
            breakpoint: 1024, // For tablet screens
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768, // For mobile screens
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
  }, []); // Empty dependency array to run only once after component mounts

  return (
    <div className="choose-section py-20 relative">
      <div className="container relative z-10">
        <div className="grid-head w-full max-w-[600px] xl:mb-10 mb-5">
          <h2 className="section_head_title font-semibold text-[34px] 2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[34px] md:mb-3 mb-2 text-customwhite">
            How to Choose a Software Development Staffing Company
          </h2>
          <div className="w-full">
            <p className="section_head_para text-[14px] 2xl:text-[22px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite">
              Of course, not all software development staffing companies are created equal. When searching for a potential staffing partner, make sure you consider:
            </p>
          </div>
        </div>
        
        <div className="dev_card_row flex gap-6">
          {cardData.map((card, index) => (
            <div key={index} className="dev_card_col w-full max-w-[456px]">
              <div className="dev_card rounded overflow-hidden shadow-lg border-lightBlue border p-5 lg:p-8 md:p-6 data_card bg-white/5 backdrop-blur-lg h-full">
                <div className="thumb relative mb-2 md:mb-5 h-[175px] flex flex-col">
                  <Image
                    className="w-full block mt-auto"
                    src={card.imgSrc}
                    alt={card.title}
                    width={500}
                    height={300}
                  />
                </div>
                <div className="text-section w-full max-w-[514px]">
                  <h4 className="text-[22px] md:text-[25px] font-semibold mb-2">{card.title}</h4>
                  <p className="text-sm md:text-base text-customwhite">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
