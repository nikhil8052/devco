"use client";
import React, { useEffect  } from 'react';
import Image from 'next/image';
import $ from 'jquery';  // Import jQuery
import 'slick-carousel/slick/slick.css';  // Import Slick CSS
import 'slick-carousel/slick/slick-theme.css';  // Import Slick theme CSS

// const data = [
//   {
//     title: "Experience",
//     description: "Valuable IT and software development staffing companies have plenty of experience. They understand the core needs of most of their clientele and can anticipate the usual barriers to success.",
//     imgSrc: "/images/card_1.svg",
//   },
//   {
//     title: "Speed",
//     description: "Even if your project isn’t time-sensitive, you’ll still want a partner who can get you the staff members you need as quickly as possible. That way, you can get results faster—and potentially start generating revenue faster.",
//     imgSrc: "/images/card_real.svg",
//   },
//   {
//     title: "Access",
//     description: "What kinds of talent is this staffing agency able to secure? Do they have access to people in a variety of different niches? What are your needs?",
//     imgSrc: "/images/accessimg.svg",
//   },
//   {
//     title: "Communication",
//     description: "A good staffing partner will collaborate with you, and collaboration demands effective communication. Is it easy to talk with this partner and discuss your vision?",
//     imgSrc: "/images/comminuctn.svg",
//   },
// ];

export default function Benefitslider({ chooseData=[] }) {
  // Object.values()



  useEffect(() => {
 
    // Import the Slick JS file dynamically after mounting
    import('slick-carousel').then(() => {
      const devCardRow = $('.dev_card_row');

      if (devCardRow.length) {
        devCardRow.slick({
          dots: false,
          arrows:false,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      }
    }).catch(error => console.error("Slick Carousel could not be initialized:", error));
  }, []);

  return (
    <div className="choose-section py-10 md:py-20 relative">
      <div className="container relative z-10">
        <div className="grid-head w-full max-w-[600px] xl:mb-10 mb-5">
          <h2 className="section_head_title font-semibold text-[24px] 2xl:text-[42px] xl:text-[35px] md:text-[30px] sm:text-[24px] md:mb-3 mb-2 text-customwhite">
          The Benefits of Hiring a Software Development Staffing Company
          </h2>
          <div className="w-full">
            <p className="section_head_para text-[14px] 2xl:text-[22px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite">
            Hiring a software development staffing company yields multiple benefits simultaneously:
            </p>
          </div>
        </div>

        <div className="dev_card_row flex gap-6">
          { chooseData.map((card, index) => (
            <div key={index} className="dev_card_col w-full max-w-[456px]">
              <div className="dev_card rounded overflow-hidden shadow-lg border-lightBlue border p-5 lg:p-8 md:p-6 data_card bg-white/5 backdrop-blur-lg h-full">
                <div className="thumb relative mb-2 md:mb-5 flex flex-col">
                  <Image
                    className=" block mt-auto min-h-[50px]"
                    src={card.imgSrc}
                    alt={card.title}
                    width={30}                    
                    height={50}
                  />
                </div>
                <div className="text-section w-full max-w-[514px]">
                  <h4 className="text-[20px] md:text-[25px] font-semibold mb-2">{card.title}</h4>
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