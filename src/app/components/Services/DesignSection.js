import React from 'react';
import Image from 'next/image';

const DesignSection = () => {
  return (
    <div className='service_section py-20 relative' style={{
      backgroundImage: "url('/images/right_circle.svg')",
      backgroundRepeat: "no-repeat",
    }}>

        <div className='services_grid_wrapper'>
          <div className="section_head ">
            <div className='container mx-auto'>
                <h2 className='section_head_title font-semibold text-[64px] mb-5 text-customwhite'>Design</h2>
            </div>
          </div>
          <div className="section_head_description relative ">
            <div className='container mx-auto mx-auto'>
               
                <div class="grid grid-cols-2 gap-6 w-full">
                  <div class="text_col">
                  <p className='section_head_para text-[22px] font-normal text-customwhite'>The best custom software development companies include the best UX design. The best UX starts with strategic planning. By aligning our digital transformation solutions with your vision and goals, we become a true partner, starting at UX/UI design.</p>
                  </div>
                  <div class="media_col">
                  <Image
                      className='service_frame absolute top-0 right-0 px-20 w-1/2'
                      src="/images/design_frame.png"
                      alt="Banner Image"
                      width={1920}
                      height={300}
                    />
                  </div>
                </div>
            </div>
          </div>
          <div className='service_cards_wrapper'>
            <div className='container mx-auto'>
              <div className='card_col_flex flex flex-wrap w-full'>
                  <div className='w-3/5 card_col'>
                    <div className='card_grid grid grid-cols-2 gap-4'>
                      <div className='card_box_col'>1</div>
                      <div className='card_box_col'>2</div>
                      <div className='card_box_col'>3</div>
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