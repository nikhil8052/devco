"use client";
import React, { useEffect  } from 'react';
import Image from 'next/image';
import $ from 'jquery';  // Import jQuery
import 'slick-carousel/slick/slick.css';  // Import Slick CSS
import 'slick-carousel/slick/slick-theme.css';  // Import Slick theme CSS


export default function ChooseService({title="",description="", mainHeading="", subHeading ="",  chooseData=[]  }) {


  console.log( mainHeading , subHeading , " This is the data " )
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
          <h2 className="section_head_title font-semibold text-[24px] 2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[34px] md:mb-3 mb-2 text-customwhite">
          {mainHeading} <span className='heading-opacity inline-block max-w-[400px]'>{title}</span>
          </h2>
          <div className="w-full">
            <p className="section_head_para text-[14px] 2xl:text-[22px] xl:text-[18px] md:text-[14px] sm:text-[14px] font-normal text-customwhite">
              {description}
            </p>
          </div>
        </div>

        <div className="dev_card_row flex gap-6">
          { chooseData.map((card, index) => (
            <div key={index} className="dev_card_col w-full ">
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
                <div className="text-section w-full max-w-[514px] relative">
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