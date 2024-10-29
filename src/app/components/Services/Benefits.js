import React from 'react';
import Benefit from "@/app/components/Services/Benefit";

export default function Benefits({title="",description="", benefits=[]}) {
  return (
<div className='new_section benefits_section'>
  <div className='container'>
  <div className="grid-head w-full max-w-[600px] xl:mb-10 mb-5">
    <h2 className='section_head_title font-semibold text-[34px] 2xl:text-[40px] xl:text-[38px] md:text-[32px] sm:text-[28px] md:mb-3 mb-2 text-customwhite'>{title}</h2>
    <div className='w-full'>
      <p className='section_head_para text[14px]  2xl:text-[22px] xl:text-[18px] md:text[14px] sm:text[14px]  font-normal text-customwhite'>{description}</p>
    </div>
  </div>
    <div className="benefits-container grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
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
  <div className='divider flex items-center content-center h-[150px] w-[100%] mx-auto mt-20'>
        <div className='divider_line h-[1px] w-[100%] bg-[#ffffff] opacity-10'>
        </div>
      </div>
</div>
  );
}
