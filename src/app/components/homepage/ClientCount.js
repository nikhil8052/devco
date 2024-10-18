import React from 'react';
import ClientCountComponent from '../cards/ClientCountComponent';
import { clientCountData1 , clientCountData2,clientCountData3  } from '../../data/home';

export default function ClientCount() {
  return (

    <div className='clint_count_section py-20'>
      <div className='container mx-auto'>
      <div className="section_head grid grid-cols-2 gap-20 mb-20"> 
          <div className='left_text_col'>
          <h2 className="text-white text-5xl mb-0 "> Our Web <br></br> Development Clients</h2>
          </div>
          <div className='right_text_col'>
            <p className='text-[24px] font-normal text-customwhite'>Our custom dev services are trusted software companies, small businesses and Fortune 500 companies alike </p>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-4'>
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
