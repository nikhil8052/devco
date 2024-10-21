import React from 'react';
import Image from 'next/image';
import BasicCard from '../cards/BasicCard';
const DesignSection = ({title, description, servicesProps, backgroundImage , sideImage  }) => {
  return (
    <div className='service_section py-20 relative bg-right'>
        <div className='services_grid_wrapper'>
          <div className="section_head ">
            <div className='container mx-auto'>
                <h2 className='section_head_title font-semibold text-[64px] mb-5 text-customwhite'>{title}</h2>
            </div>
          </div>
          <div className="section_head_description relative ">
            <div className='container mx-auto mx-auto'>
               
                <div class="grid grid-cols-2 gap-6 w-full">
                  <div class="text_col">
                  <p className='section_head_para text-[22px] font-normal text-customwhite'>{description}</p>
                  </div>
                  <div class="media_col">
                  <Image
                      className='service_frame absolute top-0 z-1 right-0 px-20 w-1/2'
                      src={sideImage}
                      alt="Banner Image"
                      width={1920}
                      height={300}
                    />

                    
                  </div>
                </div>
            </div>
          </div>
          <div className='service_cards_wrapper mt-16 relative z-10'>
            <div className='container mx-auto'>
              <div className='card_col_flex flex flex-wrap w-full'>
                  <div className='w-3/5 card_col'>
                    <div className='card_grid grid grid-cols-2 gap-4'>
                    {servicesProps.map((cardData, index) => (
                      <div className='card_box_col'><BasicCard key={index} cardData={cardData} /></div>
                    ))}
                    </div>
                  </div>
                  <div className='w-2/5 card_col'>
                  
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DesignSection;