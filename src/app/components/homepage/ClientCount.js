import React from 'react';
import ClientCountComponent from '../cards/ClientCountComponent';
import { clientCountData1 , clientCountData2,clientCountData3  } from '../../data/home';

export default function ClientCount() {
  return (

    <div className='clint_count_section py-10 md:py-20' style={{
      backgroundImage: "url('/images/clients_bg.png')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'  // Add backgroundSize if you want it to cover the area properly
    }}>
      <div className='container mx-auto'>
      <div className="section_head grid  md:grid-cols-2 xl:gap-20 md:gap-10 lg:mb-20 md:mb-10 mb-5"> 
          <div className='left_text_col'>
          <h2 className="text-white text-[34px] 2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[34px] md:mb-0 mb-5 "> Our Web <br></br> Development <span className='text-headingBlue'>Clients</span></h2>
          </div>
          <div className='right_text_col'>
            <p className='2xl:text-[24px] xl:text-[18px] md:text-[16px] sm:text-[14px] text-[14px] font-normal text-customwhite'>Our custom dev services are trusted software companies, small businesses and Fortune 500 companies alike </p>
          </div>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-4'>
          <div className='client_col h-full'>
          <ClientCountComponent
                imageSrc={clientCountData1.imageSrc}
                imageWidth={clientCountData1.imageWidth}
                imageHeight={clientCountData1.imageHeight}
                title={clientCountData1.title}
                description={clientCountData1.description}
              />
          </div>
          <div className='client_col h-full'>
                  <ClientCountComponent
                imageSrc={clientCountData2.imageSrc}
                imageWidth={clientCountData2.imageWidth}
                imageHeight={clientCountData2.imageHeight}
                title={clientCountData2.title}
                description={clientCountData2.description}
              />
          </div>
          <div className='client_col h-full'>
                        <ClientCountComponent
                imageSrc={clientCountData3.imageSrc}
                imageWidth={clientCountData3.imageWidth}
                imageHeight={clientCountData3.imageHeight}
                title={clientCountData3.title}
                description={clientCountData3.description}
              />
          </div>
        </div>
          
      </div>
    </div>
   
  );
}
