import React from 'react';
import Benefit from "@/app/components/Services/Benefit";

export default function Benefits({ benefits=[]}) {
  return (
<div className='new_section'>
  <div className='container'>
  <div className="grid-head w-full max-w-[590px]'">
    <h2 className='section_head_title font-semibold text-[34px] 2xl:text-[64px] xl:text-[45px] md:text-[36px] sm:text-[34px] mb-5 text-customwhite'>The Benefits of Hiring a Software Development Staffing Company</h2>
    <div className='w-full max-w-[590px]'>
      <p className='section_head_para text[14px]  2xl:text-[22px] xl:text-[18px] md:text[14px] sm:text[14px]  font-normal text-customwhite'>Hiring a software development staffing company yields multiple benefits simultaneously:</p>
    </div>
  </div>
    <div className="benefits-container grid grid-cols-1 md:grid-cols-2 gap-6">
        {




          benefits.map((obj, index)=>{
            return (
              <div key={index}>
                 <Benefit title={obj.title}  description={obj.description}   imageSrc={obj.imageSrc}  imageHeight={obj.imageHeight}  imageWidth={obj.imageWidth}   />
              </div>
            )
          })
        }
    </div>
  </div>
</div>
  );
}
