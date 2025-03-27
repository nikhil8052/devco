"use client"; 
import React from 'react';
import Image from 'next/image';
import BasicCard from '../cards/BasicCard';

const DesignSection = ({ title, description, servicesProps, sideImage }) => {
  return (
    <div className='service_section py-10 lg:py-20 md:py-5 relative bg-right'>
      <div className='services_grid_wrapper'>
        <div className='service_cards_wrapper relative z-10'>
          <div className='container mx-auto'>
            <div className='card_col_flex flex w-full gap-y-10'>

              {/* Left Side Content */}
              <div className='left_side min-w-[65%]  relative z-10'>
                <div className="grid-head w-full">
                  <h2 className='section_head_title font-semibold text-[34px] 2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[34px] mb-5 text-customwhite'>{title}</h2>
                  <div className='w-full max-w-[590px]'>
                    <p className='section_head_para text[14px]  2xl:text-[22px] xl:text-[18px] md:text[14px] sm:text[14px]  font-normal text-customwhite'>{description}</p>
                  </div>
                </div>
                <div className='animated_frame_wrap my-5 md:hidden sm:block'>
                <Image
                  className='service_frame w-full'
                  src={sideImage}
                  alt="Banner Image"
                  width={879}
                  height={500}
                />
              </div>
                <div className='w-full mt-10 card_col relative z-10'>
                  <div className='card_grid grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-[25px]'>
                    {servicesProps.map((cardData, index) => (
                      <div className='card_box_col max-w-[456px]' key={index}>
                        <BasicCard key={index} cardData={cardData} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sticky Image Section */}
              <div className='animated_frame_wrap hidden lg-mr-[-4rem] md:mr-[0px] sticky top-[50px] self-start md:block  show_desktop  '>
                <Image
                  className='service_frame w-full xl:scale-[1.5] lg:scale-[1.3] md:scale-[1.3] sm:scale[1] origin-top-right lg:max-w-[800px] rounded-[10px]'
                  src={sideImage}
                  alt="Banner Image"
                  width={879}
                  height={500}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
      <Image 
      className='absolute z-1 right-0 top-[-10%] w-[70%]'
        src="images/design_patterns.svg" 
        alt="Description of image" 
        width={500} 
        height={300} 
      />
    </div>
  );
};

export default DesignSection;
