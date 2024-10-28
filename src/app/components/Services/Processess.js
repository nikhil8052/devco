import React from 'react';
import Process from '@/app/components/Services/Process';

export default function Benefits({title="", description="", processes=[]}) {
  return (
    <div className="benefits-section py-12">
      <div className="section-head w-ful max-w-[590px]">
        <h2 className='section_head_title font-semibold text-[34px] 2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[34px] mb-5 text-customwhite'>{title}</h2>
        <div className='descr_head'>
          <p className='section_head_para text[14px]  2xl:text-[22px] xl:text-[18px] md:text[14px] sm:text[14px]  font-normal text-customwhite'>{description}</p>
        </div>
      </div>
      <div className="benefits-container grid grid-cols-1 md:grid-cols-2 gap-6 p-6  mx-auto">
        {
          processes.map((obj, index )=>{
           
            return (
               <div key={index} >
                    <Process
                      title={obj.title}
                      description={obj.description}
                      imageHeight={obj.imageHeight}
                      imageWidth={obj.imageWidth}
                    />
               </div>
            )
          })
        }
       
      </div>
    </div>
  );
}
